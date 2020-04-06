import React from 'react';
import { tbval } from '@dsplay/template-utils';
import QrCode from '../QrCode/QrCode';
import Image from '../image/image';
import NewsTitle from '../news_title/news_title';
import NewsLogo from '../news_logo/news_logo';
import NewsDescription from '../news_description/news_description';

export default function NewsItem() {
  const showQrCode = tbval('hasQrCode');

  return (
    <div className='news-item'>
      <Image />
      <NewsTitle />
      <NewsLogo />
      <NewsDescription />
      {showQrCode && <QrCode />}
    </div>
  );
}
