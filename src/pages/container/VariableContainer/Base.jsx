import React, { useState } from 'react';

import { VariableContainer } from '@components';
import '@components/variable-container/style';

export default () => {
  const [params, setParams] = useState({ width: 400 });

  const operationList = [
    'top',
    'left',
    'drag',
    'right',
    'bottom',
    'leftTop',
    'rightTop',
    'leftBottom',
    'rightBottom',
  ];

  const onResize = params => {
    setParams(params);
  };

  const onReset = () => {
    setParams({ width: 400 });
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }} onClick={onReset}>最大</div>
      <div
        style={{
          margin: 50,
          width: '800px',
          height: '500px',
          overflow: 'hidden',
          background: 'rgba(255, 0, 0, 0.1)',
        }}>
        <VariableContainer
          params={params}
          onResize={onResize}
          // operationList={operationList}
        >
          <div style={{ background: 'pink', width: 900, height: 900 }}>
            内容
          </div>
        </VariableContainer>
      </div>
    </div>
  );
};

