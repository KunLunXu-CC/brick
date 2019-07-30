import React from 'react';
import { storiesOf } from '@storybook/react';
import config from './config';

config.forEach( v => (storiesOf(v.module, module).add(v.title, (props) => {
  const App = v.component;
  return (<App {...props}/>);
})));
