import React from 'react';
import {
  useScreenInfo,
  screen,
} from '@dsplay/react-template-utils';

import spinner from '../../images/loader.gif';
import './style.sass';

// component
const Loader = (props) => {
  const { w, h, screenFormat } = useScreenInfo();

  let spinnerDimension = Math.min(w, h) / 8;

  switch (screenFormat) {
    case screen.H_BANNER:
    case screen.V_BANNER:
      spinnerDimension = Math.min(w, h) / 2;
      break;
    default:
      break;
  }

  const imageStyle = {
    width: `${spinnerDimension}px`,
    height: `${spinnerDimension}px`,
  };

  return (
    <div {...props} className="loader">
      <div>
        <img src={spinner} alt="" style={imageStyle} />
      </div>
      <div className="hidden" style={{ fontFamily: 'Oswald' }} >Loading</div>
      <div className="hidden" style={{ fontFamily: 'Roboto Condensed' }} >Loading</div>
    </div>
  );
};

export default Loader;