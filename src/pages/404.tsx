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

const NotFoundPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <AppHead title={t('Page Not Found')} />
      <PageBackgroundImage image="/images/page-not-found-background.webp" />
      <CenterPageWrapper>
        <LanguageSwitcher />
        <Avatar />
        <Logo />
        <h1>{t('NOT_FOUND_PAGE_TITLE')}</h1>
        <h2>{t('NOT_FOUND_PAGE_MESSAGE')}</h2>
        <LinkButton href="/" internal label={t('GENERIC_GO_BACK_HOME')} />
        <Footer />
      </CenterPageWrapper>
    </>
  );
};

export default NotFoundPage;
