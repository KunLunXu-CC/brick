import React from 'react';

import { Icon } from '@components';
import '@components/icon/style';

import '../../../assets/iconfont/iconfont.js';

export default (props) => {
  return (
    <div style={{ padding: 100 }}>
      <Icon type="icon-guanbi6" />关闭 <br/><br/>
      <Icon type="icon-docker" onClick={() => { console.log('点击') }}/> docker <br/><br/>
    </div>
  );
};
