import React from 'react';

import { ThreeColumnLayout } from '@components';
import '@components/three-column-layout/style';

const Header = () => (
  <div style={{ height: 80, background: '#eee' }}>
    header
  </div>
);

const Footer = () => (
  <div style={{ height: 80, background: '#eee' }}>
    footer
  </div>
);

const Side = () => (
  <div style={{ height: '100%', width: 80, background: '#333' }}>
    side
  </div>
);

const Menu = () => (
  <div style={{ height: '100%', width: '100%' }}>
    menu
  </div>
);

const Content = () => (
  <div style={{ height: '100%', width: '100%', background: '#f7f4f4' }}>
    content
  </div>
);

export default () => {
  return (
    <div style={{ margin: 50 }}>
      <ThreeColumnLayout
        dragable={true}
        defaultMenuWidth={200}
        margin={{ left: 100, right: 100 }}
        side={<Side />}
        menu={<Menu />}
        footer={<Footer />}
        header={<Header />}
        content={<Content />}
        style={{ height: '400px' }}
        onResize={(width) => {console.log('--->>> width: ', width)}}
      />
    </div>
  );
};
