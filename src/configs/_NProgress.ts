import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false, trickleSpeed: 300 });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
