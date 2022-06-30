import '../scss/index.scss';

import type { AppProps } from 'next/app';
import { locales, RosettyProvider } from 'rosetty-react';

import enDict from '../i18n/en';
import frDict from '../i18n/fr';

const rosettyLocales = {
  fr: { dict: frDict, locale: locales.fr },
  en: { dict: enDict, locale: locales.enGB },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RosettyProvider languages={rosettyLocales} defaultLanguage="en">
      <Component {...pageProps} />
    </RosettyProvider>
  );
}

export default MyApp;
