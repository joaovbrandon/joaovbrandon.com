import * as S from './PageBackgroundImage.styles';
import { PageBackgroundImageProps } from './PageBackgroundImage.types';

const PageBackgroundImage = (props: PageBackgroundImageProps) => (
  <>
    <S.BackgroundImage {...props} />
    <S.BackgroundOverlay {...props} />
  </>
);

export default PageBackgroundImage;
