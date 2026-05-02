/* eslint-disable @next/next/no-page-custom-font */
import '../scss/index.scss';

import { enGB, fr } from 'date-fns/locale';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import { useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { RosettyProvider } from 'rosetty-react';

import { AppLayout } from '../components/layout/AppLayout';
import enDict from '../i18n/en';
import frDict from '../i18n/fr';

const rosettyLocales = {
  fr: { dict: frDict, locale: fr },
  en: { dict: enDict, locale: enGB },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  //@ts-ignore
  const Layout = Component.Layout ? Component.Layout : AppLayout;

  const { asPath } = useRouter();

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_TOKEN!, {
      api_host: '/ingest',
      ui_host: 'https://eu.posthog.com',
      defaults: '2026-01-30',
      capture_exceptions: true,
      debug: process.env.NODE_ENV === 'development',
    });
  }, []);
  const defaultLanguage =
    typeof navigator !== 'undefined' ? (navigator?.language?.toLowerCase()?.startsWith('fr') ? 'fr' : 'en') : 'en';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto%20Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <RosettyProvider languages={rosettyLocales} defaultLanguage={defaultLanguage}>
        <Layout>
          <SwitchTransition mode="out-in">
            <CSSTransition key={asPath} classNames="page" timeout={300}>
              <Component {...pageProps} />
            </CSSTransition>
          </SwitchTransition>
          <ScrollToTop
            smooth
            className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-lg bg-white hover:opacity-70 dark:bg-[#1c1b22]"
            component={<i className="icon icon-arrow-up block h-10 w-10 bg-black dark:bg-white" />}
            aria-label="go back to top"
          />
        </Layout>
      </RosettyProvider>
    </>
  );
};

export default MyApp;
