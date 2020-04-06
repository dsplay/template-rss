import React from 'react';
import { tval } from '@dsplay/template-utils';
import Image from '../image/image';
import Title from '../title/title';
import Description from '../description/description';
import { DEFAULT_BG_COLOR } from '../../util/defaults';
import './news-item.sass';

// template properties
const backgroundColor = tval('bg_color', DEFAULT_BG_COLOR)

// component properties
const style = {
  backgroundColor,
}

// component
export default function NewsItem() {

  return (
    <div className='news-item' style={style}>
      <Title />
      <Image />
      <Description />
    </div>
  );
}
