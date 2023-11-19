import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import { AppHeadProps } from './AppHead.types';

const AppHead = ({
  description = '🇧🇷 Senior Software Engineer, Digital Designer & Problem Solver.',
  imageAlt = 'Logo with "Brandon" written in white with dark background.',
  imageHeight = '640',
  imageUrl = 'https://joaovbrandon.com/brandon.jpg',
  imageWidth = '1280',
  title,
  url = 'https://joaovbrandon.com',
}: AppHeadProps) => {
  const { t } = useTranslation();

  const pageTitle = title
    ? `${title} | ${t('Brandon @joaovbrandon')}`
    : t('Brandon @joaovbrandon');

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta content={pageTitle} property="og:title" />
      <meta content={pageTitle} property="og:site_name" />
      <meta content={description} name="description" />
      <meta content={description} property="og:description" />
      <meta content={imageUrl} name="image" />
      <meta content={imageUrl} property="og:image" />
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
