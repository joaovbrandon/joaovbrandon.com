import { useState, useCallback, useEffect, useMemo } from 'react';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
import { ImMagicWand } from 'react-icons/im';
import random from 'lodash.random';
import type { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import {
  AppHead,
  LanguageSwitcher,
  Avatar,
  Logo,
  LinkButton,
  Footer,
  PageBackgroundImage,
} from '@components';
import HOME_PAGE_BGS_LIST from '@assets/HOME_PAGE_BGS_LIST.json';
import { CenterPageWrapper } from '@styles/commons';

const HomePage: NextPage = () => {
  const { t } = useTranslation();

  const [backgroundImage, setBackgroundImage] = useState('');

  const refreshBackground = useCallback(() => {
    const newBackground =
      HOME_PAGE_BGS_LIST[random(0, HOME_PAGE_BGS_LIST.length - 1)];

    if (newBackground === backgroundImage) {
      refreshBackground();
      return;
    }

    setBackgroundImage(newBackground);
  }, [backgroundImage]);

  useEffect(() => {
    setBackgroundImage(
      HOME_PAGE_BGS_LIST[random(0, HOME_PAGE_BGS_LIST.length - 1)]
    );
  }, []);

  const LINKS = useMemo(
    () => [
      {
        icon: GrLinkedinOption,
        href: 'https://www.linkedin.com/in/joaovbrandon',
        label: 'LinkedIn',
        openInNewTab: true,
      },
      {
        icon: BsGithub,
        href: 'https://github.com/joaovbrandon',
        label: 'GitHub',
        openInNewTab: true,
      },
      {
        icon: BsInstagram,
        href: 'https://www.instagram.com/joaovbrandon',
        label: 'Instagram',
        openInNewTab: true,
      },
      {
        icon: BsTwitter,
        href: 'https://twitter.com/joaovbrandon',
        label: 'Twitter',
        openInNewTab: true,
      },
      {
        icon: FiMail,
        href: 'mailto:hello@joaovbrandon.com',
        label: 'Email',
      },
    ],
    []
  );

  return (
    <>
      <AppHead />
      <PageBackgroundImage image={backgroundImage} overlayOpacity="0.6" />
      <CenterPageWrapper>
        <LanguageSwitcher />
        <Avatar />
        <Logo />
        <LinkButton
          icon={<ImMagicWand />}
          label={t('HOME_PAGE_CHANGE_BACKGROUND_BUTTON')}
          noBorder
          onClick={refreshBackground}
          small
          transformHover
        />
        {LINKS.map(({ href, icon: Icon, label, openInNewTab }) => (
          <LinkButton
            key={label}
            href={href}
            icon={<Icon />}
            label={label}
            openInNewTab={openInNewTab}
          />
        ))}
        <Footer />
      </CenterPageWrapper>
    </>
  );
};

export default HomePage;
