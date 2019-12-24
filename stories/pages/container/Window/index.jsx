import React, { useRef, useState, useEffect } from 'react';
import { Window, VariableBlock } from '@components';

import '../../../../components/window/style';
import './index.scss';

export default (props) => {

  return (
    <div className="window-demo">
      <Window defaultParams={{ width: '50%', height: '50%' }}>
        <div className="window-demo-body">

        </div>
      </Window>
    </div>
  );
};
