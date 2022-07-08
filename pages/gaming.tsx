/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSsr } from 'usehooks-ts';

import { PageTitle } from '../components/molecule/PageTitle';
import { SectionTitle } from '../components/molecule/SectionTitle';
import { useI18n } from '../i18n/useI18n';

const Gaming: NextPage = () => {
  const { t, format } = useI18n();
  const { isBrowser } = useSsr();

  const [domain, setDomain] = useState('');

  useEffect(() => {
    if (isBrowser) {
      setDomain(window.location.hostname);
    }
  }, [isBrowser]);

  const experiences = [
    {
      jobTitle: 'Full Stack Dev',
      company: 'Flexper',
      dateFrom: new Date(),
    },
    {
      jobTitle: 'Full Stack Dev',
      company: 'Flexper',
      dateFrom: new Date(),
      dateTo: new Date(),
    },
  ];

  return (
    <div>
      <PageTitle title={t('pages.gaming.title')!} description={t('pages.gaming.description')!} />

      <div className="divide-y divide-dotted divide-gray-500/50">
        <div className="mb-12 space-y-12">
          <div>
            <iframe
              title="twitch live"
              src={'https://player.twitch.tv/?channel=mirardes&parent=' + domain}
              frameBorder="0"
              allowFullScreen={true}
              scrolling="no"
              height="450"
              width="100%"
            ></iframe>
          </div>

          <div className="flex flex-wrap items-center justify-around gap-y-8">
            <div>
              <a
                target="_blank"
                href="https://www.twitch.tv/mirardes"
                className="w-full rounded-full border bg-gray-200 py-3 px-12 text-center font-medium shadow-lg shadow-gray-200 hover:opacity-70 dark:bg-[#1c1b22] dark:text-white dark:shadow-gray-200/20 md:w-auto md:px-12"
                rel="noreferrer"
              >
                {t('pages.gaming.twitch')}
              </a>
            </div>

            <div>
              <a
                target="_blank"
                href="https://streamelements.com/mirardes/tip"
                className="w-full rounded-full border bg-gray-200 py-3 px-12 text-center font-medium shadow-lg shadow-gray-200 hover:opacity-70 dark:bg-[#1c1b22] dark:text-white dark:shadow-gray-200/20 md:w-auto md:px-12"
                rel="noreferrer"
              >
                {t('pages.gaming.donation')}
              </a>
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
      </div>
    </div>
  );
};

export default Gaming;
