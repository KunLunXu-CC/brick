import React from 'react';

export default ({ type, ...props }) => {
  return React.createElement(type, {
    ...props,
    id: encodeURIComponent(`${type}${props.children[0].trim()}`),
  }, props.children)
}
