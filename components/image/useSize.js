import _ from 'lodash';
import { useEffect, useState } from 'react';

/**
 * @param {Object} imgRef         图片 img ref
 * @param {Object} containerRef   图片容器 rec
 * @param {Object} src            图片 src
 * @returns {Object}              返回图片大小参数 {width, height}
 */
export default (imgRef, containerRef, src) => {
  const [size, setSize] = useState(null); 

  useEffect(() => {
    if (!imgRef.current || !containerRef.current){ return false; }
    // 1. 获取图片的原始尺寸
    const naturalWidth = imgRef.current.naturalWidth;
    const naturalHeight = imgRef.current.naturalHeight;
    // 2. 对 size 状态的拷贝， 避免时刻监听 size 引起性能的损耗
    let preSize = { ...size };

    // 3. 重置 size 状态值
    const resetSize = () => {
      const { 
        width: containerWidth, 
        height: containerHeight,
      } = containerRef.current.getBoundingClientRect();
      const scale = naturalWidth / naturalHeight;
      const reset = { width: 'auto', height: 'auto' };
      const changeKey = containerHeight * scale < containerWidth ? 'width' : 'height';
      reset[changeKey] = '100%';
      if (_.isEqual(preSize, reset)){ return false; }
      preSize = { ...reset };
      setSize({ ...reset });
    };

    resetSize();
    window.addEventListener('resize', resetSize);
    return () => {
      window.removeEventListener('resize', resetSize);
    };
  }, [src]);

  return size;
};
