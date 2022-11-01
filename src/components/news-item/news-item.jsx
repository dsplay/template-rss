import React from 'react';
import { useTemplateVal } from '@dsplay/react-template-utils';
import Image from '../image/image';
import Title from '../title/title';
import Description from '../description/description';
import { DEFAULT_BG_COLOR } from '../../util/defaults';
import './news-item.sass';

// component
export default function NewsItem() {

  // template properties
  const backgroundColor = useTemplateVal('bg_color', DEFAULT_BG_COLOR)

  // component properties
  const style = {
    backgroundColor,
  };

  return (
    <div className='news-item' style={style}>
      <Title />
      <Image />
      <Description />
    </div>
  );
}
