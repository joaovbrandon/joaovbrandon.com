import GTM from 'react-gtm-module';

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

if (gtmId && typeof window !== 'undefined') GTM.initialize({ gtmId });
