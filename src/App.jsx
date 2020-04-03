import React, { Component } from 'react';
import NewsItem from './components/news_item/news_item';
import '@dsplay/template-utils';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App' id='root'>
        {<NewsItem />}
      </div>
    );
  }
}

export default App;
