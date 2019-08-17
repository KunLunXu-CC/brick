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

  return (
    <Markdown options={{ overrides: { img: Img } }}>
      {testMd}
    </Markdown>
  );
};
