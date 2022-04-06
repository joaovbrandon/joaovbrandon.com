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

const InternalErrorPage: NextPage = () => (
  <>
    <AppHead title="Internal Error" />
    <PageBackgroundImage image="/images/internal-error-background.webp" />
    <CenterPageWrapper>
      <Avatar />
      <Logo />
      <h1>NOOOOOOOOOO!</h1>
      <h2>Something is wrong on the server</h2>
      <h3>Try again in a few minutes</h3>
      <LinkButton
        label="Refresh Page"
        onClick={() => window.location.reload()}
      />
      <LinkButton href="/" internal label="Go Back Home" />
      <Footer />
    </CenterPageWrapper>
  </>
);

export default InternalErrorPage;
