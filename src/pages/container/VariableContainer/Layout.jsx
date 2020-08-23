import React from 'react';

import { VariableContainer } from '@components';
import '@components/variable-container/style';

export default () => {
  const onBoundary = types => {
    console.log('--->> 到达边界吧', types);
  };

  return (
    <div style={{
      width: 800,
      height: 400,
      display: 'flex',
      background: '#eee',
    }}>
      <VariableContainer
        onBoundary={onBoundary}
        operationList={['right']}
        margin={{ right: '20%' }}
        style={{ height: '100' }}
      >
        左侧
      </VariableContainer>
      <div style={{
        flex: 1,
        background: 'pink',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ flex: 1, background: '#1a1a1a' }}>
          顶部
        </div>
        <VariableContainer
          margin={{ top: 50 }}
          onBoundary={onBoundary}
          operationList={['top']}
          defaultParams={{ height: 100 }}
          constraintSize={{ height: 100 }}
          style={{ width: '100%', top: 0 }}>
          底部
        </VariableContainer>
      </div>
    </div>
  );
};
