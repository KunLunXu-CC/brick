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
        <div style={{ width: '100%', height: '100%', background: '#04071b' }}>
          <div ref={state.dragRef} style={{ height: 80}}>拖拽区域
          </div>
        </div>
      </Modal>
    </div>
  );
};
