import { NextSeo } from 'next-seo';
import React from 'react';

import useI18n from '../../services/i18n/I18nHook';
import { ogTitle } from '../../services/seo/next-seo.config';

export const SEO = ({ title, description = undefined }) => {
  const { t } = useI18n();

  return (
    <NextSeo
      title={title}
      openGraph={ogTitle(title)}
      description={(description || t('pages.home.seo.description'))?.replace(/<\/?[^>]+(>|$)/gi, '')}
    />
  );
};
