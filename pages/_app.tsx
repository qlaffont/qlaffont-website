import '../scss/index.scss';

import type { AppProps } from 'next/app';
import { locales, RosettyProvider } from 'rosetty-react';

import { AppLayout } from '../components/layout/AppLayout';
import enDict from '../i18n/en';
import frDict from '../i18n/fr';

const rosettyLocales = {
  fr: { dict: frDict, locale: locales.fr },
  en: { dict: enDict, locale: locales.enGB },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RosettyProvider languages={rosettyLocales} defaultLanguage="en">
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </RosettyProvider>
  );
}

export default MyApp;
