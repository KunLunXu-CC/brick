import React, { useRef, useState, useEffect } from 'react';
import { Modal } from '../../../../components';
import '../../../../components/modal/style';
import './index.scss';

export default (props) => {

  return (
    <div className="modal-demo">
      <Modal>
        <div className="modal-demo-body"></div>
      </Modal>
    </div>
  );
};
