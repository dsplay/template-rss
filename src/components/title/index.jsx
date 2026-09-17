import { useMedia, useTemplateVal } from '@dsplay/react-template-utils';
import Logo from '../logo';
import { DEFAULT_TITLE_COLOR, DEFAULT_TITLE_BG_COLOR } from '../../util/defaults';
import { useFeedLabel, useLegacyUolFields } from '../../util/uol';
import FitText from '../fit-text';
import './style.sass';

function Title() {
  // media properties
  const { itemTitle } = useMedia();
  const feedLabel = useFeedLabel();
  const legacyUolFields = useLegacyUolFields();

  // template properties
  const color = useTemplateVal('title_color', DEFAULT_TITLE_COLOR);
  const backgroundColor = useTemplateVal('title_bg_color', DEFAULT_TITLE_BG_COLOR);

  // component properties
  const style = {
    color,
  };

  const bgStyle = {
    backgroundColor,
  };

  // On a legacy UOL payload `itemTitle` is already the category, which is what belongs in this band.
  const title = legacyUolFields ? itemTitle : feedLabel;

  return (
    <div className="title" style={style}>
      <Logo />
      <div className="text">
        <div className="bg wrapped" style={bgStyle} />
        <div className="content">
          <FitText>{title}</FitText>
        </div>
      </div>
    </div>
  );
}

export default Title;
