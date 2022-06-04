import React from 'react';
import { Window } from '@components';

import '../../../../components/window/style';
import './index.scss';

export default () => (
  <div className="window-demo">
    <Window defaultParams={{ width: '50%', height: '50%' }}>
      <div className="window-demo-body" />
    </Window>
  </div>
);
