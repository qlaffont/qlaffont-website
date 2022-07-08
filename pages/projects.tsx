/* eslint-disable @typescript-eslint/no-non-null-assertion */
import clsx from 'clsx';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { PageTitle } from '../components/molecule/PageTitle';
import { useI18n } from '../i18n/useI18n';

const Projects: NextPage = () => {
  const { t, format } = useI18n();

  const projects = [
    {
      name: 'Wiseguy Bot v2',
      description: 'Create a bot who link subscriptions to Discord roles.',
      picture: 'https://placehold.jp/1920x1080.png',
      date: new Date(),
      technologies: 'Typescript, Node, Discord.js, Stripe, Chargebee, Paypal, Wireguard, Caddy, Debian',
      link: 'https://google.com',
    },
    {
      name: 'Wiseguy Bot v2',
      description: 'Create a bot who link subscriptions to Discord roles.',
      date: new Date(),
      technologies: 'Typescript, Node, Discord.js, Stripe, Chargebee, Paypal, Wireguard, Caddy, Debian',
    },
    {
      name: 'Wiseguy Bot v2',
      description: 'Create a bot who link subscriptions to Discord roles.',
      date: new Date(),
      technologies: 'Typescript, Node, Discord.js, Stripe, Chargebee, Paypal, Wireguard, Caddy, Debian',
    },
    {
      name: 'Wiseguy Bot v2',
      description: 'Create a bot who link subscriptions to Discord roles.',
      date: new Date(),
      technologies: 'Typescript, Node, Discord.js, Stripe, Chargebee, Paypal, Wireguard, Caddy, Debian',
    },
  ];

  return (
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
                    src={project?.picture}
                    height="200"
                    width="400"
                    alt={`${project.name} cover`}
                    className="mx-auto object-none"
                  />
                </div>
              ) : (
                <div className="hidden h-[200px] w-full grow items-center justify-center md:flex">
                  <i className="icon icon-picture block h-8 w-8 bg-gray-500/50" />
                </div>
              )}

              <h2 className="mx-auto block w-max ">
                <span className="border-b border-sky-500 text-base font-semibold uppercase"> {project.name}</span> -{' '}
                <span className="text-center text-sm font-semibold">{format(project.date, 'MMM yyyy')}</span>
              </h2>

              <p className="text-justify">{project.description}</p>

              <p className="text-center text-sm italic text-gray-500">{project.technologies}</p>
            </LayoutProject>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
