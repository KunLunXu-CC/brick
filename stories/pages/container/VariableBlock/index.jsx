import React, { useState, useEffect } from 'react';

import { VariableBlock } from '@components';
import '@components/variable-block/style';

// 1. 在容器内使用
const Container = () => {
  const [params, setParams] = useState({ width: 400 });

  const onResize = (params) => {
    setParams(params);
  }

  const operationList = ['top', 'left', 'right', 'bottom', 'leftTop', 'rightTop', 'leftBottom', 'rightBottom', 'drag'];

  return (
    <div>
      <div style={{textAlign: 'center'}} onClick={() => {setParams({ width: 400 })}}>最大</div>
      <div
        style={{
          margin: 50,
          width: '800px',
          height: '500px',
          overflow: 'hidden',
          background: 'rgba(255, 0, 0, 0.1)',
        }}
      >
        <VariableBlock
          params={params}
          onResize={onResize}
          operationList={operationList}
        >
          <div style={{ background: 'pink', width: 900, height: 900 }}>
            内容
          </div>
        </VariableBlock>
      </div>
    </div>
  );
};

// 2. layout 在布局中使用
const Layout = () => {
  return (
    <div style={{ display: 'flex', width: 800, height: 400, background: '#eee' }}>
      <VariableBlock
        operationList={['right']}
        margin={{ right: '20%' }}
        style={{ height: '100%', transform: 'translate(0px, 0px)' }}
      >
        左侧
      </VariableBlock>
      <div style={{ flex: 1, background: 'pink', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, background: '#1a1a1a' }}>
          顶部
        </div>
        <VariableBlock
          margin={{ top: 50 }}
          operationList={['top']}
          defaultParams={{ height: 100 }}
          constraintSize={{ height: 100 }}
          style={{ width: '100%', transform: 'translate(0px, 0px)' }}
        >
          底部
        </VariableBlock>
      </div>
    </div>
  );
}

export default () => {
  return (
    <div style={{ margin: '100px 0' }}>
      <h2>在特定容器内使用</h2>
      <Container />
      <h2>在布局中使用</h2>
      <Layout />
    </div>
  );
};
