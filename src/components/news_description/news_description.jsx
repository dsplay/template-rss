import React from 'react';
import { media } from '@dsplay/template-utils';
import { Textfit } from 'react-textfit';
import './news_description.scss';

const NewsDescription = () => {
  const { itemDescription } = media;
  return (
    <div className='description'>
      <Textfit mode='multi'>{itemDescription}</Textfit>
    </div>
  );
};

export default NewsDescription;
