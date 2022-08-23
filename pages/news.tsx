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
    revalidate: 60 * 60 * 24, // 24 hours
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
                <Link href={`https://blog.qlaffont.com/${article.slug}`} passHref key={index}>
                  <a target="_blank" className="flex flex-col space-y-3 hover:opacity-60">
                    {article?.coverImage ? (
                      <div className="flex h-[200px] w-full items-center justify-center">
                        <Image
                          src={article?.coverImage}
                          height="200"
                          width="400"
                          alt={`${article.title} cover`}
                          className="mx-auto"
                        />
                      </div>
                    ) : (
                      <div className="hidden h-[200px] w-full grow items-center justify-center md:flex">
                        <i className="icon icon-picture block h-8 w-8 bg-gray-500/50" />
                      </div>
                    )}

                    <h2 className="w-max max-w-full">
                      <span className="border-b border-sky-500 font-rubik text-base font-semibold uppercase line-clamp-1">
                        {article.title}
                      </span>
                    </h2>
                    <p className="text-sm italic text-gray-500">{format(new Date(article.dateAdded), 'MMM yyyy')}</p>

                    <p className="text-justify line-clamp-3">{article.brief}</p>
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
    </>
  );
};

export default News;
