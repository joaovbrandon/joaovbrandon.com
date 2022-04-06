import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
import type { NextPage } from 'next';
import { AppHead, Avatar, Logo, LinkButton, Footer } from '@components';
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

const HomePage: NextPage = () => (
  <>
    <AppHead />
    <CenterPageWrapper>
      <Avatar />
      <Logo />
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

export default HomePage;
