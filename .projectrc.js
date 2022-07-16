import React from 'react'
import * as Pages from './src/Pages';

export default {
  logo: {             // logo 配置
    img: void 0,      // logo 配置图片: require('*/**/*.png')
    title: 'KLX 组件库', // 标题
  },
  // footer: () => ('footer'),  // 组件
  // header: () => ('header'),  // 组件

  menu: [
    {
      url: '/',
      key: 'home',
      title: '首页',
      icon: 'HomeOutlined',
      routes: [{ path: '/', element: <Pages.Home /> }],
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
          routes: [{ path: '/common/icon', element: <Pages.Icon /> }],
        },
        {
          key: 'editor',
          title: '编辑器',
          url: '/common/editor',
          routes: [{ path: '/common/editor', element: <Pages.Editor /> }],
        },
        {
          key: 'echarts',
          title: 'Echarts',
          url: '/common/echarts',
          routes: [{ path: '/common/echarts', element: <Pages.Echarts /> }],
        },
        {
          key: 'markdown',
          title: 'Markdown',
          url: '/common/markdown',
          routes: [{ path: '/common/markdown', element: <Pages.Markdown /> }],
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
          routes: [{
            element: <Pages.VariableContainer />,
            path: '/container/variable-container',
          }],
        },
        {
          title: '窗体',
          key: 'window',
          url: '/container/window',
          routes: [{ path: '/container/window', element: <Pages.Window /> }],
        },
        {
          title: '图片',
          key: 'image',
          url: '/container/image',
          routes: [{ path: '/container/image', element: <Pages.Image /> }],
        },
        {
          key: 'resize',
          title: '监听 Resize',
          url: '/container/resize',
          routes: [{ path: '/container/resize', element: <Pages.Resize /> }],
        },
      ],
    },
  ],
};
