import {h, render} from 'vue';
import BlMessageBox from '../index.vue';

const messageInstance = new Map();
const container = document.createElement('div');
document.body.appendChild(container);
const initInstance = (props, container) => {
  const vNode = h(BlMessageBox, props);
  render(vNode, container);
  return vNode.component;
};
const showMessage = (options = {}) => {
  const instacne = initInstance(options, container);
  const vm = instacne?.proxy;
  options.onAction = (action) => {
    const currentMsg = messageInstance.get(vm);
    let resolve;
    if (options.showInput) {
      resolve = {value: vm.state.inputValue, action};
    } else {
      resolve = action;
    }
    if (options.callback) {
      options.callback(resolve, instacne.proxy);
    } else {
      if (action === 'cancel' || action === 'close') {
        if (options.distinguishCancelAndClose && action !== 'cancel') {
          currentMsg.reject('close');
        } else {
          currentMsg.reject('cancel');
        }
      } else {
        currentMsg.resolve(resolve);
      }
    }
    render(null, container);
  };
  vm['onAction'] = options.onAction;
  for (const prop in options) {
    if (Object.hasOwn(options, prop) && !Object.hasOwn(vm.$props, prop)) {
      vm[prop] = options[prop];
    }
  }
  vm.visible_ = true;
  return vm;
};

function MessageBox(options) {
  let callback;
  if (typeof options === 'string') {
    options = {
      message: options
    };
  } else {
    callback = options.callback;
  }
  return new Promise((resolve, reject) => {
    const vm = showMessage(options);
    messageInstance.set(vm, {
      options,
      callback,
      resolve,
      reject
    });
  });
}

function MessageBoxFn(message, title, options) {
  let option_ = {};
  option_.message = message;
  if (title) {
    if (typeof title === 'string') {
      option_.title = title;
    } else {
      option_ = {...option_, ...title};
    }
  }
  if (options) {
    option_ = {...option_, ...options};
  }
  return MessageBox(option_);
}

MessageBox.close = () => {
  messageInstance.forEach((_, vm) => {
    vm.closed();
  });
  messageInstance.clear();
};
export {MessageBoxFn}