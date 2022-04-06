import { useTranslation } from 'next-export-i18n';
import Image from 'next/image';
import * as S from './Avatar.styles';
import { AvatarProps } from './Avatar.types';

const Avatar = ({ size = 150 }: AvatarProps) => {
  const { t } = useTranslation();

  return (
    <S.AvatarWrapper>
      <Image
        alt={t('BRANDON_AVATAR_DESCRIPTION')}
        blurDataURL="/images/brandon-avatar.jpg"
        draggable="false"
        height={size}
        placeholder="blur"
        src="/images/brandon-avatar.jpg"
        width={size}
      />
    </S.AvatarWrapper>
  );
};

export default Avatar;
