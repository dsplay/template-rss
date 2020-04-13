import React from 'react';
import { media, tval } from '@dsplay/template-utils';
import Logo from '../logo/logo';
import { DEFAULT_TITLE_COLOR, DEFAULT_TITLE_BG_COLOR } from '../../util/defaults';
import FitText from '../fit-text/fit-text';
import './title.sass';

// media properties
const { source, itemTitle, title: mediaTitle } = media;

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

const title = source !== 'UOLIndoor' ? mediaTitle : itemTitle;

// component
const Title = () => (
  <div className='title' style={style}>
    <Logo />
    <div className="text">{ console.log(title)}
      <div className="bg wrapped" style={bgStyle} />
      <div className="content">
        <FitText>{title}</FitText>
      </div>
    </div>
  </div>
);

export default Title;
