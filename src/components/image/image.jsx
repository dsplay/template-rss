import React from 'react';
import './image.sass';
import { media, tval } from '@dsplay/template-utils';
import defaultImage from '../../images/bg2.jpg';
import { DEFAULT_TEXT_BG_COLOR } from '../../util/defaults';
import { screenFormat, BANNER_H, BANNER_V } from '../../util/screen';

// media properties
const { hasImage, imageUrl } = media;

// template properties
const backgroundColor = tval('text_bg_color', DEFAULT_TEXT_BG_COLOR);

// component properties
const bgStyle = {
  backgroundColor,
}

const contentStyle = {
  backgroundImage: `url(${hasImage ? imageUrl : defaultImage})`,
}

// component
const Image = () => {

  if (!hasImage && (screenFormat === BANNER_H || screenFormat === BANNER_V)) {
    return null;
  }

  return (
    <div className='image'>
      <div className="container">
        <div className="bg" style={bgStyle} />
        <div className="wrapper">
          <div className="content" style={contentStyle} />
        </div>
      </div>
    </div>
  );
};

export default Image;
