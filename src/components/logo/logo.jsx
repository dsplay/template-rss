import React from 'react';
import { tval } from '@dsplay/template-utils';
import { DEFAULT_LOGO_BG_COLOR } from '../../util/defaults';
import rssLogo from '../../images/rss-flat.png';
import './logo.sass';

// template properties
const backgroundColor = tval('logo_bg_color', DEFAULT_LOGO_BG_COLOR);
const logo = tval('logo', rssLogo);

// component properties
const bgStyle = {
  backgroundColor,
}

const contentStyle = {
  backgroundImage: `url(${logo})`,
}

// component
const Logo = () => (
  <div className='logo'>
    <div className="bg wrapped" style={bgStyle} />
    <div className="content" style={contentStyle} >&nbsp;</div>
  </div>
);

export default Logo;
