import React from 'react';
import { Image } from '@components';
import IMG from '../../../assets/image/home_bg.jpg';

import '@components/image/style';

export default () => {

  return (
    <Image src={IMG} style={{ width: '90%', height: '300px' }}/>
  )
}
