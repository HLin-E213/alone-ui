import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
import aloneUI from '../packages/index.js'
import hljs from "highlight.js"
import './assets/styles/index.scss'
import './assets/styles/cyanosis.markdown.scss' // markdown主题 掘金
import 'highlight.js/styles/color-brewer.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import showCode from '@/components/showCode.vue'

const app = createApp(App)

app.use(aloneUI)
app.use(router)
app.component('showCode', showCode)
app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll("pre code")
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})
