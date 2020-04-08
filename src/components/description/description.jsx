import React from 'react';
import { media, tval, tbval } from '@dsplay/template-utils';
import useFitText from 'use-fit-text';
import QrCode from '../qr-code/qr-code';
import { DEFAULT_TEXT_BG_COLOR, DEFAULT_TEXT_COLOR } from '../../util/defaults';
import './description.sass';

// media properties
const { itemDescription, itemTitle, source, qrCode } = media;

// template properties
const showQrCode = tbval('show_qr_code');
const color = tval('text_color', DEFAULT_TEXT_COLOR);
const backgroundColor = tval('text_bg_color', DEFAULT_TEXT_BG_COLOR);

// component properties
const extraClass = (showQrCode && qrCode) ? 'with-qr-code' : '';

const text = source !== 'UOLIndoor' ? itemTitle : itemDescription;

const contentStyle = {
  color,
};

const bgStyle = {
  backgroundColor,
};

const Fit = ({
  children,
}) => {

  const { fontSize, ref } = useFitText({ maxFontSize: 1000 });

  return (
    <div ref={ref} style={{ fontSize, height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </div>
  );
}

function decodeHTMLEntities(text) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

// component
const Description = () => (
  <div
    style={contentStyle}
    className={`description ${extraClass}`}
    id="desciption-container"
  >
    <div className="bg" style={bgStyle} />
    <div className="content">
      <div className="text">
        <Fit>{decodeHTMLEntities(text)}</Fit>
      </div>
      {showQrCode && <QrCode />}
    </div>
  </div>
);

export default Description;
