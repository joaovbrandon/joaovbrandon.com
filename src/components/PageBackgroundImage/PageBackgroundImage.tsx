import * as S from './PageBackgroundImage.styles';
import { PageBackgroundImageProps } from './PageBackgroundImage.types';

const PageBackgroundImage = ({ image }: PageBackgroundImageProps) => (
  <>
    <S.BackgroundImage image={image} />
    <S.BackgroundOverlay />
  </>
);

export default PageBackgroundImage;
