import { configOptions } from './config-options.js';

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

function renderJson(obj, container, currentPath = '') {
  if (typeof obj !== 'object' || obj === null) return;
  const isArray = Array.isArray(obj);
  const keys = isArray ? obj : Object.keys(obj);

  for (const key in keys) {
    const actualKey = isArray ? key : keys[key];
    const value = isArray ? obj[key] : obj[actualKey];
    const wrapper = document.createElement('div');
    wrapper.className = 'node';

    const fullPath = currentPath ? `${currentPath}.${actualKey}` : actualKey;

    if (typeof value === 'object' && value !== null) {
      const keySpan = document.createElement('span');
      keySpan.className = 'key';
      keySpan.textContent = (isArray ? '' : actualKey + ': ') + (Array.isArray(value) ? '[...]' : '{...}');

      const child = document.createElement('div');
      child.className = 'value';
      child.style.display = 'block';
      renderJson(value, child, fullPath);

      keySpan.onclick = () => {
        child.style.display = child.style.display === 'none' ? 'block' : 'none';
      };

      wrapper.appendChild(keySpan);
      wrapper.appendChild(child);
    } else {
      const keyLabel = document.createElement('span');
      keyLabel.textContent = (isArray ? '' : actualKey + ': ');
      const pathOptions = configOptions[fullPath];
      let input;
      let showWarning = false;

      if (pathOptions && pathOptions.length === 1) {
        if (pathOptions[0] === '!float value!') {
          input = document.createElement('input');
          input.type = 'number';
          input.step = 'any';
        } else if (pathOptions[0] === '!unsigned int32 value!') {
          input = document.createElement('input');
          input.type = 'number';
          input.min = '0';
          input.max = '4294967295';
          input.step = '1';
        } else if (pathOptions[0] === '!text value!') {
          input = document.createElement('input');
          input.type = 'text';
        } else {
          input = document.createElement('select');
          pathOptions.forEach(opt => {
            const option = new Option(opt, opt, opt === value, opt === value);
            input.appendChild(option);
          });
          if (!pathOptions.includes(value)) showWarning = true;
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
          const option = new Option(opt, opt, opt === value);
          input.appendChild(option);
        });
      } else {
        input = document.createElement('input');
        input.type = 'text';
        input.value = value;
      }

      input.className = 'edit-field';
      input.dataset.path = fullPath;
      if (!input.value) input.value = value;

      wrapper.appendChild(keyLabel);
      wrapper.appendChild(input);

      if (showWarning) {
        const warn = document.createElement('span');
        warn.textContent = ' ⚠ Value not in allowed options!';
        warn.style.color = 'red';
        warn.style.marginLeft = '8px';
        wrapper.appendChild(warn);
        input.style.borderColor = 'red';
      }
    }

    container.appendChild(wrapper);
  }
}

function updateJsonView(obj) {
  const container = document.getElementById('jsonView');
  container.innerHTML = '';
  renderJson(obj, container);
}

function hasInvalidValues(obj, path = '') {
  if (typeof obj !== 'object' || obj === null) return false;
  for (const key in obj) {
    const fullPath = path ? `${path}.${key}` : key;
    const value = obj[key];
    const options = configOptions[fullPath];
    if (options && Array.isArray(options) && !options.includes(value)) {
      return true;
    }
    if (typeof value === 'object' && value !== null) {
      if (hasInvalidValues(value, fullPath)) return true;
    }
  }
  return false;
}

let configObj = {};

document.addEventListener('DOMContentLoaded', function () {
  const cfgInput = document.getElementById('cfgFile');
  const downloadBtn = document.getElementById('downloadBtn');

  cfgInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function () {
      try {
        configObj = parseConfig(reader.result);
        updateJsonView(configObj);
        downloadBtn.style.display = 'inline-block';
      } catch (err) {
        alert('Error parsing config: ' + err.message);
      }
    };
    reader.readAsText(file);
  });

  downloadBtn.onclick = function () {
    const inputs = document.querySelectorAll('.edit-field');
    inputs.forEach(input => {
      const path = input.dataset.path.split('.');
      setNestedValue(configObj, path, input.value);
    });

    if (hasInvalidValues(configObj)) {
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
