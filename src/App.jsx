import React from 'react';
import {
  useTemplateVal,
  useScreenInfo,
  Loader,
} from '@dsplay/react-template-utils';

import NewsItem from './components/news-item/news-item';
import { DEFAULT_BG_COLOR } from './util/defaults';
import Intro from './components/intro';
import './App.sass';

const fonts = [
  'Roboto Condensed',
  'Oswald',
];

// component
const App = () => {
  const { screenFormat } = useScreenInfo();

  // template properties
  const backgroundColor = useTemplateVal('bg_color', DEFAULT_BG_COLOR);

  // component properties
  const style = {
    backgroundColor,
  };

  return (
    <Loader
      placeholder={<Intro style={style} />}
      fonts={fonts}
    >
      <div className={`App ${screenFormat}`} style={style}>
        <NewsItem />
      </div>
    </Loader>
  );
}

export default App;
