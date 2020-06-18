import React from 'react';
import testMd from './test.md';
import scss from './index.module.scss';

import { Markdown } from '@components';
import '@components/markdown/style';

export default () => (
  <div className={scss.body}>
    <Markdown>
      {testMd}
    </Markdown>
  </div>
);
