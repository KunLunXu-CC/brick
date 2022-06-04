import React from 'react';

import { Icon } from '@components';
import '@components/icon/style';

import '../../../assets/iconfont/iconfont.js';

const onClick = () => {
  console.log('点击图标');
};

export default () => (
  <div style={{ padding: 100 }}>
    <Icon type="icon-guanbi6" />
    关闭
    {' '}
    <br />
    <br />
    <Icon
      type="icon-docker"
      onClick={onClick}
    />
    docker
    <br />
    <br />
  </div>
);
