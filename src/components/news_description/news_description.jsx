import React from 'react';
import { media, tbval } from '@dsplay/template-utils';
import { Textfit } from 'react-textfit';
import './news_description.scss';

const NewsDescription = () => {
  const { itemDescription } = media;
  const showQrCode = tbval('hasQrCode');
  const description = showQrCode ? 'desc' : 'descNoQrCode';
  return (
    <Textfit mode='multi' className={description}>
      {itemDescription}
    </Textfit>
  );
};

export default NewsDescription;
