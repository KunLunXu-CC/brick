import ModalDemo from '@pages//container/modal';
import Introduce from '@pages/base/Introduce';
import IconDemo from '@pages/currency/Icon';
import scrollbar from '@pages/container/Scrollbar';

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
  /***** 容器 *****/
  {
    title: '滚动条',
    module: '容器',
    component: scrollbar
  },
  {
    title: '弹窗',
    module: '容器',
    component: ModalDemo
  }
];
