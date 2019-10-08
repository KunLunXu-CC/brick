import React, { useState } from 'react';
import { Image } from '@components';
import IMG from '../../../assets/image/home_bg.jpg';

import '@components/image/style';

// 基本使用方法
const Bast = () => (
  <div style={{ padding: '20px 0' }}>
    <Image src={IMG} style={{ width: '90%', height: '300px' }}/>
  </div>
);

// file 对象
const WithFile = () => {
  const [file, setFile] = useState(null);

  const onChange = (e) => {
    const files = e.target.files;
    setFile(files[0]);
  };

  return (
    <div>
      <input type="file" onChange={onChange}/>
      <Image src={file} style={{ width: '90%', height: '300px' }}/>
    </div>
  );
};

export default () => {

  return (
    <div>
      <Bast />
      <WithFile />
    </div>
  )
}