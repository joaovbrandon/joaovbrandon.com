import { useTranslation, useLanguageQuery } from 'next-export-i18n';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './Logo.styles';
import { LogoProps } from './Logo.types';

const Logo = ({ href = '/', size = 160 }: LogoProps) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <Link href={{ pathname: href, query }} passHref>
      <a draggable="false">
        <S.LogoWrapper size={size}>
          <Image
            alt={t('BRANDON_LOGO_DESCRIPTION')}
            draggable="false"
            height={28}
            layout="intrinsic"
            priority
            src="//images/brandon-logo-light.svg"
            width={160}
          />
        </S.LogoWrapper>
      </a>
    </Link>
  );
};

export default Logo;
