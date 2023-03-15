/**
 * @author: 黄小林
 * @Date: 2023/3/9
 * @Desc: 无
 **/

import { createVNode, render } from 'vue'
import aMessage from '../index.vue'

const boxId = 'a-message__function'
const container = document.createElement('div')
document.body.appendChild(container)
container.id = boxId

let timer
let num = 0
const messageTypes = ['success', 'info', 'warning', 'danger']
const AMessageFn = (props) => {
  num++
  const containItem = document.createElement('div')
  let options = {
    message: '',
    duration: 3000,
    grouping: false
  }
  if (typeof props === 'string') {
    options.message = props
  } else {
    options = { ...options, ...props }
    if (props.grouping) options.repeatNum = num
  }
  // 创建虚拟dom
  const boxVNode = createVNode(aMessage, options)
  // 将虚拟dom渲染到container上面
  // render(boxVNode, container)
  renderHelper(boxVNode, containItem, options)
  // 开启定时器，若原先存在则先进行清除
  timer && clearTimeout(timer)
  if (options.duration > 0)
  timer = setTimeout(() => {
    num = 0
    render(null, container)
  }, options.duration + 50)
  return {
    close: () => {
      boxVNode.component.proxy.visible = false
    }
  }
}

const renderHelper = (vm, containItem, options) => {
  if (options.grouping) {
    render(vm, container)
  } else {
    render(vm, containItem)
    container.appendChild(containItem)
  }
}

const optionHelper = (props, type) => {
  let options = {}
  if (typeof props === 'string') {
    options.message = props
    options.type = type
  } else {
    options = { ...props, type }
  }
  return options
}

messageTypes.forEach((type) => {
  AMessageFn[type] = (message) => AMessageFn(optionHelper(message, type))
})

export { AMessageFn }
