import React from 'react';
import MarkdownToJsx from 'markdown-to-jsx'; 

export default (props) => {
  return (
    <div>
      <MarkdownToJsx>
        {props.children}
      </MarkdownToJsx>
    </div>
  );
};
