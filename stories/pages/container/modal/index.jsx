import React, { useRef } from 'react';
import { Modal } from '../../../../components';
import '../../../../components/modal/style';
import './index.scss';

const useState = (props) => {
  const dragRef = useRef(null);

  return { dragRef };
};

export default (props) => {
  const state = useState(props);

  return (
    <div className="modal-demo">
      <Modal dragRef={state.dragRef}>
        <div ref={state.dragRef} style={{
          background: 'pink',
          height: '50px',
          width: '200px'
        }}>拖拽区域</div>
        this is modal
      </Modal>
    </div>
  );
};
