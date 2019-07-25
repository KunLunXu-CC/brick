import React from 'react';
import { Scrollbar } from '@components';
import '@components/scrollbar/style';

export default () => {
  return (
    <div style={{ height: '100px' }}>
      <Scrollbar>
        <div style={{ height: '100px' }}>
          滚动内容<br/>
          滚动内容<br/>
          滚动内容<br/>
          滚动内容<br/>
          滚动内容<br/>
          滚动内容<br/>
        </div>
        <div style={{ height: '100px' }}>
          滚动内容<br/>
          滚动内容<br/>
          滚动内容<br/>
          滚动内容<br/>
          滚动内容<br/>
          滚动内容<br/>
        </div>
        <div style={{ height: '100px' }}>
          滚动内容<br/>
          滚动内容<br/>
          滚动内容<br/>
          滚动内容<br/>
          滚动内容<br/>
          滚动内容<br/>
        </div>
      </Scrollbar>
    </div>
  );
};
