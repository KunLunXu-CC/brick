import React, { useRef, useState, useEffect } from 'react';
import { Modal } from '../../../../components';
import '../../../../components/modal/style';
import './index.scss';

export default (props) => {

  return (
    <div className="modal-demo">
      <Modal
        dragHeight={80}
        minParams={{ width: 100, height: 100, offsetX: 0, offsetY: 0 }}
        onMin={(e, isMin) => {
          console.log('最小化', e, isMin);
        }}
      >
        <div style={{ width: '100%', height: '100%', background: '#04071b' }}>
          <div style={{ height: 80, background: 'rgba(255, 0, 0, 0.1)'}}>
          </div>
        </div>
      </Modal>
    </div>
  );
};
