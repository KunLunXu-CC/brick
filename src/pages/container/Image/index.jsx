import React, { useState } from 'react';
import { Image } from '@components';
import '@components/image/style';

// eslint-disable-next-line
const Img = 'https://www.qianyin925.com/service/static/images/pro.dGltZy5qcGVnMTU4MzU4NzkzNDA3Mg==.jpeg';

// 基本使用方法
const Bast = () => (
  <div style={{ height: '400px', padding: '20px 0' }}>
    <Image
      src={Img}
      error="加载失败"
      style={{ width: '90%', height: '300px', border: '2px solid red' }}
      loading={(
        <div style={{ width: '100%', height: '100%', background: 'red' }} />
      )}
    />
  </div>
);

// file 对象
const WithFile = () => {
  const [file, setFile] = useState(null);

  const onChange = (e) => {
    const { files } = e.target.files;
    setFile(files[0]);
  };

  return (
    <div>
      <input
        type="file"
        onChange={onChange}
      />
      <Image
        src={file}
        style={{ width: '90%', height: '300px' }}
      />
    </div>
  );
};

export default () => (
  <div>
    <Bast />
    <WithFile />
  </div>
);
