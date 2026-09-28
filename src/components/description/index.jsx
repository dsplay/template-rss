import {
  useMedia,
  useConfig,
  useTemplateVal,
  useTemplateBoolVal,
  useScreenInfo,
  screen,
  FitText,
} from '@dsplay/react-template-utils';
import QrCode from '../qr-code';
import { DEFAULT_TEXT_BG_COLOR, DEFAULT_TEXT_COLOR } from '../../util/defaults';
import needsUolIndoorFix from '../../util/uol-indoor';

import './style.sass';

function decodeHTMLEntities(text) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

function Description() {
  // media properties
  const { itemDescription, itemTitle, source, qrCode, hasImage } = useMedia();
  const { appVersion } = useConfig();

  // template properties
  const showQrCode = useTemplateBoolVal('show_qr_code', true);
  const color = useTemplateVal('text_color', DEFAULT_TEXT_COLOR);
  const backgroundColor = useTemplateVal('text_bg_color', DEFAULT_TEXT_BG_COLOR);

  // component properties
  const extraClass = (showQrCode && qrCode) ? 'with-qr-code' : '';

  const text = needsUolIndoorFix(source, appVersion) ? itemDescription : itemTitle;

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
}

export default Description;
