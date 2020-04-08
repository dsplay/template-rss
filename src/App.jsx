import React, { useState, useEffect } from 'react';
import { tval } from '@dsplay/template-utils';
import NewsItem from './components/news-item/news-item';
import { screenFormat } from './util/screen';
import { DEFAULT_BG_COLOR } from './util/defaults';
import { waitForFonts } from './util/fonts';
import Loader from './components/loader/loader';
import './App.sass';

// template properties
const backgroundColor = tval('bg_color', DEFAULT_BG_COLOR);

// component properties
const style = {
  backgroundColor,
}

// component
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      (async () => {
        await waitForFonts();
        setLoading(false);
      })();
    }
  }, [loading]);

  if (loading) {
    return <Loader style={style} />;
  }

  return (
    <div className={`App ${screenFormat}`} style={style}>
      <NewsItem />
    </div>
  );
}

export default App;
