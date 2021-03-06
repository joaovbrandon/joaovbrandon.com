import '@configs/setup';
import { AppProps } from 'next/app';
import { GlobalStyle } from '@styles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
