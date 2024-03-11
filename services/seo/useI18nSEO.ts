import { useEffect } from 'react';
import { useIsClient } from 'usehooks-ts';

import { getDefaultLanguage, useI18n } from '../../i18n/useI18n';

export const useI18nSEO = () => {
  const { actualLang, changeLang } = useI18n();
  const isBrowser = useIsClient();

  useEffect(() => {
    if (document) {
      if (actualLang) {
        document.documentElement.lang = actualLang;
      } else {
        document.documentElement.lang = 'en';
      }
    }
  }, [actualLang]);

  useEffect(() => {
    if (isBrowser) {
      changeLang(getDefaultLanguage());
    }
  }, [isBrowser]);
};
