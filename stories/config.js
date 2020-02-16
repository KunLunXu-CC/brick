import VariableBlock from '@pages/container/VariableBlock';
import Markdown from '@pages/currency/Markdown';
import Introduce from '@pages/base/Introduce';
import Window from '@pages/container/Window';
import Scroll from '@pages/container/Scroll';
import Editor from '@pages/currency/Editor';
import IconDemo from '@pages/currency/Icon';
import Resize from '@pages/container/Resize';
import Image from '@pages/container/Image';

export default [
  /***** 基本 *****/
  {
    title: '介绍',
    module: '基本',
    component: Introduce
  },
  /***** 通用 *****/
  {
    title: '图标',
    module: '通用',
    component: IconDemo
  },
  {
    title: 'markdown',
    module: '通用',
    component: Markdown
  },
  {
    title: 'editor',
    module: '通用',
    component: Editor
  },
  /***** 容器 *****/
  {
    title: '可变块',
    module: '容器',
    component: VariableBlock
  },
  {
    title: '滚动条',
    module: '容器',
    component: Scroll
  },
  {
    title: '窗体',
    module: '容器',
    component: Window
  },
  {
    title: '图片',
    module: '容器',
    component: Image
  },
  {
    title: '监听 resize',
    module: '容器',
    component: Resize
  },
];
