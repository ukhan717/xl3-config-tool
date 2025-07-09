// Function to parse the documentation JSON and generate configOptions
function parseConfigOptions(docJson, prefix = '') {
  const configOptions = {};

  function traverse(obj, currentPath = '') {
    for (const key in obj) {
      const value = obj[key];
      const newPath = currentPath ? `${currentPath}.${key}` : key;

      if (typeof value === 'string') {
        // Parse the option string, e.g., "[ on | off ]" or "[ !float value! ]"
        const trimmed = value.trim();
        if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
          const content = trimmed.slice(1, -1).trim();
          if (content.startsWith('!') && content.endsWith('value!')) {
            // Handle special types like !float value!, !text value!
            configOptions[newPath] = [content];
          } else {
            // Handle enum options
            const options = content.split('|').map(opt => opt.trim()).filter(opt => opt);
            configOptions[newPath] = options;
          }
        }
      } else if (typeof value === 'object' && value !== null) {
        // Recursively traverse nested objects
        traverse(value, newPath);
      }
    }
  }

  traverse(docJson);
  return configOptions;
}

function parseConfig(cfgText) {
  const match = cfgText.match(/##CONFIG:\s*([\s\S]*)/);
  if (!match) throw new Error('No ##CONFIG: section found');
  return JSON.parse(match[1].trim());
}

function setNestedValue(obj, pathArray, value) {
  let target = obj;
  for (let i = 0; i < pathArray.length - 1; i++) {
    target = target[pathArray[i]];
  }
  target[pathArray[pathArray.length - 1]] = value;
}

function renderJson(obj, container, currentPath = '', configOptions, level = 0) {
  if (typeof obj !== 'object' || obj === null) return;
  const isArray = Array.isArray(obj);
  const keys = isArray ? obj : Object.keys(obj);

  let index = 0;
  for (const key in keys) {
    const actualKey = isArray ? key : keys[key];
    const value = isArray ? obj[key] : obj[actualKey];
    const wrapper = document.createElement('div');
    wrapper.className = `flex items-center justify-between py-2 pl-${4 + (level * 2)} ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`; // Added justify-between

    const fullPath = currentPath ? `${currentPath}.${actualKey}` : actualKey;

    if (typeof value === 'object' && value !== null) {
      const keySpan = document.createElement('span');
      keySpan.className = 'font-semibold text-blue-800 cursor-pointer hover:bg-blue-100 hover:rounded px-1 transition-colors';
      keySpan.textContent = (isArray ? '' : actualKey + ': ') + (Array.isArray(value) ? '[...]' : '{...}');

      const child = document.createElement('div');
      child.className = 'ml-4 mt-1';
      child.style.display = 'block';
      renderJson(value, child, fullPath, configOptions, level + 1);

      keySpan.onclick = () => {
        child.style.display = child.style.display === 'none' ? 'block' : 'none';
      };

      wrapper.appendChild(keySpan);
      wrapper.appendChild(child);
    } else {
      const keyLabel = document.createElement('span');
      keyLabel.className = 'font-semibold text-gray-800 mr-3 w-36 truncate'; // Increased width to 36
      keyLabel.textContent = (isArray ? '' : actualKey + ': ');
      const pathOptions = configOptions[fullPath];
      let inputWrapper = document.createElement('div');
      inputWrapper.className = 'flex items-center space-x-2'; // Right-aligned group
      let input;
      let showWarning = false;

      if (pathOptions && pathOptions.length === 1) {
        if (pathOptions[0] === '!float value!') {
          input = document.createElement('input');
          input.type = 'number';
          input.step = 'any';
          input.value = value;
          input.className = 'p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white w-32 flex-grow transition-colors';
        } else if (pathOptions[0] === '!unsigned int32 value!') {
          input = document.createElement('input');
          input.type = 'number';
          input.min = '0';
          input.max = '4294967295';
          input.step = '1';
          input.value = value;
          input.className = 'p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white w-32 flex-grow transition-colors';
        } else if (pathOptions[0] === '!text value!') {
          input = document.createElement('input');
          input.type = 'text';
          input.value = value;
          input.className = 'p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white w-64 flex-grow transition-colors';
        } else {
          input = document.createElement('select');
          pathOptions.forEach(opt => {
            const option = new Option(opt, opt);
            input.appendChild(option);
          });
          input.value = value; // Always set to config value
          if (!pathOptions.includes(value)) showWarning = true;
          input.className = 'p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white w-32 flex-grow transition-colors';
        }
      } else if (pathOptions) {
        input = document.createElement('select');
        if (!pathOptions.includes(value)) {
          const invalidOption = new Option(value + ' (invalid)', value, true, true);
          invalidOption.disabled = true;
          input.appendChild(invalidOption);
          showWarning = true;
        }
        pathOptions.forEach(opt => {
          const option = new Option(opt, opt);
          input.appendChild(option);
        });
        input.value = value; // Always set to config value
        input.className = 'p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white w-32 flex-grow transition-colors';
      } else {
        input = document.createElement('input');
        input.type = 'text';
        input.value = value;
        input.className = 'p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white w-64 flex-grow transition-colors';
      }

      input.dataset.path = fullPath;
      inputWrapper.appendChild(input);

      if (showWarning) {
        const warn = document.createElement('span');
        warn.textContent = ' ⚠ Value not in allowed options!';
        warn.className = 'text-red-600 ml-3 font-medium warning';
        inputWrapper.appendChild(warn);
        input.className += ' border-red-600';
      }

      // Add event listener to remove warning when value becomes valid
      if (input.tagName === 'SELECT') {
        input.addEventListener('change', function () {
          const selectedValue = this.value;
          const warningSpan = this.nextElementSibling;
          const path = this.dataset.path;
          const validOptions = configOptions[path] || [];
          if (validOptions.includes(selectedValue) && warningSpan && warningSpan.className.includes('warning')) {
            warningSpan.remove();
            this.className = this.className.replace('border-red-600', '').trim();
          }
        });
      }

      wrapper.appendChild(keyLabel);
      wrapper.appendChild(inputWrapper);
    }

    container.appendChild(wrapper);
    index++;
  }
}

function updateJsonView(obj, configOptions) {
  const container = document.getElementById('jsonView');
  container.innerHTML = '';
  renderJson(obj, container, '', configOptions, 0);
}

function hasInvalidValues(obj, configOptions, path = '') {
  if (typeof obj !== 'object' || obj === null) return false;
  for (const key in obj) {
    const fullPath = path ? `${path}.${key}` : key;
    const value = obj[key];
    const options = configOptions[fullPath];
    if (options && Array.isArray(options) && options.length > 1 && !options.includes(value)) {
      return true;
    }
    if (typeof value === 'object' && value !== null) {
      if (hasInvalidValues(value, configOptions, fullPath)) return true;
    }
  }
  return false;
}

let configObj = {};
let configOptions = {};

document.addEventListener('DOMContentLoaded', function () {
  const cfgInput = document.getElementById('cfgFile');
  const docInput = document.getElementById('docFile');
  const downloadBtn = document.getElementById('downloadBtn');

  // Handle documentation file input
  docInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function () {
      try {
        const docJson = JSON.parse(reader.result);
        configOptions = parseConfigOptions(docJson);
        cfgInput.disabled = false; // Enable config file input
        cfgInput.title = ''; // Clear tooltip
        if (configObj && Object.keys(configObj).length > 0) {
          updateJsonView(configObj, configOptions);
        }
      } catch (err) {
        alert('Error parsing documentation file: ' + err.message);
        cfgInput.disabled = true;
        cfgInput.title = 'Please load a valid documentation.json first';
      }
    };
    reader.readAsText(file);
  });

  cfgInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;
    if (Object.keys(configOptions).length === 0) {
      alert('Please load documentation.json first');
      cfgInput.value = ''; // Clear the input
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      try {
        configObj = parseConfig(reader.result);
        updateJsonView(configObj, configOptions);
        downloadBtn.style.display = 'inline-block';
      } catch (err) {
        alert('Error parsing config: ' + err.message);
      }
    };
    reader.readAsText(file);
  });

  downloadBtn.onclick = function () {
    const inputs = document.querySelectorAll('[data-path]');
    inputs.forEach(input => {
      const path = input.dataset.path.split('.');
      setNestedValue(configObj, path, input.value);
    });

    if (hasInvalidValues(configObj, configOptions)) {
      const proceed = confirm('Warning: The config file contains invalid data that needs to be fixed!\nDo you want to continue downloading?');
      if (!proceed) return;
    }

    const blob = new Blob(['##CONFIG:\n' + JSON.stringify(configObj, null, 2)], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'modified.xl3cfg';
    a.click();
  };
});
