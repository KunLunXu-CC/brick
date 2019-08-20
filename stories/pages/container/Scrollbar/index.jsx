import React, { useState } from 'react';
import { Scrollbar } from '@components';
import '@components/scrollbar/style';

export default () => {
  const [height, setHeight] = useState(400);
  const [list, setList] = useState(new Array(20).fill(0));

  const onAddData = () => {
    const news = new Array(10).fill(0);
    setList([...list, ...news]);
  };

  const onAddHeight = () => {
    setHeight(height + 100)
  };

  return (
    <div>
      <div style={{ padding: 20 }}>
        <div onClick={onAddData}>添加数据</div>
        <div onClick={onAddHeight}>增加高度</div>
      </div>
      <Scrollbar style={{ height, width: 800 }}>
        { list.map((v, index) => (<p style={{ width: 900 }} key={index}>滚动内容1<br/><br/><br/><br/></p>)) }
      </Scrollbar>
    </div>
  );
};
