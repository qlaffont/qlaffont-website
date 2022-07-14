/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { isBefore } from 'date-fns';
import { isEmpty } from 'lodash';
import Image from 'next/image';
import { useMemo } from 'react';

import { SEO } from '../components/atoms/SEO';
import { PageTitle } from '../components/molecule/PageTitle';
import { SectionTitle } from '../components/molecule/SectionTitle';
import { useI18n } from '../i18n/useI18n';
import { getAllFieldsFromNotion } from '../services/notion/fetchNotionFields';
import { HTMLStyleText } from '../services/textUtils/HTMLStyleText';

export async function getStaticProps() {
  // Data Source : https://swamp-promotion-e4e.notion.site/39513d6c0e1b4935a65f61b6a11ee0f4
  // Data Source : https://swamp-promotion-e4e.notion.site/ad72018aa75b466193019a61c5331d7f
  const [resultExps, resultDiplomas] = await Promise.all([
    getAllFieldsFromNotion('39513d6c0e1b4935a65f61b6a11ee0f4'),
    getAllFieldsFromNotion('ad72018aa75b466193019a61c5331d7f'),
  ]);

  return {
    props: { exps: JSON.parse(JSON.stringify(resultExps)), educations: JSON.parse(JSON.stringify(resultDiplomas)) },
    revalidate: 60 * 10, // 10 minutes
  };
}

