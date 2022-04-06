import type { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import {
  AppHead,
  PageBackgroundImage,
  LanguageSwitcher,
  Avatar,
  Logo,
  Footer,
  LinkButton,
} from '@components';
import { CenterPageWrapper } from '@styles/commons';

const InternalErrorPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <AppHead title={t('Internal Error')} />
      <PageBackgroundImage image="/images/internal-error-background.webp" />
      <CenterPageWrapper>
        <LanguageSwitcher />
        <Avatar />
        <Logo />
        <h1>{t('INTERNAL_ERROR_PAGE_TITLE')}</h1>
        <h2>{t('INTERNAL_ERROR_PAGE_SUBTITLE')}</h2>
        <h3>{t('INTERNAL_ERROR_PAGE_MESSAGE')}</h3>
        <LinkButton
          label={t('GENERIC_REFRESH_PAGE')}
          onClick={() => window.location.reload()}
        />
        <LinkButton href="/" internal label={t('GENERIC_GO_BACK_HOME')} />
        <Footer />
      </CenterPageWrapper>
    </>
  );
};

export default InternalErrorPage;
