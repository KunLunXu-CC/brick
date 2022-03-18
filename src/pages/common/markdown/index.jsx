import React, { useCallback } from 'react';
import testMd from './test.md';
import { Markdown } from '@components';
import '@components/markdown/style';

export default () => {
  const onInsertImages = useCallback(() => {
    // return [
    //   'https://www.runoob.com/wp-content/uploads/2019/03/A042DF30-C232-46F3-8436-7D6C35351BBD.jpg',
    //   'https://www.runoob.com/wp-content/uploads/2019/03/A042DF30-C232-46F3-8436-7D6C35351BBD.jpg',
    //   'https://www.runoob.com/wp-content/uploads/2019/03/A042DF30-C232-46F3-8436-7D6C35351BBD.jpg',
    //   'https://www.runoob.com/wp-content/uploads/2019/03/A042DF30-C232-46F3-8436-7D6C35351BBD.jpg',
    // ];
    // return 'https://www.runoob.com/wp-content/uploads/2019/03/A042DF30-C232-46F3-8436-7D6C35351BBD.jpg';
  }, []);

  const onSave = useCallback((args) => {
    console.log('%c [ args ]-18', 'font-size:13px; background:pink; color:#bf2c9f;', args);
  }, []);

  return (
    <Markdown
      value={testMd}
      onSave={onSave}
      defaultValue={'testMd'}
      onInsertImages={onInsertImages}
    />
  );
};
