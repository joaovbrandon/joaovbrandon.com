import { useState, useCallback, useEffect } from 'react';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
import { ImMagicWand } from 'react-icons/im';
import random from 'lodash.random';
import type { NextPage } from 'next';
import {
  AppHead,
  Avatar,
  Logo,
  LinkButton,
  Footer,
  PageBackgroundImage,
} from '@components';
import HOME_PAGE_BGS_LIST from '@assets/HOME_PAGE_BGS_LIST.json';
import { CenterPageWrapper } from '@styles/commons';

const LINKS = [
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
];

const HomePage: NextPage = () => {
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

  return (
    <>
      <AppHead />
      <PageBackgroundImage image={backgroundImage} overlayOpacity="0.6" />
      <CenterPageWrapper>
        <Avatar />
        <Logo />
        <LinkButton
          icon={<ImMagicWand />}
          label="Click here for other awesome background"
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
