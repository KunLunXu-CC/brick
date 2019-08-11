import React from 'react';

import { VariableBlock } from '@components';
import '@components/variable-block/style';

export default () => {
  return (
    <div style={{ background: 'rgba(255, 0, 0, 0.1)', width: '800px', height: '500px' }}>
      <VariableBlock
        onResize={ (params) => {console.log('--->>>>>> onresize', params)}}
      />
    </div>
  );
};
