import React from 'react';
import mermaid from 'mermaid';

// 错误处理
mermaid.parseError = (err, hash) => console.log(
  '%c [ markdown-preview mermaid 解析错误  ]', 'font-size:13px; background:pink; color:#bf2c9f;',
  err,
  hash,
);

// see: https://github.com/mermaid-js/mermaid
export default React.memo(props => {
  const mermaidId = React.useRef(
    'mermaid-x-x-x-x'.replace(/x/ig, () => Math.ceil(new Date().getTime() * Math.random()))
  );

  React.useEffect(() => {
    mermaid.init({  }, `.${mermaidId.current}`);
  }, [mermaidId, props.value]);

  return (
    <div className={`${mermaidId.current} qyrc-markdown-preview-mermaid`}>
      {props.value}
    </div>
  );
});
