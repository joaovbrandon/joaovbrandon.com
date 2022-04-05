import Head from 'next/head';
import { AppHeadProps } from './AppHead.types';

const AppHead = ({
  description = 'Digital Designer & Problem Solver.',
  image = '/brandon.jpg',
  title = 'Brandon @joaovbrandon',
  url = 'https://joaovbrandon.com',
}: AppHeadProps) => (
  <Head>
    <title>{title}</title>
    <meta content={title} property="og:title" />
    <meta content={title} property="og:site_name" />
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

export default AppHead;
