/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { NextPage } from 'next';
import Link from 'next/link';

import { SEO } from '../components/atoms/SEO';
import { useI18n } from '../i18n/useI18n';

const Error404: NextPage = () => {
  const { t } = useI18n();

  return (
    <>
      <SEO title={t('pages.error.notFound.title')!} />
      <div className="mt-12 flex items-center justify-center">
        <div className="space-y-6">
          <h1 className="mx-auto mt-2 block max-w-2xl text-4xl font-bold leading-10 sm:text-5xl">
            {t('pages.error.notFound.title')}
          </h1>

          <Link href="/" passHref className="block w-full text-center md:w-auto">
            <button
              aria-label="go to home"
              type="button"
              className="w-full rounded-full bg-[#1c1b22] px-2 py-3 font-medium text-white shadow-lg shadow-[#1c1b22]/20 hover:opacity-70 md:w-auto md:px-12 dark:bg-gray-200 dark:text-[#1c1b22] dark:shadow-gray-200/20"
            >
              {t('pages.error.notFound.action')}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error404;