const About = ({
  exps,
  educations,
}: {
  exps: {
    Company: string;
    'Job Title EN': string;
    'Description EN': string;
    'Job Title FR': string;
    'Description FR': string;
    'Date From': { start: Date };
    'Date To': { start: Date };
  }[];
  educations: {
    Company: string;
    'Title EN': string;
    'Description EN': string;
    'Title FR': string;
    'Description FR': string;
    Date: { start: Date };
  }[];
}) => {
  const { t, format, actualLang } = useI18n();

  const experiences = useMemo(
    () =>
      (exps || [])
        .map((exp) => ({
          jobTitle: actualLang === 'fr' ? exp['Job Title FR'] : exp['Job Title EN'],
          description: actualLang === 'fr' ? exp['Description FR'] : exp['Description EN'],
          dateFrom: new Date(exp['Date From'].start),
          dateTo: !isEmpty(exp['Date To']?.start) ? new Date(exp['Date To'].start) : undefined,
          company: exp.Company,
        }))
        .sort((a, b) => (isBefore(a.dateFrom, b.dateFrom) ? 1 : -1)),
    [actualLang, exps],
  );

  const diplomas = useMemo(
    () =>
      (educations || [])
        .map((diploma) => ({
          name: actualLang === 'fr' ? diploma['Title FR'] : diploma['Title EN'],
          description: actualLang === 'fr' ? diploma['Description FR'] : diploma['Description EN'],
          date: new Date(diploma.Date.start),
          company: diploma.Company,
        }))
        .sort((a, b) => (isBefore(a.date, b.date) ? 1 : -1)),
    [actualLang, exps],
  );

  return (
    <>
      <SEO title={t('pages.about.title')!} />
      <div>
        <PageTitle title={t('pages.about.title')!} description={t('pages.about.description')!} />

        <div className="divide-y divide-dotted divide-gray-500/50">
          <div className="mb-12 space-y-6">
            <p dangerouslySetInnerHTML={{ __html: HTMLStyleText(t('pages.about.presentation.1')!) }}></p>

            <p
              dangerouslySetInnerHTML={{
                __html: HTMLStyleText(
                  t('pages.about.presentation.2', {
                    jobTitle: experiences[0].jobTitle,
                    company: experiences[0].company,
                  })!,
                ),
              }}
            ></p>

            <p dangerouslySetInnerHTML={{ __html: HTMLStyleText(t('pages.about.presentation.3')!) }}></p>

            <div className="grid grid-cols-1 items-center gap-y-5 md:grid-cols-4 md:gap-x-5">
              <div className="order-2 col-span-1 mx-auto md:order-1">
                <Image src="/imgs/qlaffont.jpg" height="150" width="150" className="rounded-xl" />
              </div>
              <div className="order-1 col-span-3 space-y-3 md:order-2">
                <p dangerouslySetInnerHTML={{ __html: HTMLStyleText(t('pages.about.presentation.4')!) }}></p>
              </div>
            </div>
          </div>

          <div className="mb-12 space-y-5 pt-12">
            <SectionTitle title={t('pages.about.experiences')!} />

            <div className="space-y-3 pt-5">
              {experiences.map((experience, index) => (
                <div className="flex items-center justify-between gap-3" key={index}>
                  <p className="font-semibold">
                    {experience.jobTitle} - <span className="border-b border-sky-500">{experience.company}</span>
                  </p>
                  <span className="hidden grow border-t border-dashed border-gray-300 dark:border-gray-700 md:block"></span>
                  <p className="text-gray-500">
                    {format(experience.dateFrom, 'MMM yyyy')}{' '}
                    {experience.dateTo && `- ${format(experience.dateTo!, 'MMM yyyy')}`}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 space-y-5 pt-12">
            <SectionTitle title={t('pages.about.diplomas')!} />

            <div className="space-y-3 pt-5">
              {diplomas.map((diploma, index) => (
                <div className="flex items-center justify-between gap-3" key={index}>
                  <p className="font-semibold">
                    {diploma.name} - <span className="border-b border-sky-500">{diploma.name}</span>
                  </p>
                  <span className="hidden grow border-t border-dashed border-gray-300 dark:border-gray-700 md:block"></span>
                  <p className="text-gray-500">{format(diploma.date, 'MMM yyyy')}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 space-y-5 pt-12">
            <SectionTitle title={t('pages.about.services')!} />

            <div className="grid grid-cols-1 gap-12 pt-5 text-center md:grid-cols-3">
              <div>
                <div>
                  <i className="icon icon-website mx-auto block h-12 w-12 bg-sky-500" />
                </div>
                <p className="mt-3 mb-1 block text-lg font-bold">{t('pages.about.servicesDetails.website.title')}</p>
                <p className="text-justify">{t('pages.about.servicesDetails.website.description')}</p>
              </div>

              <div>
                <div>
                  <i className="icon icon-desktop mx-auto block h-12 w-12 bg-gray-500 dark:bg-white" />
                </div>
                <p className="mt-3 mb-1 block text-lg font-bold">
                  {t('pages.about.servicesDetails.application.title')}
                </p>
                <p className="text-justify">{t('pages.about.servicesDetails.application.description')}</p>
              </div>

              <div>
                <div>
                  <i className="brand icon-discord mx-auto block h-12 w-12 bg-discord" />
                </div>
                <p className="mt-3 mb-1 block text-lg font-bold">{t('pages.about.servicesDetails.discord.title')}</p>
                <p className="text-justify">{t('pages.about.servicesDetails.discord.description')}</p>
              </div>
            </div>

            <div
              className="relative !mt-16 h-96 rounded-3xl"
              style={{ background: "url('/imgs/bg-pro.jpg') center center", backgroundClip: 'content-box' }}
            >
              <div className="sticky z-50 flex h-96 items-center justify-center text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold text-white">{t('pages.about.servicesHero.title')}</h1>
                  <p className="mb-5 text-white">{t('pages.about.servicesHero.description')}</p>

                  <a
                    target="_blank"
                    href="mailto:contact@qlaffont.com"
                    rel="noreferrer"
                    className="mx-auto inline-block w-full md:w-auto"
                  >
                    <div className="flex w-full items-center justify-center gap-2 rounded-full bg-[#1c1b22] py-3 px-2 font-medium text-white shadow-lg shadow-[#1c1b22]/20 hover:opacity-70 dark:bg-gray-200 dark:text-[#1c1b22] dark:shadow-gray-200/20 md:w-80 md:px-12">
                      <span className="icon icon-mail block h-4 w-4 bg-white dark:bg-black"></span>{' '}
                      <span>contact@qlaffont.com</span>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    href="tel:+33629869841"
                    rel="noreferrer"
                    className="mx-auto inline-block w-full md:w-auto"
                  >
                    <div className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#1c1b22] py-3 px-2 font-medium text-white shadow-lg shadow-[#1c1b22]/20 hover:opacity-70 dark:bg-gray-200 dark:text-[#1c1b22] dark:shadow-gray-200/20 md:w-80 md:px-12">
                      <span className="icon icon-phone block h-4 w-4 bg-white dark:bg-black"></span>{' '}
                      <span>+33 6 29 86 98 41</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="absolute top-0 left-0 z-0 h-96 w-full rounded-3xl bg-black opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
