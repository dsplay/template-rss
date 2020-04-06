import React from 'react';
import { media } from '@dsplay/template-utils';
import './qr-code.sass';

// media properties
const { qrCode } = media;

// component
const QrCode = () => (
  <img
    src={qrCode}
    alt=''
    className='qr-code'
  />
);

export default QrCode;