import { useTemplateVal } from '@dsplay/react-template-utils';
import Image from '../image';
import Title from '../title';
import Description from '../description';
import { DEFAULT_BG_COLOR } from '../../util/defaults';
import './style.sass';

export default function NewsItem() {
  // template properties
  const backgroundColor = useTemplateVal('bg_color', DEFAULT_BG_COLOR);

  // component properties
  const style = {
    backgroundColor,
  };

  return (
    <div className="news-item" style={style}>
      <Title />
      <Image />
      <Description />
    </div>
  );
}
