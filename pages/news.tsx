/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image from 'next/image';
import Link from 'next/link';

import { SEO } from '../components/atoms/SEO';
import { PageTitle } from '../components/molecule/PageTitle';
import { useI18n } from '../i18n/useI18n';
import { execQueryForHashnode } from '../services/hashnode/execQueryForHashnode';

type News = {
  title: string;
  brief: string;
  slug: string;
  coverImage: string;
  dateAdded: Date;
};

export async function getStaticProps() {
  const results: News[] = (
    await execQueryForHashnode(
      `
    query GetUserArticles($page: Int!, $username: String!) {
        user(username: $username) {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                    dateAdded
                }
            }
        }
    }
  `,
      { page: 0, username: 'qlaffont' },
    )
  ).data.user.publication.posts;

  return {
    props: { data: JSON.parse(JSON.stringify(results.slice(0, 3))) },
    // revalidate: 60 * 60 * 24, // 24 hours
  };
}

const News = ({ data }: { data: News[] }) => {
  const { t, format } = useI18n();

  const articles = data;

  return (
    <>
      <SEO title={t('pages.news.title')!} description={t('pages.news.description')!} />
      <div>
        <PageTitle title={t('pages.news.title')!} description={t('pages.news.description')!} />

        <div>
          <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-3">
            {articles.map((article, index) => {
              return (
                <Link
                  href={`https://blog.qlaffont.com/${article.slug}`}
                  passHref
                  key={index}
                  target="_blank"
                  className="flex flex-col space-y-3 hover:opacity-60"
                >
                  {article?.coverImage ? (
                    <div className="flex h-[200px] w-full items-center justify-center">
                      <Image
                        src={article?.coverImage}
                        height="200"
                        width="400"
                        alt={`${article.title} cover`}
                        className="mx-auto max-h-[200px]"
                      />
                    </div>
                  ) : (
                    <div className="hidden h-[200px] w-full grow items-center justify-center md:flex">
                      <i className="icon icon-picture block h-8 w-8 bg-gray-500/50" />
                    </div>
                  )}

                  <h2 className="w-max max-w-full">
                    <span className="line-clamp-1 border-b border-sky-500 font-rubik text-base font-semibold uppercase">
                      {article.title}
                    </span>
                  </h2>
                  <p className="text-sm italic text-gray-500">{format(new Date(article.dateAdded), 'MMM YYYY')}</p>

                  <p className="line-clamp-3 text-justify">{article.brief}</p>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="https://blog.qlaffont.com"
              passHref
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-[#1c1b22] px-2 py-3 text-center font-medium text-white shadow-lg shadow-[#1c1b22]/20 hover:opacity-70 md:w-auto md:px-12 dark:bg-gray-200 dark:text-[#1c1b22] dark:shadow-gray-200/20"
            >
              {t('pages.news.moreNews')}
            </Link>
            <Link
              href="https://slides.com/quentinlaffont"
              passHref
              target="_blank"
              rel="noreferrer"
              className="block w-full  max-w-full rounded-full border bg-gray-200 px-2 py-3  text-center font-medium shadow-lg shadow-gray-200 hover:opacity-70 md:w-max md:px-12 dark:bg-[#1c1b22] dark:text-white dark:shadow-gray-200/20"
            >
              {t('pages.news.presentations')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
