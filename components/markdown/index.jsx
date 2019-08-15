import React, { useEffect } from 'react';
import MarkdownToJsx from 'markdown-to-jsx'; 
import hljs from 'highlight.js';

const CodeBlock = (props) => {
  console.log('===>>> props', props);
  return (
    <code className="qyrc-md-code">
      <div className="qyrc-md-code-header">
        <div className="qyrc-md-code-header-red"></div>
        <div className="qyrc-md-code-header-yellow"></div>
        <div className="qyrc-md-code-header-green"></div>
        <div className="qyrc-md-code-header-lang">JSON</div>
      </div>
      <div className="qyrc-md-code-body">
        <ul className="qyrc-md-code-line">
          {new Array(props.children.split('\n').length).fill(0).map((v, index) => (
            <li key={index}>{index + 1}</li>
          ))}
        </ul>
        <div className="qyrc-md-code-content">
          {props.children}
        </div>
      </div>
    </code>
  );
};

const useStateHook = () => {

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });

  });
};

const markdownOptions = {
  overrides: {
    code: CodeBlock,
  },
};

export default (props) => {
  const state = useStateHook(props);
  return (
    <MarkdownToJsx
      options={markdownOptions}
      className="qyrc-md"
      children={props.children}
    />
  );
};
