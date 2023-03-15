/**
 * @author: 黄小林
 * @Date: 2023/3/10
 * @Desc: 无
 **/
import AContainer from './utils/a-container.vue'
import AHeader from './utils/a-header.vue'
import AMain from './utils/a-main.vue'
import AFooter from './utils/a-footer.vue'
import AAside from './utils/a-aside.vue'

export default {
  install(app) {
    app.component('AContainer', AContainer)
    app.component('AHeader', AHeader)
    app.component('AMain', AMain)
    app.component('AFooter', AFooter)
    app.component('AAside', AAside)
  }
}
export {AContainer, AHeader, AMain, AFooter, AAside}
