import Head from 'next/head';
import { AppHeadProps } from './AppHead.types';

const DEFAULT_URL = 'https://joaovbrandon.com';
const DEFAULT_TITLE = 'Brandon @joaovbrandon';
const DEFAULT_DESCRIPTION = 'Digital Designer & Problem Solver.';
const DEFAULT_IMAGE = '/brandon.jpg';

const AppHead = ({
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  title,
  url = DEFAULT_URL,
}: AppHeadProps) => {
  const pageTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta content={pageTitle} property="og:title" />
      <meta content={pageTitle} property="og:site_name" />
      <meta content={description} name="description" />
      <meta content={description} property="og:description" />
      <meta content={url} property="og:url" />
      <link href={url} rel="canonical" />
      <meta content="website" property="og:type" />
      <meta content={image} name="image" />
      <meta content={image} property="og:image" />
      <meta content="1080" property="og:image:width" />
      <meta content="1080" property="og:image:height" />
      <meta
        content="Logo with 'Brandon' written in white with dark background"
        property="og:image:alt"
      />
      <meta content={image} name="twitter:image" />
      <meta
        content="Logo with 'Brandon' written in white with dark background"
        property="twitter:image:alt"
      />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="en" property="og:locale" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
  );
};

export default AppHead;
