import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
} from 'react';
import _ from 'lodash';
import scss from '../index.module.scss';
import HomeBg from '@assets/img/home_bg.jpg';
const SCALE = 1920 / 1080;

const useStateHook = (props) => {
  const [bgSize, setBgSize] = useState({width: '100%', height: '100%'});
  const desktopRef = useRef();

  // 重置 bgSize
  const resetBgSize = () => {
    const { offsetWidth, offsetHeight } = desktopRef.current;
    const scale = offsetWidth / offsetHeight;
    let reset = { width: '100%', height: '100%' };
    scale < SCALE && (reset = { width: 'auto', height: '100%' });
    scale > SCALE && (reset = { width: '100%', height: 'auto' });
    !_.isEqual(bgSize, reset) && setBgSize(reset);
  }

  useEffect(() => {
    resetBgSize();
  }, []);

  // 监听事件
  useEffect(() => {
    window.addEventListener('resize', resetBgSize);
    return () => {
      window.removeEventListener('resize', resetBgSize);
    }
  });


  // 计算 backgroundSize
  const backgroundSize = useMemo(() => (
    `${bgSize.width} ${bgSize.height}`
  ), [bgSize]);

  return { desktopRef, backgroundSize };
}

export default (props) => {
  const state = useStateHook(props);
  return (
    <div
      className={scss['dosktop']}
      ref={state.desktopRef}
      style={{
        backgroundImage: `url(${HomeBg})`,
        backgroundSize: state.backgroundSize,
      }}
    >
      {/*  */}
    </div>
  );
}
