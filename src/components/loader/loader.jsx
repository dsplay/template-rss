import React from 'react';
import './loader.sass';
import spinner from '../../images/loader.gif';
import { getWidth, getHeight, screenFormat, LANDSCAPE, PORTRAIT, SQUARED, BANNER_H, BANNER_V } from '../../util/screen';

// component

const w = getWidth();
const h = getHeight();

let spinnerDimension = Math.min(w, h) / 8;

switch (screenFormat) {
  case LANDSCAPE:
    break;
  case PORTRAIT:
    break;
  case SQUARED:
    break;
  case BANNER_H:
  case BANNER_V:
    spinnerDimension = Math.min(w, h) / 2;
    break;
}

const imageStyle = {
  width: `${spinnerDimension}px`,
  height: `${spinnerDimension}px`,
}

const Loader = (props) => (
  <div {...props} className="loader">
    <div>
      <img src={spinner} alt="" style={imageStyle} />
    </div>
    <div className="hidden" style={{ fontFamily: 'Oswald' }} >Loading</div>
    <div className="hidden" style={{ fontFamily: 'Roboto Condensed' }} >Loading</div>
  </div>
);

export default Loader;