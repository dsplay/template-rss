import React from 'react';
import { media } from '@dsplay/template-utils';
import './qr-code.sass';

// media properties
const { qrCode } = media;

// component
const QrCode = () => {

  if (!qrCode) {
    return null;
  }

  return (
    <img
      src={qrCode}
      alt=''
      className='qr-code'
    />
  );
}

export default QrCode;