import { useState, useCallback, useEffect, useMemo } from 'react';
import { BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs';
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

  const [bg, setBg] = useState('');
  const [showedBgsList, setShowedBgsList] = useState<string[]>([]);

  const refreshBg = useCallback(() => {
    const bgsList = HOME_PAGE_BGS_LIST.filter(
      img => !showedBgsList.includes(img)
    );

    const newBg = bgsList[random(0, bgsList.length - 1)];

    if (newBg === bg) {
      refreshBg();
      return;
    }

    setBg(newBg);
    setShowedBgsList(list => [...list, newBg]);
  }, [bg, showedBgsList]);

  useEffect(() => {
    const firstBg =
      HOME_PAGE_BGS_LIST[random(0, HOME_PAGE_BGS_LIST.length - 1)];

    setBg(firstBg);
    setShowedBgsList([firstBg]);
  }, []);

  useEffect(() => {
    if (showedBgsList.length === HOME_PAGE_BGS_LIST.length) {
      setShowedBgsList([showedBgsList[showedBgsList.length - 1]]);
    }
  }, [showedBgsList]);

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
        icon: BsTwitterX,
        href: 'https://x.com/joaovbrandon',
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
      <PageBackgroundImage image={bg} overlayOpacity="0.6" />
      <CenterPageWrapper>
        <LanguageSwitcher />
        <Avatar />
        <Logo />
        <LinkButton
          icon={<ImMagicWand />}
          label={t('HOME_PAGE_CHANGE_BACKGROUND_BUTTON')}
          noBorder
          onClick={refreshBg}
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
