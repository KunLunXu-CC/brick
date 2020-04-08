import React, { Fragment ,useState } from 'react';
import { Scroll } from '@components';
import '@components/scroll/style';
import './index.scss';

const Base = () => {
  return (
    <Scroll style={{ height: 300, width: 800, background: 'pink' }} >
    </Scroll>
  );
}

const BindHeight = () => {
  const [height, setHeight] = useState(400);
  const [scrollHeight, setScrollHeight] = useState(100);
  const [list, setList] = useState(new Array(20).fill(0));

  const onAddData = () => {
    const news = new Array(10).fill(0);
    setList([...list, ...news]);
  };

  const onAddHeight = () => {
    setScrollHeight(height + 100);
  }

  const onReturn = () => {
    setScrollHeight(0);
  }

  const onScroll = (scrollHeight) => {
    setScrollHeight(scrollHeight);
  }

  return (
    <div>
      <div style={{ padding: 20 }}>
        <div onClick={onAddData}>添加数据</div>
        <div onClick={onAddHeight}>增加高度</div>
        <div onClick={onReturn}>回到顶部</div>
      </div>
      <Scroll
        dropBody={false}
        onScroll={onScroll}
        scrollHeight={scrollHeight}
        onBodyResize={()=>{console.log('bodyResize')}}
        onResize={()=>{console.log('onResize')}}
        style={{ height, width: 800, background: 'pink' }}
      >
        { list.map((v, index) => (<p style={{ width: 900 }} key={index}>滚动内容1<br/><br/><br/><br/></p>)) }
      </Scroll>
    </div>
  );
}

export default () => {
  return (
    <Fragment>
      <Base /> <br/>
      <BindHeight />
    </Fragment>
  );
};
