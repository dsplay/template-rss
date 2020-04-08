import React from 'react';
import { tval } from '@dsplay/template-utils';
import { DEFAULT_LOGO_BG_COLOR } from '../../util/defaults';
import rssLogo from '../../images/rss-flat.png';
import './logo.sass';

// template properties
const backgroundColor = tval('logo_bg_color', DEFAULT_LOGO_BG_COLOR);
const logo = tval('logo', rssLogo);

// component properties
const style = {
  backgroundColor,
}

// component
const Logo = () => (
  <div className='logo'>
    <div className="bg" style={style} />
    <div className="content"><img src={logo} alt='' /></div>
  </div>
);

export default Logo;
