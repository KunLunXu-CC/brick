import { useState, useEffect } from 'react';

export default (ref,  {
  defaultWidth = 200,
} = {}) => {
  const [width, setWidth] = useState(defaultWidth);

  useEffect(() => {
    if (!ref || !ref.current){return false;}
    const target = ref.current;
    const targetRect = target.getBoundingClientRect();

    const onStart = (e) => {
      console.log('==========》 start', e);
    };

    // const onHover = (e) => {
    //   console.log('==========》 hover', e);
    // };

    const onMove = (e) => {

    };

    const onStop = (e) => {

    };

    // target.addEventListener('mousemove', onHover);
    target.addEventListener('mousedown', onStart);

    return () => {
      // target.removeEventListener('mousemove', onHover);
      target.removeEventListener('mousedown', onStart);
    };
  }, []);

  return width;
};
