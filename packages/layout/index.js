/**
 * @author: 黄小林
 * @Date: 2023/3/10
 * @Desc: 无
 **/
import ARow from './utils/a-row'
import ACol from './utils/a-col'

export default {
  install(app) {
    app.component(ARow.name, ARow)
    app.component(ACol.name, ACol)
  }
}

export {ARow, ACol}
