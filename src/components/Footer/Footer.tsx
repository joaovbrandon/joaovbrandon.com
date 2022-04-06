import { useTranslation } from 'next-export-i18n';
import Emoji from '@components/Emoji';
import * as S from './Footer.styles';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <S.Footer>
      {t('GENERIC_BRANDON_AT')}
      <Emoji label={t('RED_HEART_EMOJI_LABEL')} symbol="❤️" />
    </S.Footer>
  );
};

export default Footer;
