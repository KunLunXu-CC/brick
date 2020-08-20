import * as pages from '../pages';

export default {
  logo: { img: void 0, title: 'QYRC' },
  menu: [
    {
      url: '/',
      key: 'home',
      title: '首页',
      icon: 'HomeOutlined',
      router: [{ path: '/', component: pages.Home, exact: true }],
    },
    {
      title: '通用',
      key: 'common',
      icon: 'BorderInnerOutlined',
      children: [
        {
          key: 'icon',
          title: '图标',
          url: '/common/icon',
          router: [{ path: '/common/icon', component: pages.Icon }],
        },
        {
          title: 'markdown',
          key: 'Markdown 渲染',
          url: '/common/markdown',
          router: [{ path: '/common/markdown', component: pages.Markdown }],
        },
        {
          key: 'editor',
          title: '编辑器',
          url: '/common/editor',
          router: [{ path: '/common/editor', component: pages.Editor }],
        },
      ],
    },
    {
      title: '容器',
      key: 'container',
      icon: 'InboxOutlined',
      children: [
        {
          title: '可变容器',
          key: 'variableContainer',
          url: '/container/variable-container',
          router: [{
            component: pages.VariableContainer,
            path: '/container/variable-container',
          }],
        },
        {
          title: '窗体',
          key: 'window',
          url: '/container/window',
          router: [{ path: '/container/window', component: pages.Window }],
        },
        {
          title: '图片',
          key: 'image',
          url: '/container/image',
          router: [{ path: '/container/image', component: pages.Image }],
        },
        {
          key: 'resize',
          title: '监听 Resize',
          url: '/container/resize',
          router: [{ path: '/container/resize', component: pages.Resize }],
        },
      ],
    },
  ],
};
