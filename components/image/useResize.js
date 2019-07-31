import { useEffect, useState } from 'react';


export default (imgRef, containerRef) => {
  const [size, setSize] = useState(null); 
  

  useEffect(() => {
    if (!imgRef.current || !containerRef.current){return false}

    const naturalWidth = imgRef.current.naturalWidth;
    const naturalHeight = imgRef.current.naturalHeight;

    const { 
      width: containerWidth, 
      height: containerHeight,
    } = containerRef.current.getBoundingClientRect();

    const resetSize = () => {
      const scale = naturalWidth / naturalHeight;

      
    }; 

    console.log('===============================');
    console.log(naturalWidth, naturalHeight, width, height);

  }, []);

  return {};
};