import React from 'react';
import { media, tval } from '@dsplay/template-utils';
import Logo from '../logo/logo';
import './title.sass';
import { DEFAULT_TITLE_COLOR, DEFAULT_TITLE_BG_COLOR } from '../../util/defaults';

// media properties
const { itemTitle } = media;

// template properties
const color = tval('title_color', DEFAULT_TITLE_COLOR);
const backgroundColor = tval('title_bg_color', DEFAULT_TITLE_BG_COLOR);

// component properties
const style = {
  color,
}

const bgStyle = {
  backgroundColor,
}

// component
const Title = () => (
  <div className='title' style={style}>
    <Logo />
    <div className="text">
      <div className="bg" style={bgStyle} />
      <div className="content">{itemTitle}</div>
    </div>
  </div>
);

export default Title;
