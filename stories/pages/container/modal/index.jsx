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
        <div ref={state.dragRef}>11111111111111</div>
        this is modal
      </Modal>
    </div>
  );
};
