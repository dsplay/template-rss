import React from 'react';
import { media } from '@dsplay/template-utils';
import './QrCode.scss';

export default function MyQrCode() {
  const { qrCode } = media;
  return <img src={qrCode} alt='QR Code' className='qrCode' />;
}
