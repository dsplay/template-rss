import React from 'react';
import './image.sass';
import { media, tval } from '@dsplay/template-utils';
import { DEFAULT_TEXT_BG_COLOR } from '../../util/defaults';

const { imageUrl } = media;

const backgroundColor = tval('text_bg_color', DEFAULT_TEXT_BG_COLOR);

const bgStyle = {
  backgroundColor,
}

const contentStyle = {
  backgroundImage: `url(${imageUrl})`,
}

const Image = () => (
  <div className='image'>
    <div className="container">
      <div className="bg" style={bgStyle} />
      <div className="content" style={contentStyle} />
    </div>
  </div>
);

export default Image;
