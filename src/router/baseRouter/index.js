/**
 * @author: 黄小林
 * @Date: 2023/3/8
 * @Desc: 无
 **/
export default [
  {
    name: 'base',
    title: '前言',
    path: '/',
    component: () => import('@/views/component.vue'),
    children: [
      {
        name: 'index',
        title: '项目介绍',
        path: '/',
        component: () => import('@/views/base/index.md')
      },
      {
        name: 'install',
        title: '安装使用',
        path: '/install',
        component: () => import('@/views/base/install.md')
      }
    ]
  }
]