import {
  useTemplateVal,
  useTemplateBoolVal,
  useScreenInfo,
  Loader,
} from '@dsplay/react-template-utils';

import NewsItem from '../news-item';
import { DEFAULT_BG_COLOR } from '../../util/defaults';
import Intro from '../intro';
import Debugger from '../debugger';
import './style.sass';

const fonts = [
  'Roboto Condensed',
  'Oswald',
];

function App() {
  const { screenFormat } = useScreenInfo();

  // template properties
  const backgroundColor = useTemplateVal('bg_color', DEFAULT_BG_COLOR);
  const debug = useTemplateBoolVal('debug');

  // component properties
  const style = {
    backgroundColor,
  };

  return (
    <Loader
      placeholder={<Intro style={style} />}
      fonts={fonts}
    >
      <div className={`app ${screenFormat}`} style={style}>
        <NewsItem />
        {debug && <Debugger />}
      </div>
    </Loader>
  );
}

export default App;
