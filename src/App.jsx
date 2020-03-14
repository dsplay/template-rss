import React, { Component } from 'react';
// import MyQrCode from './components/my_qrcode/my_qrcode.component';
import NewsItem from './components/news_item/news_item';
import Loading from './components/loading/loading';
import {
  // values
  media, // current media
  config // player configuration
  //   template, // custom template values
  //   // utility functions
  //   tval, // custom template string value
  //   tbval, // custom template boolean value
  //   tival, // custom template int value
  //   tfval // custom template float value
  //   //isVertical // boolean flag to indicate screen orientation
} from '@dsplay/template-utils';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const { duration } = media;
const { orientation, locale } = config;

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
