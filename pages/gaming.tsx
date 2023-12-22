/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { isEmpty } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { useSsr } from 'usehooks-ts';

import { SEO } from '../components/atoms/SEO';
import { DescriptionModal } from '../components/molecule/DescriptionModal';
import { PageTitle } from '../components/molecule/PageTitle';
import { SectionTitle } from '../components/molecule/SectionTitle';
import { useI18n } from '../i18n/useI18n';
import { isBefore } from '../services/isBefore';
import { getAllFieldsFromNotion } from '../services/notion/fetchNotionFields';

export async function getStaticProps() {
  // Data Source : https://qlaffont.notion.site/3710d9123b314a0591997255fe100897
  const results = await getAllFieldsFromNotion('3710d9123b314a0591997255fe100897');

  return {
    props: { data: JSON.parse(JSON.stringify(results || [])) },
    // revalidate: 60 * 60 * 24, // 24 hours
  };
}

const Gaming = ({
  data,
}: {
  data: {
    Company: string;
    'Job Title EN': string;
    'Description EN': string;
    'Job Title FR': string;
    'Description FR': string;
    'Date From': { start: Date };
    'Date To': { start: Date };
  }[];
}) => {
  const { t, format, actualLang } = useI18n();
  const { isBrowser } = useSsr();

  const [domain, setDomain] = useState('');

  useEffect(() => {
    if (isBrowser) {
      setDomain(window.location.hostname);
    }
  }, [isBrowser]);

  const experiences = useMemo(
    () =>
      (data || [])
        ?.map((exp) => ({
          jobTitle: actualLang === 'fr' ? exp['Job Title FR'] : exp['Job Title EN'],
          description: actualLang === 'fr' ? exp['Description FR'] : exp['Description EN'],
          company: exp.Company,
          dateFrom: new Date(exp['Date From'].start),
          dateTo: exp['Date To']?.start ? new Date(exp['Date To']?.start) : undefined,
        }))
        .sort((a, b) => (isBefore(a.dateFrom, b.dateFrom) ? 1 : -1)),
    [actualLang, data],
  );

  return (
    <>
      <SEO title={t('pages.gaming.title')!} description={t('pages.gaming.description')!} />
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
                  className="w-full rounded-full border bg-gray-200 px-12 py-3 text-center font-medium shadow-lg shadow-gray-200 hover:opacity-70 md:w-auto md:px-12 dark:bg-[#1c1b22] dark:text-white dark:shadow-gray-200/20"
                  rel="noreferrer"
                >
                  {t('pages.gaming.twitch')}
                </a>
              </div>

              <div>
                <a
                  target="_blank"
                  href="https://streamelements.com/mirardes/tip"
                  className="w-full rounded-full border bg-gray-200 px-12 py-3 text-center font-medium shadow-lg shadow-gray-200 hover:opacity-70 md:w-auto md:px-12 dark:bg-[#1c1b22] dark:text-white dark:shadow-gray-200/20"
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
                <div className="flex flex-wrap items-center justify-between gap-3" key={index}>
                  <p className="font-semibold">
                    {experience.jobTitle} - <span className="border-b border-sky-500">{experience.company}</span>
                  </p>
                  <span className="hidden grow border-t border-dashed border-gray-300 md:block dark:border-gray-700"></span>
                  <p className="text-gray-500">
                    {format(experience.dateFrom, 'MMM YYYY')}
                    {experience.dateTo && ` - ${format(experience.dateTo!, 'MMM YYYY')}`}
                    {!isEmpty(experience.description) && <DescriptionModal description={experience.description} />}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gaming;
