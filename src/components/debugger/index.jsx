import React from 'react';
import {
  useMedia,
  useTemplate,
  useConfig,
  useScreenInfo,
} from '@dsplay/react-template-utils';

import './style.sass';

function format(value) {
  let result = value;
  if (typeof (value) === 'object') {
    result = JSON.stringify(value);
  }
  return result.toString().substring(0, 150);
}

function Debugger() {

  const media = useMedia();
  const template = useTemplate();
  const config = useConfig();
  const screenInfo = useScreenInfo();

  const objectsToDebug = {
    media,
    template,
    config,
    screenInfo,
  };

  return (
    <div className='dsplay-debugger'>
      {
        Object.keys(objectsToDebug).map((key) => (
          <div key={key}>
            <div className='header'>
              {key}
            </div>
            {Object.keys(objectsToDebug[key]).map((ckey) => (
              <div className='row' key={`${key}-${ckey}`}>
                <div className='label'>
                  {ckey}
                </div>
                <div className='value'>
                  {format(objectsToDebug[key][ckey])}
                </div>
              </div>
            ))}
          </div>
        ))
      }
    </div>
  );
}

export default Debugger;