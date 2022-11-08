import React, { useEffect, useRef, useState } from 'react';
import { useMedia, QrCode as QR, useScreenInfo, screen } from '@dsplay/react-template-utils';
import './qr-code.sass';

// component
const QrCode = () => {
  const media = useMedia();
  const ref = useRef();
  const [rect, setRect] = useState();
  const { screenFormat } = useScreenInfo();
  const h = screenFormat === screen.H_BANNER ? 100 : 20;
  const padding = screenFormat === screen.H_BANNER ? 16 : 4;

  useEffect(() => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      console.log(r.width);
      console.log(r.height);
      console.log(h);
      console.log(padding);
      setRect(r);
    }
  }, [h, padding]);

  // media properties
  const { link } = media;

  if (!link) {
    return null;
  }

  let qrSize;
  let quietZone;

  if (rect) {
    qrSize = Math.floor(rect.width / h * (h - padding));
    quietZone = Math.ceil(rect.width / h * padding / 2);

    console.log(`qrSize: ${qrSize}`);
    console.log(`quietZone: ${quietZone}`);
  }

  return (
    <div
      className='qr-code'
      ref={ref}
    >
      {
        rect &&
        <QR
          options={{
            text: link,
            width: qrSize,
            height: qrSize,
            quietZone,
            drawer: 'svg',
          }}
        />
      }

    </div>
  );
}

export default QrCode;