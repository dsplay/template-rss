import React from 'react';
import { useTemplateVal } from '@dsplay/react-template-utils';
import { DEFAULT_LOGO_BG_COLOR } from '../../util/defaults';
import rssLogo from '../../images/rss-flat.png';
import './logo.sass';



// component
const Logo = () => {

  // template properties
  const backgroundColor = useTemplateVal('logo_bg_color', DEFAULT_LOGO_BG_COLOR);
  const logo = useTemplateVal('logo', rssLogo);

  // component properties
  const bgStyle = {
    backgroundColor,
  }

  const contentStyle = {
    backgroundImage: `url(${logo})`,
  }

  return (
    <div className='logo'>
      <div className="bg wrapped" style={bgStyle} />
      <div className="content" style={contentStyle} >&nbsp;</div>
    </div>
  );
};

export default Logo;
