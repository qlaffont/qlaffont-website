import '../scss/index.scss';

import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
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
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.div
            variants={{
              out: {
                opacity: 0,
                y: 40,
                transition: {
                  duration: 0.5,
                },
              },
              in: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.25,
                },
              },
            }}
            animate="in"
            initial="out"
            exit="out"
            key={asPath}
          >
            <Component {...pageProps} />{' '}
          </motion.div>{' '}
        </AnimatePresence>
      </AppLayout>
    </RosettyProvider>
  );
};

export default MyApp;
