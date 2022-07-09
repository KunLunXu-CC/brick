import omit from 'omit.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useRef, useEffect, useMemo, useState } from 'react';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'src',
  'width',
  'style',
  'height',
  'error',
  'loading',
  'fadeTime',
  'bodyStyle',
  'className',
  'bodyClassName',
];

// 默认 props
const defaultProps = {
  error: null,
  fadeTime: 1,
  loading: null,
  width: '100%',
  height: '100%',
};

// props 类型校验
const propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  error: PropTypes.node,
  style: PropTypes.object,
  loading: PropTypes.node,
  fadeTime: PropTypes.number,
  bodyStyle: PropTypes.object,
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
};

const useHooks = (props) => {
  const [src, setSrc] = useState(null);
  // 三种值: img.src(正常)、loading(加载中)、error(加载错误)
  const [img, setImg] = useState('loading');

  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const imgClass = useMemo(() => classNames(
    'brick-image-bg',
    { 'brick-image-bg-show': !['loading', 'error'].includes(img) },
  ), [img]);

  // 读取 src
  useEffect(() => {
    if (props.src && props.src.constructor === File) {
      // 支持传入 file 对象
      if (!/image/.test(props.src.type)) {
        setSrc(null);
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(props.src);

        reader.onload = () => {
          setSrc(reader.result);
        };
      }
    } else {
      setSrc(props.src);
    }
  }, [props.src]);

  useEffect(() => {
    if (src) {
      setImg('loading');
      const image = new Image();
      image.src = src;
      image.onload = () => setImg(src);
      image.onerror = () => setImg('error');
    } else {
      setImg('error');
    }
  }, [src]);

  return { imgRef, containerRef, img, imgClass };
};

const ImageContainer = (props) => {
  const state = useHooks(props);
  return (
    <div
      {...omit(props, filterPropKeys)}
      className={classNames('brick-image', props.className)}
      style={{ width: props.width, height: props.height, ...props.style }}>
      {state.img === 'loading' ? props.loading : null}
      {state.img === 'error' ? props.error : null}
      <div className={state.imgClass}>
        <img
          src={state.img}
          ref={state.imgRef}
          style={{ transition: `opacity ${props.fadeTime}s` }}
        />
      </div>
      <div
        style={props.bodyStyle}
        className={classNames('brick-image-body', props.bodyClassName)} >
        {props.children}
      </div>
    </div>
  );
};

ImageContainer.defaultProps = defaultProps;
ImageContainer.propTypes = propTypes;

export default ImageContainer;
