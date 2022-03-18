import * as monaco from 'monaco-editor';

// // 代码块
// monaco.languages.registerCompletionItemProvider('markdown', {
//   provideCompletionItems,
// });


const getSuggestions = range => {
  console.log('%c [ range ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', range);
  return [
    {
      range,
      label: 'newDateTime',
      insertText: '$aaa.newDateTime()',
      kind: monaco.languages.CompletionItemKind.Function,
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.insertText,
    },
    {
      range,
      label: 'power',
      insertText: '$aaa.power(${1:n}, ${2:m})',
      kind: monaco.languages.CompletionItemKind.Function,
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
  ];
};

export default (model, position) => {
  return {
    suggestions: [
      {
        range: null,
        label: '##',
        insertText: '$aaa.power(${1:n}, ${2:m})',
        kind: monaco.languages.CompletionItemKind.Text,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      },
    ]
  };
}

