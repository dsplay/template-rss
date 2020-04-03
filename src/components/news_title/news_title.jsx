import React from 'react';
import { media } from '@dsplay/template-utils';
import './news_title.scss';

const NewsTitle = () => {
  const { itemTitle } = media;
  return <div className='title'>{itemTitle}</div>;
};

export default NewsTitle;
