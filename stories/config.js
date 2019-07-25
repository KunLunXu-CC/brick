import Introduce from './pages/base/Introduce';
import scrollbar from './pages/container/Scrollbar';
import ModalDemo from './pages/container/modal';

export default [
  {
    title: '介绍',
    module: '基本',
    component: Introduce
  },
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
