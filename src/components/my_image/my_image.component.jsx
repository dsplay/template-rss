import React from 'react';
import { media } from '@dsplay/template-utils';

function MyImage() {
  let image = media.imageUrl;
  return <img src={image} alt='' className='myImage' />;
}

export default MyImage;
