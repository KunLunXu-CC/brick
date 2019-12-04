import React from 'react';
import { getId } from './util';

export default ({ type, ...props }) => (
  React.createElement(type, {
    ...props,
    id: getId(props.children, type),
  }, props.children)
);
