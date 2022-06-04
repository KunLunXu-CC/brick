import * as monaco from 'monaco-editor';
import  markdownProvideFoldingRanges from './markdown';

// 注册「markdown」折叠
monaco.languages.registerFoldingRangeProvider(
  'markdown',
  { provideFoldingRanges: markdownProvideFoldingRanges },
);
