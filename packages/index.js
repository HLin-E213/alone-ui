/**
 * @author: 黄小林
 * @Date: 2023/3/6
 * @Desc: 无
 **/

export * from './button'
export * from './icon'
export * from './layout'
export * from './container'
export * from './badge'
export * from './input'
export * from './message'
export * from './messageBox'

import AButton from './button'
import AIcon from './icon'
import Layout from './layout'
import Container from './container'
import ABadge from './badge'
import AInput from './input'
const components = [AButton, AIcon, Layout, Container, ABadge, AInput]

const install = app => {
  components.map((item) => {
    app.use(item)
  })
}

const aloneUI = {
  install
}

export default aloneUI