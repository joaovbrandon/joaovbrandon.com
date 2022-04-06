import Head from 'next/head';
import { AppHeadProps } from './AppHead.types';

const DEFAULT_URL = 'https://joaovbrandon.com';
const DEFAULT_TITLE = 'Brandon @joaovbrandon';
const DEFAULT_DESCRIPTION =
  '🇧🇷 Senior Front-end Engineer, Digital Designer & Problem Solver.';
const DEFAULT_IMAGE = 'https://joaovbrandon.com/brandon.jpg';
const DEFAULT_IMAGE_WIDTH = '1280';
const DEFAULT_IMAGE_HEIGHT = '640';
const DEFAULT_IMAGE_ALT =
  'Logo with "Brandon" written in white with dark background.';

const AppHead = ({
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  imageWidth = DEFAULT_IMAGE_WIDTH,
  imageHeight = DEFAULT_IMAGE_HEIGHT,
  imageAlt = DEFAULT_IMAGE_ALT,
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
      <meta content={image} name="image" />
      <meta content={image} property="og:image" />
      <meta content={imageWidth} property="og:image:width" />
      <meta content={imageHeight} property="og:image:height" />
      <meta content={imageAlt} property="og:image:alt" />
      <link href={url} rel="canonical" />
      <meta content={url} property="og:url" />
      <meta content="website" property="og:type" />
      <meta content="en" property="og:locale" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="@joaovbrandon" name="twitter:creator" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
  );
};

export default AppHead;
