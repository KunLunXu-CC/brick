import _ from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useRef, useEffect } from 'react';

import useWidth from './useWidth';

const defaultProps = {
  dragable: true,
  defaultMenuWidth: 200,
  menuMargin: { left: 100, right: 100 },
};
const propTypes = {
  dragable: PropTypes.bool,
  defaultMenuWidth: PropTypes.number,
  menuMargin: PropTypes.shape({
    left: PropTypes.number,
    right: PropTypes.number,
  }),
  side: PropTypes.node,
  menu: PropTypes.node,
  header: PropTypes.node,
  footer: PropTypes.node,
  content: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  onResize: PropTypes.func,
};

const useStateHook = (props) => {
  const dragRef = useRef(null);
  const width = useWidth(dragRef, {
    dragable: props.dragable,
    defaultMenuWidth: props.defaultMenuWidth,
    menuMargin: props.menuMargin,
  });

  useEffect(() => {
    _.isFunction(props.onResize) && props.onResize(width);
  }, [width]);

  return { width, dragRef };
};

const ThreeColumnLayout = (props) => {
  const state = useStateHook(props);

  return (
    <div className={classNames('qyrc-tcl', props.className)} style={props.style}>
      <div className={classNames('qyrc-tcl-header')}>{props.header}</div>
      <div className={classNames('qyrc-tcl-body')}>
        <div className={classNames('qyrc-tcl-left')}>{props.side}</div>
        <div className={classNames('qyrc-tcl-right')}>
          <div
            style={{ width: state.width }}
            className={classNames('qyrc-tcl-menu')}>
            <div 
              ref={state.dragRef}
              className={classNames('qyrc-tcl-menu-drag')} 
              style={{ cursor: props.dragable ? 'e-resize' : 'auto' }}
            />
            {props.menu}
          </div>
          <div className={classNames('qyrc-tcl-content')}>
            {props.children || props.content}
          </div>
        </div>
      </div>
      <div className={classNames('qyrc-tcl-footer')}>
        {props.footer}
      </div>
    </div>
  );
};

ThreeColumnLayout.defaultProps = defaultProps;
ThreeColumnLayout.propTypes = propTypes;
export default ThreeColumnLayout;