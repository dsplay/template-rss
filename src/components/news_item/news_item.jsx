import React from 'react';
import logo from '../../uol.png';
import QrCode from '../my_qrcode/my_qrcode.component';
import MyImage from '../my_image/my_image.component';
import { media, template } from '@dsplay/template-utils';
import { Textfit } from 'react-textfit';
import { screenFormat, BANNER_H, SQUARED } from '../../util/screen.js';

export default function NewsItem() {
  if (screenFormat !== BANNER_H) {
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

    let textFitSemQrCodeSQ = (
      <Textfit className='descNoQrCodeSQ' mode='multi'>
        {media.itemDescription}
      </Textfit>
    );

    let title = <div className='title'>{media.itemTitle}</div>;
    let titleSQ = <div className='titleSQ'>{media.itemTitle}</div>;

    let logomarca = (
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>
    );

    let logomarcaSQ = (
      <div className='logoSQ'>
        <img src={logo} alt='Logo' />
      </div>
    );

    if (screenFormat === SQUARED) {
      textFitSemQrCode = textFitSemQrCodeSQ;
      title = titleSQ;
      logomarca = logomarcaSQ;
    }
    return (
      <div className='news-item'>
        <MyImage />

        {title}
        {logomarca}
        {template.hasQrCode ? textFitComQrCode : textFitSemQrCode}
        {template.hasQrCode ? <div className='qrcode'>{<QrCode />}</div> : ''}
      </div>
    );
  } else {
    let textFitComQrCode = (
      <Textfit className='descBH' mode='multi'>
        {media.itemDescription}
      </Textfit>
    );
    let textFitSemQrCode = (
      <Textfit className='descNoQrCodeBH' mode='multi'>
        {media.itemDescription}
      </Textfit>
    );
    return (
      <div className='news-itemBH'>
        {template.hasQrCode ? (
          <div>
            <MyImage />
          </div>
        ) : (
          <div className='myImageBHNoQrCode'>
            <MyImage />
          </div>
        )}
        <div className='logoBH'>
          <img src={logo} alt='Logo' />
        </div>
        <div className='titleBH'>{media.itemTitle}</div>

        {template.hasQrCode ? textFitComQrCode : textFitSemQrCode}
        {template.hasQrCode ? <div className='qrcodeBH'>{<QrCode />}</div> : ''}
      </div>
    );
  }
}
