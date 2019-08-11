import React, { useState, useEffect } from 'react';

import { VariableBlock } from '@components';
import '@components/variable-block/style';

export default () => {
  const [params, setParams] = useState(null);

  useEffect(() => {
    console.log('---->>>>>>>> params change', params);
  }, [params]);

  const onResize = (params) => {
    console.log('---->>>>>>>> onResize', params);
    setParams(params);
  }

  return (
    <div>
      <div onClick={() => {}}>最大</div>
      <div onClick={() => {setParams({ width: 400 })}}>最小</div>
      <div style={{ background: 'rgba(255, 0, 0, 0.1)', width: '800px', height: '500px' }}>
        <VariableBlock params={params} onResize={onResize}/>
      </div>
    </div>
  );
};
