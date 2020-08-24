import React from 'react';
import styled from 'styled-components';

import { VariableContainer } from '@components';
import '@components/variable-container/style';

const Container = styled.div`
  padding: 20px;
  background: #fff;
`;

const Body = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  background: #eee;
`;

const Top = styled.div`
  flex: 1;
  background: #ddd;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  background: pink;
  flex-direction: column;
`;

export default () => {
  const onBoundary = types => {
    console.log('--->> 到达边界吧', types);
  };

  return (
    <Container>
      <Body>
        <VariableContainer
          onBoundary={onBoundary}
          operationList={['right']}
          margin={{ right: '20%' }}
          style={{ height: '100' }}>
          左侧
        </VariableContainer>
        <Right>
          <Top>顶部</Top>
          <VariableContainer
            margin={{ top: 50 }}
            onBoundary={onBoundary}
            operationList={['top']}
            defaultParams={{ height: 100 }}
            constraintSize={{ height: 100 }}
            style={{ width: '100%', top: 0 }}>
            底部
          </VariableContainer>
        </Right>
      </Body>
    </Container>
  );
};
