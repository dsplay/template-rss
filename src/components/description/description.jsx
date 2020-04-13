import React from 'react';
import { media, tval, tbval } from '@dsplay/template-utils';
import QrCode from '../qr-code/qr-code';
import { DEFAULT_TEXT_BG_COLOR, DEFAULT_TEXT_COLOR } from '../../util/defaults';
import FitText from '../fit-text/fit-text';
import { getWidth, getHeight, screenFormat, LANDSCAPE, PORTRAIT, SQUARED, BANNER_H, BANNER_V } from '../../util/screen';

import './description.sass';

// media properties
const { itemDescription, itemTitle, source, qrCode, hasImage } = media;

// template properties
const showQrCode = tbval('show_qr_code');
const color = tval('text_color', DEFAULT_TEXT_COLOR);
const backgroundColor = tval('text_bg_color', DEFAULT_TEXT_BG_COLOR);

// component properties
const extraClass = (showQrCode && qrCode) ? 'with-qr-code' : '';

const text = source !== 'UOLIndoor' ? itemTitle : itemDescription;

const w = getWidth();
const h = getHeight();

let descWidth;
let left;
const imageWidth = hasImage ? h : 0;

switch (screenFormat) {
  case LANDSCAPE:
    break;
  case PORTRAIT:
    break;
  case SQUARED:
    break;
  case BANNER_H:
    left = h * 2 + imageWidth;
    descWidth = w - left;
    break;
}

const contentStyle = {
  color,
  width: descWidth && `${descWidth}px`,
  left: left && `${left}px`,
};

const bgStyle = {
  backgroundColor,
};

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
        <FitText>{decodeHTMLEntities(text)}</FitText>
      </div>
      {showQrCode && <QrCode />}
    </div>
  </div>
);

export default Description;
