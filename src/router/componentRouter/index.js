/**
 * @author: 黄小林
 * @Date: 2023/3/6
 * @Desc: 无
 **/
export default [
  {
    name: 'baseComponent',
    title: '基础组件',
    path: '/component',
    component: () => import('@/views/component.vue'),
    children: [
      {
        name: 'button',
        title: '按钮 Button',
        path: '/button',
        component: () => import('/packages/button/README.md')
      },
      {
        name: 'icon',
        title: '图标 Icon',
        path: '/icon',
        component: () => import('/packages/icon/README.md')
      },
      {
        name: 'layout',
        title: '布局 Layout',
        path: '/layout',
        component: () => import('/packages/layout/README.md')
      },
      {
        name: 'container',
        title: '容器 Container',
        path: '/container',
        component: () => import('/packages/container/README.md')
      }
    ],
  },
  {
    name: 'dataViewComponent',
    title: 'Data 数据展示',
    path: '/component',
    component: () => import('@/views/component.vue'),
    children: [
      {
        name: 'badge',
        title: '角标 Badge',
        path: '/badge',
        component: () => import('/packages/badge/README.md')
      }
    ]
  },
  {
    name: 'formComponent',
    title: '表单组件',
    path: '/component',
    component: () => import('@/views/component.vue'),
    children: [
      {
        name: 'input',
        title: '文本输入 Input',
        path: '/input',
        component: () => import('/packages/input/README.md')
      }
    ]
  },
  {
    name: 'feedbackComponent',
    title: '反馈组件',
    path: '/component',
    component: () => import('@/views/component.vue'),
    children: [
      {
        name: 'message',
        title: '消息 Message',
        path: '/message',
        component: () => import('/packages/message/README.md')
      },
      {
        name: 'messageBox',
        title: '消息弹框 MessageBox',
        path: '/message-box',
        component: () => import('/packages/messageBox/README.md')
      }
    ]
  }
]