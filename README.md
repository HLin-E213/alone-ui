# 欢迎使用 alone-ui <br>

## 介绍

这是一个模仿element-ui写的ui组件。用以练手和学习，能力有限，很多重要的功能并没有实现，已经实现的功能有一部分并没有完全按照element的功能来。

以下是使用的技术栈 **vue3, vite, vite-plugin-md, scss**

## 已经实现组件

`Button 按钮` `Input 输入框` `Message 信息`  `icon 图标`  `Badge 角标`<br>

## 环境支持
由于 Vue 3 不再支持 IE11，所以 **alone-ui** 也不再支持 IE 浏览器。如果你在使用 Vue2，可以去看看别的库。

|  | | | |
| - | - | - | - |
| Edge ≥ 79 | Firefox ≥ 78 | Chrome ≥ 64 | Safari ≥ 12|

## 版本
目前还处于快速开发迭代中。

## 使用npm安装

```shell
npm install -D alone-ui
```

## 引入方式，可全局引入，可组件内按需引入

全局在 main.js 中引入
```javascript
import {createApp} from 'vue'
const app = createApp(App)
import aloneUI from 'alone-ui' // 如果按需引入,则不需要
import '../node_modules/alone-ui/dist/style.css' // 引入样式
app.use(aloneUI)
```
按需引入
```javascript
import { aButton } from 'alone-ui'
```
