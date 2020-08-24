import React, { useState } from 'react';
import styled from 'styled-components';

import { VariableContainer } from '@components';
import '@components/variable-container/style';

const BODY_WIDTH = 800;

const Container = styled.div`
  padding: 20px;
  background: #fff;
  margin-bottom: 20px;
`;

const Body = styled.div`
  height: 500px;
  overflow: hidden;
  width: ${BODY_WIDTH}px;

  background: rgba(255, 0, 0, 0.1);
`;

const Content = styled.div`
  width: 900px;
  height: 900px;
  background: pink;
`;

const Link = styled.div`
  padding: 8px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: inline-block;

  color: #fff;
  cursor: pointer;
  background: #1890ff;
`;

export default () => {
  const [params, setParams] = useState({ width: 200 });

  const onResize = params => {
    setParams(params);
  };

  const onReset = () => {
    setParams({ width: BODY_WIDTH });
  };

  return (
    <Container>
      <Link onClick={onReset}>宽度最大化</Link>
      <Body>
        <VariableContainer params={params} onResize={onResize}>
          <Content>
            内容
          </Content>
        </VariableContainer>
      </Body>
    </Container>
  );
};
