import React from 'react';
import { Modal } from '../../../../components';
import '../../../../components/modal/style';

export default () => {
  return (
    <div style={{ width: 500, height: 500, background: 'rgba(0, 255, 0, 0.1)', margin: 50 }}>
      <Modal>
        this is modal
      </Modal>
    </div>
  );
};
