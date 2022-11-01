import React from 'react';
import {
  useMedia,
  useTemplateVal,
  useTemplateBoolVal,
  useScreenInfo,
  screen,
  FitText,
} from '@dsplay/react-template-utils';
import QrCode from '../qr-code/qr-code';
import { DEFAULT_TEXT_BG_COLOR, DEFAULT_TEXT_COLOR } from '../../util/defaults';

import './description.sass';

function decodeHTMLEntities(text) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

// component
const Description = () => {

  // media properties
  const { itemDescription, itemTitle, source, qrCode, hasImage } = useMedia();

  // template properties
  const showQrCode = useTemplateBoolVal('show_qr_code');
  const color = useTemplateVal('text_color', DEFAULT_TEXT_COLOR);
  const backgroundColor = useTemplateVal('text_bg_color', DEFAULT_TEXT_BG_COLOR);

  // component properties
  const extraClass = (showQrCode && qrCode) ? 'with-qr-code' : '';

  const text = source !== 'UOLIndoor' ? itemTitle : itemDescription;

  const { w, h, screenFormat } = useScreenInfo();

  let descWidth;
  let left;
  const imageWidth = hasImage ? h : 0;

  switch (screenFormat) {
    case screen.H_BANNER:
      left = h * 2 + imageWidth;
      descWidth = w - left;
      break;
    default:
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

  return (
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
};

export default Description;
