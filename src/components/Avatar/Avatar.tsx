import Image from 'next/image';
import * as S from './Avatar.styles';
import { AvatarProps } from './Avatar.types';

const Avatar = ({ size = 150 }: AvatarProps) => (
  <S.AvatarWrapper>
    <Image
      alt="Brandon's face. A white man, brown hair and beard, with his hand tattooed with Bowser (a cartoon dragon of Super Mario World) in his hand."
      blurDataURL="/images/brandon-avatar.jpg"
      draggable="false"
      height={size}
      placeholder="blur"
      src="/images/brandon-avatar.jpg"
      width={size}
    />
  </S.AvatarWrapper>
);

export default Avatar;
