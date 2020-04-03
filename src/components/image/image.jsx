import React from 'react';
import './image.scss';
import { media } from '@dsplay/template-utils';

const Image = () => {
  const { imageUrl } = media;
  return <img src={imageUrl} alt='Imagem' className='image' />;
};

export default Image;
