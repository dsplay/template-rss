import React, { Component } from 'react';
import NewsItem from './components/news-item/news-item';
import { screenFormat } from './util/screen';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className={`App ${screenFormat}`}>
        <NewsItem />
      </div>
    );
  }
}

export default App;
