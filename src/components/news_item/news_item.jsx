import React from 'react';
import logo from '../../uol.png';
import QrCode from '../my_qrcode/my_qrcode.component';
import MyImage from '../my_image/my_image.component';
import { media, template } from '@dsplay/template-utils';
import { Textfit } from 'react-textfit';

export default function NewsItem() {
  let textFitComQrCode = (
    <Textfit className='desc' mode='multi'>
      {media.itemDescription}
    </Textfit>
  );
  let textFitSemQrCode = (
    <Textfit className='descNoQrCode' mode='multi'>
      {media.itemDescription}
    </Textfit>
  );

  return (
    <div className='news-item'>
      <MyImage />
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='title'>{media.itemTitle}</div>

      {template.hasQrCode ? textFitComQrCode : textFitSemQrCode}
      {template.hasQrCode ? <div className='qrcode'>{<QrCode />}</div> : ''}
    </div>
  );
}
