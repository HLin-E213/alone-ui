/**
 * @author: 黄小林
 * @Date: 2023/3/6
 * @Desc: 无
 **/
import aButton from './index.vue'
aButton.install = (app) => {
  app.component('aButton', aButton)
}

export default aButton