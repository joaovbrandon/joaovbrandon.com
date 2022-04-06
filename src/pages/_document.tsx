import { ServerStyleSheet } from 'styled-components';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="/icons/apple-icon-57x57.png"
            rel="apple-touch-icon"
            sizes="57x57"
          />
          <link
            href="/icons/apple-icon-60x60.png"
            rel="apple-touch-icon"
            sizes="60x60"
          />
          <link
            href="/icons/apple-icon-72x72.png"
            rel="apple-touch-icon"
            sizes="72x72"
          />
          <link
            href="/icons/apple-icon-76x76.png"
            rel="apple-touch-icon"
            sizes="76x76"
          />
          <link
            href="/icons/apple-icon-114x114.png"
            rel="apple-touch-icon"
            sizes="114x114"
          />
          <link
            href="/icons/apple-icon-120x120.png"
            rel="apple-touch-icon"
            sizes="120x120"
          />
          <link
            href="/icons/apple-icon-144x144.png"
            rel="apple-touch-icon"
            sizes="144x144"
          />
          <link
            href="/icons/apple-icon-152x152.png"
            rel="apple-touch-icon"
            sizes="152x152"
          />
          <link
            href="/icons/apple-icon-180x180.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/icons/android-icon-192x192.png"
            rel="icon"
            sizes="192x192"
            type="image/png"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/icons/favicon-96x96.png"
            rel="icon"
            sizes="96x96"
            type="image/png"
          />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <meta
            content="/icons/ms-icon-144x144.png"
            name="msapplication-TileImage"
          />
          <link href="/manifest.json" rel="manifest" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta content="#ffffff" name="theme-color" />
          <link
            key="fonts-be-vietnam-pro"
            href="/fonts/be-vietnam-pro.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
