/* eslint-disable @typescript-eslint/no-non-null-assertion */
import clsx from 'clsx';
import { isBefore } from 'date-fns';
import { isEmpty } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import { SEO } from '../components/atoms/SEO';
import { PageTitle } from '../components/molecule/PageTitle';
import { useI18n } from '../i18n/useI18n';
import { getAllFieldsFromNotion } from '../services/notion/fetchNotionFields';

export async function getStaticProps() {
  // Data Source : https://swamp-promotion-e4e.notion.site/a861796b748d4867b4985655234a0c3e
  const results = await getAllFieldsFromNotion('a861796b748d4867b4985655234a0c3e');

  return {
    props: { data: JSON.parse(JSON.stringify(results)) },
    revalidate: 60 * 10, // 10 minutes
  };
}

const Projects = ({
  data,
}: {
  data: {
    'Title EN': string;
    'Description EN': string;
    'Title FR': string;
    'Description FR': string;
    Tech: string;
    Date: { start: Date };
    Image?: string;
    Link?: string;
  }[];
}) => {
  const { t, format, actualLang } = useI18n();

  const projects = useMemo(
    () =>
      (data || [])
        .map((project) => ({
          name: actualLang === 'fr' ? project['Title FR'] : project['Title EN'],
          description: actualLang === 'fr' ? project['Description FR'] : project['Description EN'],
          picture: !isEmpty(project.Image) ? project.Image : undefined,
          link: !isEmpty(project.Link) ? project.Link : undefined,
          technologies: project.Tech,
          date: new Date(project.Date.start),
        }))
        .sort((a, b) => (isBefore(a.date, b.date) ? 1 : -1)),
    [actualLang, data],
  );

  return (
    <>
      <SEO title={t('pages.projects.title')!} />
      <div>
        <PageTitle title={t('pages.projects.title')!} description={t('pages.projects.description')!} />

        <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {projects.map((project, index) => {
            const LayoutProject = ({ children, ...props }: React.PropsWithChildren & { className: string }) =>
              project?.link ? (
                <Link href={project.link} passHref>
                  <a target="_blank" {...props} className={clsx(props?.className || '', 'hover:opacity-60')}>
                    {children}
                  </a>
                </Link>
              ) : (
                <div {...props}>{children}</div>
              );

            return (
              <LayoutProject key={index} className="flex flex-col space-y-3 ">
                {project?.picture ? (
                  <div className="flex h-[200px] w-full items-center justify-center">
                    <Image
                      src={`/website/${project.picture}`}
                      height="200"
                      width="400"
                      alt={`${project.name} cover`}
                      className="mx-auto object-none"
                    />
                  </div>
                ) : (
                  <div className="hidden h-[200px] w-full items-center justify-center md:flex">
                    <i className="icon icon-picture block h-8 w-8 bg-gray-500/50" />
                  </div>
                )}

                <h2 className="mx-auto block w-max ">
                  <span className="border-b border-sky-500 text-base font-semibold uppercase"> {project.name}</span> -{' '}
                  <span className="text-center text-sm font-semibold">{format(project.date, 'MMM yyyy')}</span>
                </h2>

                <p className="grow text-justify">{project.description}</p>

                <p className="text-center text-sm italic text-gray-500">{project.technologies}</p>
              </LayoutProject>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
