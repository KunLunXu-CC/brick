import React, { useEffect }  from 'react';
import { Markdown } from '@components';
import '@components/markdown/style';

// import testMd from '../../../../../notebook/articles/CSS/[1.0] flex布局大法.md';
import testMd from './test.md';

export default () => {

  return (
    <Markdown>
      {testMd}
    </Markdown>
  );
};