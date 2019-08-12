import React, { useState, useEffect } from 'react';

import { VariableBlock } from '@components';
import '@components/variable-block/style';

export default () => {
  const [params, setParams] = useState(null);

  const onResize = (params) => {
    setParams(params);
  }

  const operationList = ['top', 'left', 'right', 'bottom', 'leftTop', 'rightTop', 'leftBottom', 'rightBottom', 'drag'];

  return (
    <div>
      <div onClick={() => {setParams({ width: 400 })}}>最大</div>
      <div style={{ background: 'rgba(255, 0, 0, 0.1)', width: '800px', height: '500px' }}>
        <VariableBlock 
          params={params} 
          onResize={onResize}
          operationList={operationList} 
        >
          <div style={{ background: 'pink', width: '100%', height: '100%' }}>
            内容
          </div>
        </VariableBlock>
      </div>
    </div>
  );
};
