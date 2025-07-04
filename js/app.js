const configOptions = {};

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

      if (pathOptions && pathOptions.length === 1) {
        if (pathOptions[0] === '!float value!') {
          input = document.createElement('input');
          input.type = 'number';
          input.step = 'any';
        } else if (pathOptions[0] === '!text value!') {
          input = document.createElement('input');
          input.type = 'text';
        } else {
          input = document.createElement('select');
          pathOptions.forEach(opt => {
            const option = new Option(opt, opt, opt === value, opt === value);
            input.appendChild(option);
          });
        }
      } else if (pathOptions) {
        input = document.createElement('select');
        pathOptions.forEach(opt => {
          const option = new Option(opt, opt, opt === value, opt === value);
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
    }

    container.appendChild(wrapper);
  }
}

function updateJsonView(obj) {
  const container = document.getElementById('jsonView');
  container.innerHTML = '';
  renderJson(obj, container);
}

let configObj = {};

document.getElementById('cfgFile').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function () {
    try {
      configObj = parseConfig(reader.result);
      updateJsonView(configObj);
      document.getElementById('downloadBtn').style.display = 'inline-block';
    } catch (err) {
      alert('Error parsing config: ' + err.message);
    }
  };
  reader.readAsText(file);
});

document.getElementById('downloadBtn').onclick = function () {
  const inputs = document.querySelectorAll('.edit-field');
  inputs.forEach(input => {
    const path = input.dataset.path.split('.');
    setNestedValue(configObj, path, input.value);
  });

  const blob = new Blob(['##CONFIG:\n' + JSON.stringify(configObj, null, 2)], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'modified.xl3cfg';
  a.click();
};
