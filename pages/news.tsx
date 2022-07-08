/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { PageTitle } from '../components/molecule/PageTitle';
import { useI18n } from '../i18n/useI18n';

const News: NextPage = () => {
  const { t, format } = useI18n();

  const articles = [
    {
      name: 'mx-auto block w-max  mx-auto block w-max  mx-auto block w-max  mx-auto block w-max  mx-auto block w-max ',
      description:
        'Create a bot who link subscriptions to Discord roles. Create a bot who link subscriptions to Discord roles. Create a bot who link subscriptions to Discord roles. Create a bot who link subscriptions to Discord roles.Create a bot who link subscriptions to Discord roles.',
      picture: 'https://placehold.jp/1920x1080.png',
      date: new Date(),
      link: 'https://google.com',
    },
    {
      name: 'Wiseguy Bot v2',
      description: 'Create a bot who link subscriptions to Discord roles.',
      picture: 'https://placehold.jp/1920x1080.png',
      link: 'https://google.com',
      date: new Date(),
    },
    {
      name: 'Wiseguy Bot v2',
      description: 'Create a bot who link subscriptions to Discord roles.',
      picture: 'https://placehold.jp/1920x1080.png',
      link: 'https://google.com',
      date: new Date(),
    },
  ];

  return (
    <div>
      <PageTitle title={t('pages.news.title')!} description={t('pages.news.description')!} />

      <div>
        <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {articles.map((article, index) => {
            return (
              <Link href={article.link!} passHref key={index}>
                <a target="_blank" className="flex flex-col space-y-3 hover:opacity-60">
                  {article?.picture ? (
                    <div className="flex h-[200px] w-full items-center justify-center">
                      <Image
                        src={article?.picture}
                        height="200"
                        width="400"
                        alt={`${article.name} cover`}
                        className="mx-auto object-none"
                      />
                    </div>
                  ) : (
                    <div className="hidden h-[200px] w-full grow items-center justify-center md:flex">
                      <i className="icon icon-picture block h-8 w-8 bg-gray-500/50" />
                    </div>
                  )}

                  <h2 className="w-max max-w-full">
                    <span className="border-b border-sky-500 text-base font-semibold uppercase line-clamp-1">
                      {article.name}
                    </span>
                  </h2>
                  <p className="text-sm italic text-gray-500">{format(article.date, 'MMM yyyy')}</p>

                  <p className="text-justify line-clamp-3">{article.description}</p>
                </a>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="https://blog.qlaffont.com" passHref>
            <a
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-[#1c1b22] py-3 px-2 text-center font-medium text-white shadow-lg shadow-[#1c1b22]/20 hover:opacity-70 dark:bg-gray-200 dark:text-[#1c1b22] dark:shadow-gray-200/20 md:w-auto md:px-12"
            >
              {t('pages.news.moreNews')}
            </a>
          </Link>
          <Link href="https://slides.com/quentinlaffont" passHref>
            <a
              target="_blank"
              rel="noreferrer"
              className="block w-full  max-w-full rounded-full border bg-gray-200 py-3 px-2  text-center font-medium shadow-lg shadow-gray-200 hover:opacity-70 dark:bg-[#1c1b22] dark:text-white dark:shadow-gray-200/20 md:w-max md:px-12"
            >
              {t('pages.news.presentations')}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
