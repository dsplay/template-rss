import React from 'react';
import { media, tval, tbval } from '@dsplay/template-utils';
import { Textfit } from 'react-textfit';
import QrCode from '../qr-code/qr-code';
import { DEFAULT_TEXT_BG_COLOR, DEFAULT_TEXT_COLOR } from '../../util/defaults';
import './description.sass';

// media properties
const { itemDescription } = media;

// template properties
const showQrCode = tbval('show_qr_code');
const color = tval('text_color', DEFAULT_TEXT_COLOR);
const backgroundColor = tval('text_bg_color', DEFAULT_TEXT_BG_COLOR);

// component properties
const extraClass = showQrCode ? 'with-qr-code' : '';

const style = {
  color,
  backgroundColor,
};

// component
const Description = () => (
  <div
    style={style}
    className={`description ${extraClass}`}
  >
    <Textfit className="text" mode='multi'>{itemDescription}</Textfit>
    {showQrCode && <QrCode />}
  </div>
);

export default Description;
