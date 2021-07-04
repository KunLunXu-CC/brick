import React from 'react';
import testMd from './test.md';
import scss from './index.module.scss';

import { MarkdownPreview } from '@components';
import '@components/markdown-preview/style';

export default () => (
  <div className={scss.body}>
    <MarkdownPreview>
      {testMd}
    </MarkdownPreview>
  </div>
);
