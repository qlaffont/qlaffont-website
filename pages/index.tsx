import Image from 'next/image';
import Link from 'next/link';

import { SEO } from '../components/atoms/SEO';
import { useI18n } from '../i18n/useI18n';
import { getAllFieldsFromNotion } from '../services/notion/fetchNotionFields';

export async function getStaticProps() {
  // Data Source : https://qlaffont.notion.site/39513d6c0e1b4935a65f61b6a11ee0f4
  const results = (await getAllFieldsFromNotion('39513d6c0e1b4935a65f61b6a11ee0f4')) as {
    Company: string;
    'Date To'?: { start: Date };
  }[];
  //Get only companies who haven't Date To

  const companyNames = (results || [])
    .filter((exp) => exp['Date To'] === undefined)
    .reduce((prev, exp) => `${prev}, ${exp.Company}`, '')
    .slice(2);

  return {
    props: { companyNames },
    // revalidate: 60 * 60 * 24, // 24 hours
  };
}

const Home = ({ companyNames }: { companyNames: string }) => {
  const { t } = useI18n();

  return (
    <>
      <SEO title="Lead Tech / Full-Stack JS Dev" description={t('pages.about.presentation.1')} />
      <div className="flex min-h-[75vh] flex-col justify-center">
        <div className="space-y-5">
          <div className="grid grid-cols-1 items-center gap-x-0 gap-y-3 text-center md:mt-24 md:grid-cols-6 md:gap-x-6 md:text-left">
            <div className="order-2 col-span-5 mb-5 md:order-1">
              <h1 className="text-3xl leading-tight md:leading-normal">
                <i className="float-left pr-3 animatecss animatecss-infinite animatecss-slow animatecss-tada">👋</i>
                <p>
                  {t('pages.home.Im')} <span className="text-sky-500 dark:text-sky-400">Quentin</span>.{' '}
                  {t('pages.home.jobTitle', { company: companyNames })}.
                </p>
              </h1>
              <p className="mt-5 text-xl italic md:mt-0">{t('pages.home.freelanceInfo')}</p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/imgs/qlaffont.jpg"
                height="150"
                width="150"
                className="rounded-full"
                alt="Quentin Laffont profile"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center space-y-4 md:space-x-4 md:space-y-0">
            <a target="_blank" href="mailto:contact@qlaffont.com" rel="noreferrer" className="w-full md:w-auto">
              <button
                type="button"
                className="w-full rounded-full bg-[#1c1b22] px-2 py-3 font-medium text-white shadow-lg shadow-[#1c1b22]/20 hover:opacity-70 dark:bg-gray-200 dark:text-[#1c1b22] dark:shadow-gray-200/20 md:w-auto md:px-12"
              >
                {t('pages.home.contactMe')}
              </button>
            </a>
            <Link
              href="/about"
              passHref
              className="w-full rounded-full border bg-gray-200 px-2 py-3 text-center font-medium shadow-lg shadow-gray-200 hover:opacity-70 dark:bg-[#1c1b22] dark:text-white dark:shadow-gray-200/20 md:w-auto md:px-12"
            >
              {t('pages.home.moreAbouteMe')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
