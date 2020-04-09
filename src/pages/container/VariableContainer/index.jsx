import React, { useState } from 'react';

import { VariableContainer } from '@components';
import '@components/variable-container/style';

// 1. 在容器内使用
const Container = () => {
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
          operationList={operationList}
        >
          <div style={{ background: 'pink', width: 900, height: 900 }}>
            内容
          </div>
        </VariableContainer>
      </div>
    </div>
  );
};

// 2. layout 在布局中使用
const Layout = () => {
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
        style={{ height: '100%', transform: 'translate(0px, 0px)' }}
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
          style={{ width: '100%', transform: 'translate(0px, 0px)' }}
        >
          底部
        </VariableContainer>
      </div>
    </div>
  );
};

export default () => (
  <div style={{ margin: '100px 0' }}>
    <h2>在特定容器内使用</h2>
    <Container />
    <h2>在布局中使用</h2>
    <Layout />
  </div>
);
