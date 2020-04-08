import React from 'react';
import './loader.sass';
import spinner from '../../images/loader.gif';

// component
const Loader = (props) => (
  <div {...props} className="loader">
    <div>
      <img src={spinner} alt="" />
    </div>
    <div className="hidden" style={{ fontFamily: 'Oswald' }} >Loading</div>
    <div className="hidden" style={{ fontFamily: 'Roboto Condensed' }} >Loading</div>
  </div>
);

export default Loader;