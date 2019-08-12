import React, { useRef, useState, useEffect } from 'react';
import { Modal } from '../../../../components';
import '../../../../components/modal/style';
import './index.scss';

export default (props) => {

  return (
    <div className="modal-demo">
      <Modal>
        <div style={{ width: '100%', height: '100%', background: '#04071b' }}>
          {/* <div style={{ height: 80, background: 'rgba(255, 0, 0, 0.1)'}}>
          </div> */}
        </div>
      </Modal>
    </div>
  );
};
