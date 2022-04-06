import type { NextPage } from 'next';
import {
  AppHead,
  PageBackgroundImage,
  Avatar,
  Logo,
  Footer,
  LinkButton,
} from '@components';
import { CenterPageWrapper } from '@styles/commons';

const NotFoundPage: NextPage = () => (
  <>
    <AppHead title="Page Not Found" />
    <PageBackgroundImage image="/images/page-not-found-background.webp" />
    <CenterPageWrapper>
      <Avatar />
      <Logo />
      <h1>Looks like you are lost</h1>
      <h2>There&apos;s nothing here</h2>
      <LinkButton href="/" internal label="Go Back Home" />
      <Footer />
    </CenterPageWrapper>
  </>
);

export default NotFoundPage;
