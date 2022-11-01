import React from 'react';
import { useMedia, QrCode as QR } from '@dsplay/react-template-utils';
import './qr-code.sass';

// component
const QrCode = () => {
  const media = useMedia();

  // media properties
  const { link } = media;

  if (!link) {
    return null;
  }

  return (
    <QR
      className='qr-code'
      options={{
        text: link,
      }}
    />
  );
}

export default QrCode;