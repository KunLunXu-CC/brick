import React from 'react';
import { Modal } from '../../../../components';
import '../../../../components/modal/style';
import './index.scss';

export default () => {
  return (
    <div className="modal-demo">
      <Modal>
        this is modal
      </Modal>
    </div>
  );
};
