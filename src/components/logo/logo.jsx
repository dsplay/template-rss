import React from 'react';
import { template, tval } from '@dsplay/template-utils';
import { DEFAULT_LOGO_BG_COLOR } from '../../util/defaults';
import './logo.sass';

const { logo } = template;

// template properties
const backgroundColor = tval('logo_bg_color', DEFAULT_LOGO_BG_COLOR);

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
