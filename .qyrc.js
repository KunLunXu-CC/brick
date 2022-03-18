import * as pages from './src/pages';

export default {
  logo: {             // logo 配置
    img: void 0,      // logo 配置图片: require('*/**/*.png')
    title: 'QYRC', // 标题
  },
  // footer: () => ('footer'),  // 组件
  // header: () => ('header'),  // 组件

  menu: [
    {
      url: '/',
      key: 'home',
      title: '首页',
      icon: 'HomeOutlined',
      routers: [{ path: '/', component: pages.Home, exact: true }],
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
          routers: [{ path: '/common/icon', component: pages.Icon }],
        },
        {
          key: 'editor',
          title: '编辑器',
          url: '/common/editor',
          routers: [{ path: '/common/editor', component: pages.Editor }],
        },
        {
          key: 'echarts',
          title: 'Echarts',
          url: '/common/echarts',
          routers: [{ path: '/common/echarts', component: pages.Echarts }],
        },
        {
          key: 'markdown',
          title: 'Markdown',
          url: '/common/markdown',
          routers: [{ path: '/common/markdown', component: pages.Markdown }],
        }
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
          routers: [{
            component: pages.VariableContainer,
            path: '/container/variable-container',
          }],
        },
        {
          title: '窗体',
          key: 'window',
          url: '/container/window',
          routers: [{ path: '/container/window', component: pages.Window }],
        },
        {
          title: '图片',
          key: 'image',
          url: '/container/image',
          routers: [{ path: '/container/image', component: pages.Image }],
        },
        {
          key: 'resize',
          title: '监听 Resize',
          url: '/container/resize',
          routers: [{ path: '/container/resize', component: pages.Resize }],
        },
      ],
    },
  ],
};
