import { NextSeo } from 'next-seo';
import React from 'react';

import APP_DEFAULT_SEO, { ogTitle } from '../../services/seo/next-seo.config';

export const SEO = ({ title, description = undefined }: { title: string; description?: string }) => {
  return (
    <NextSeo
      title={ogTitle(title).title || APP_DEFAULT_SEO.title}
      openGraph={{ ...APP_DEFAULT_SEO.openGraph, ...ogTitle(title) }}
      twitter={APP_DEFAULT_SEO.twitter}
      description={description?.replace(/<\/?[^>]+(>|$)/gi, '')}
    />
  );
};
