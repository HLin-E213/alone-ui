/**
 * @author: 黄小林
 * @Date: 2023/3/6
 * @Desc: 无
 **/
import { createRouter, createWebHashHistory } from "vue-router";
import componentRouter from './componentRouter/index'
import baseRouter from './baseRouter/index'
const other = [
  { path: '/:pathMatch(.*)', redirect: '/' }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...componentRouter, ...baseRouter, ...other]
})

export default router