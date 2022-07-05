import '../scss/index.scss';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { locales, RosettyProvider } from 'rosetty-react';

import { AppLayout } from '../components/layout/AppLayout';
import enDict from '../i18n/en';
import frDict from '../i18n/fr';

const rosettyLocales = {
  fr: { dict: frDict, locale: locales.fr },
  en: { dict: enDict, locale: locales.enGB },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { asPath } = useRouter();
  const defaultLanguage =
    typeof navigator !== 'undefined' ? (navigator?.language?.toLowerCase()?.startsWith('fr') ? 'fr' : 'en') : 'en';

  return (
    <RosettyProvider languages={rosettyLocales} defaultLanguage={defaultLanguage}>
      <AppLayout>
        <SwitchTransition mode="out-in">
          <CSSTransition key={asPath} classNames="page" timeout={300}>
            <Component {...pageProps} />
          </CSSTransition>
        </SwitchTransition>
      </AppLayout>
    </RosettyProvider>
  );
};

export default MyApp;
