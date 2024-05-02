/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import clsx from 'clsx';
import { isEmpty } from 'lodash';
import { useMemo } from 'react';

import { useI18n } from '../i18n/useI18n';
import { isBefore } from '../services/isBefore';
import { getAllFieldsFromNotion } from '../services/notion/fetchNotionFields';
import { PDFStyleText } from '../services/textUtils/HTMLStyleText';

const devTechnologies = [
  'Node.JS',
  'React',
  'SolidJS',
  'Fastify',
  'Next.JS',
  'Electron',
  'SEO',
  'SASS',
  'Tailwind',
  'NPM / PNPM',
  'MySQL / PostgresSQL',
  'Redis',
  'MongoDB',
];

const otherTechnologies = ['Agile SCRUM', 'Debian', 'AWS', 'DevOps', 'Docker', 'Unifi Network', 'Wordpress'];

export async function getStaticProps() {
  // Data Source : https://qlaffont.notion.site/39513d6c0e1b4935a65f61b6a11ee0f4
  // Data Source : https://qlaffont.notion.site/ad72018aa75b466193019a61c5331d7f
  const [resultExps, resultDiplomas] = await Promise.all([
    getAllFieldsFromNotion('39513d6c0e1b4935a65f61b6a11ee0f4'),
    getAllFieldsFromNotion('ad72018aa75b466193019a61c5331d7f'),
  ]);

  return {
    props: {
      exps: JSON.parse(JSON.stringify(resultExps || [])),
      educations: JSON.parse(JSON.stringify(resultDiplomas || [])),
    },
    // revalidate: 60 * 60 * 24, // 24 hours
  };
}

const CV = ({
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
  const { t, format, actualLang, changeLang } = useI18n();

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
      <div className="flex min-h-screen items-center justify-center print:hidden">
        <div className="flex h-max w-max flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="flex w-max items-center gap-1 rounded-full border bg-gray-200 px-6 py-3 font-medium shadow-lg shadow-gray-200 hover:opacity-70 dark:bg-[#1c1b22] dark:text-white dark:shadow-gray-200/20"
            onClick={() => {
              changeLang('fr');

              setTimeout(() => window.print(), 500);
            }}
          >
            <i className="icon icon-download h-5 w-5 bg-black dark:bg-white"></i>
            <p>{t('pages.cv.downloadFR')}</p>
          </button>

          <button
            type="button"
            className="flex w-max items-center gap-1 rounded-full border bg-gray-200 px-6 py-3 font-medium shadow-lg shadow-gray-200 hover:opacity-70 dark:bg-[#1c1b22] dark:text-white dark:shadow-gray-200/20"
            onClick={() => {
              changeLang('en');

              setTimeout(() => window.print(), 500);
            }}
          >
            <i className="icon icon-download h-5 w-5 bg-black dark:bg-white"></i>
            <p>{t('pages.cv.downloadEN')}</p>
          </button>
        </div>
      </div>

      <div className="hidden h-screen flex-col print:flex">
        <div className="space-y-8 text-xs">
          {/* HEADER  */}
          <div className="grid grid-cols-4 gap-3">
            <div className="mx-auto">
              <p className="font-rubik !text-sm font-semibold">Quentin Laffont</p>
              <p className="text-gray-600">{t('pages.cv.fullStack')}</p>
              <p className="text-gray-600">{t('pages.cv.leadDev')}</p>
            </div>
            <div className="mx-auto text-gray-700">
              <p className="mb-2 font-rubik font-semibold">{t('pages.cv.address')}</p>

              <p>Marseille</p>
              <p>FRANCE</p>
            </div>
            <div className="mx-auto text-gray-700">
              <p className="mb-2 font-rubik font-semibold">{t('pages.cv.contact')}</p>

              <p>contact@qlaffont.com</p>
              <p>+33 6 29 86 98 41</p>
              <p>https://qlaffont.com</p>
            </div>
            <div className="mx-auto">
              <img
                src="/imgs/qlaffont.jpg"
                height="75"
                width="75"
                className="rounded-full"
                alt="Quentin Laffont profile"
              />
            </div>
          </div>

          {/* ABOUT ME / PRIORITIES */}
          <div className="grid grid-cols-2 gap-6">
            <div className="">
              <p className="mb-5 font-rubik font-semibold uppercase">{t('pages.cv.about')}</p>

              <div
                className="text-justify"
                dangerouslySetInnerHTML={{ __html: PDFStyleText(t('pages.about.presentation.1')!) }}
              ></div>
            </div>

            <div>
              <p className="mb-5 font-rubik font-semibold uppercase">{t('pages.cv.priorities')}</p>

              <ul className="list-disc space-y-1 pl-3 ">
                <li>{t('pages.cv.prioritiesDetails.projectManagement')}</li>
                <li>{t('pages.cv.prioritiesDetails.qualityCode')}</li>
                <li>{t('pages.cv.prioritiesDetails.tests')}</li>
                <li>{t('pages.cv.prioritiesDetails.cicd')}</li>
                <li>{t('pages.cv.prioritiesDetails.client')}</li>
                <li>{t('pages.cv.prioritiesDetails.security')}</li>
                <li>{t('pages.cv.prioritiesDetails.news')}</li>
              </ul>
            </div>
          </div>

          {/* EXPERIENCES / DIPLOMAS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="">
              <p className="mb-5 font-rubik font-semibold uppercase">{t('pages.cv.formation')}</p>

              <div className="space-y-4">
                {diplomas.slice(0, 6).map((diploma, index) => (
                  <div key={index}>
                    <p className="line-clamp-2 font-rubik font-semibold">{diploma.name}</p>
                    <p>{diploma.company}</p>
                    <p>{format(new Date(diploma.date), 'MMMM yyyy')}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-5 font-rubik font-semibold uppercase">{t('pages.cv.experiences')}</p>

              <div className="pl-1">
                {experiences.slice(0, 6).map((experience, index) => (
                  <div
                    key={index}
                    className={clsx('relative border-l border-black pl-5', index !== 5 ? 'pb-4' : 'pb-1')}
                  >
                    <div className="absolute -left-[4.3px] top-1 ">
                      <img src="/icons/circle.svg" className="h-2 w-2 rounded-full " alt="circle exp" />
                    </div>
                    <p className="line-clamp-2 font-rubik font-semibold">{experience.jobTitle}</p>
                    <p>{experience.company}</p>
                    <div className="text-gray-700">
                      {experience.dateTo
                        ? `${format(new Date(experience.dateFrom), 'MMMM yyyy')} - ${format(
                            new Date(experience.dateTo!),
                            'MMMM yyyy',
                          )}`
                        : `${t('pages.cv.since')} ${format(new Date(experience.dateFrom), 'MMMM yyyy')}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TAGS */}
          <div className="space-y-5">
            <div>
              <div className="flex flex-wrap gap-2">
                {devTechnologies.map((tech, index) => (
                  <div key={index} className="rounded-2xl bg-gray-200 px-2 py-1">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                {otherTechnologies.map((tech, index) => (
                  <div key={index} className="rounded-2xl bg-gray-200 px-2 py-1">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex grow flex-col justify-end">
          {/* FOOTER */}
          <p className="h-max text-center text-[0.75rem]">Quentin Laffont © https://qlaffont.com</p>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line react/display-name
CV.Layout = ({ children }: { children: ChildNode }) => <>{children}</>;

export default CV;
