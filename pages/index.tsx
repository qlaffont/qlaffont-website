import type { NextPage } from 'next';
import Image from 'next/image';

import { useI18n } from '../i18n/useI18n';

const Home: NextPage = () => {
  const { t } = useI18n();

  return (
    <div className="flex min-h-[75vh] flex-col justify-center">
      <div className="space-y-5">
        <div className="mt-12 grid grid-cols-1 items-center gap-x-0 gap-y-3 text-center md:mt-24 md:grid-cols-6 md:gap-x-6 md:text-left">
          <div className="order-2 col-span-5 mb-5 md:order-1">
            <h1 className="text-3xl leading-tight sm:text-5xl md:leading-normal">
              <span className="animatecss animatecss-infinite animatecss-slow animatecss-tada">👋</span>{' '}
              {t('pages.home.Im')} <span className="text-sky-500 dark:text-sky-400">Quentin</span>.{' '}
              {t('pages.home.jobTitle', { company: 'Flexper' })}.
            </h1>
            <p className="mt-5 text-xl italic md:mt-0">{t('pages.home.freelanceInfo')}</p>
          </div>
          <div className="order-1 md:order-2">
            <span>
              <Image src="/imgs/qlaffont.jpg" height="150" width="150" className="rounded-full" />
            </span>
          </div>
        </div>
        <div className="space-y-6 md:space-y-0 md:space-x-4">
          <a target="_blank" href="mailto:contact@qlaffont.com" rel="noreferrer">
            <button
              aria-label="button"
              type="button"
              className="w-full items-center justify-center rounded-full bg-[#1c1b22] py-3 px-2 font-medium text-white shadow-lg shadow-[#1c1b22]/20 hover:opacity-70 dark:bg-gray-200 dark:text-[#1c1b22] dark:shadow-gray-200/20 md:inline-flex md:w-auto md:px-12"
            >
              {t('pages.home.contactMe')}
            </button>
          </a>
          <button
            aria-label="button"
            type="button"
            className="w-full items-center justify-center rounded-full border bg-gray-200 py-3 px-2 font-medium shadow-lg shadow-gray-200 hover:opacity-70 dark:bg-[#1c1b22] dark:text-white dark:shadow-gray-200/20 md:inline-flex md:w-auto md:px-12"
          >
            {t('pages.home.moreAbouteMe')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
