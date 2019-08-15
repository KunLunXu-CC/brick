import React, { useEffect }  from 'react';
import { Markdown } from '@components';
import '@components/markdown/style';

import testMd from './test.md';

export default () => {

  return (
    <Markdown>
      {testMd}
    </Markdown>
  );
};