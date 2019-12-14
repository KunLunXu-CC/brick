import React, { useEffect }  from 'react';
import { Markdown } from '@components';
import '@components/markdown/style';

import testMd from './test.md';

const Img = (props) => {
  // const src = /http/i.test(props.src) ?
  //   props.src :
  //   require(`${基础路径}${props.src}`);
  return (<img src={props.src} alt=""/>);
};

export default () => {
// theme="dark"
  return (
    // <div style={{ overflow: 'auto', background: 'rgb(41, 41, 41)'}}>
    //   <Markdown theme="dark" options={{ overrides: { img: Img } }}>
    //     {testMd}
    //   </Markdown>
    // </div>
    <div style={{ overflow: 'auto' }}>
    <Markdown>
      {testMd}
    </Markdown>
  </div>
  );
};
