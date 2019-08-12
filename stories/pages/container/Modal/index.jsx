import React, { useRef, useState, useEffect } from 'react';
import { Modal, VariableBlock } from '@components';

import '../../../../components/modal/style';
import './index.scss';

export default (props) => {

  return (
    <div className="modal-demo">
      <Modal defaultParams={{ width: '50%', height: '50%' }}>
        <div className="modal-demo-body">
          <VariableBlock operationList={['right']}>
            <div style={{ width: '100%', height: '100%', background: 'red' }}></div>
          </VariableBlock>
        </div>
      </Modal>
    </div>
  );
};
