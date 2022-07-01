import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { useI18n } from '../../i18n/useI18n';
import { useDark } from '../../services/dark/useDark';

interface LinkType {
  title: string;
  href: string;
}

const links: LinkType[] = [
  {
    title: 'navbar.home',
    href: '/',
  },
  {
    title: 'navbar.about',
    href: '/about',
  },
  {
    title: 'navbar.projects',
    href: '/projects',
  },
  {
    title: 'navbar.gaming',
    href: '/gaming',
  },
  {
    title: 'navbar.news',
    href: '/news',
  },
  {
    title: 'navbar.tools',
    href: '/tools',
  },
];

const isLinkActive = (link: string, asPath: string) =>
  (asPath === '/' && link === '/') || (link !== '/' && asPath.includes(link));

const LinkItem = ({ title, href, isActive }: LinkType & { isActive: boolean }) => {
  const { t } = useI18n();

  return (
    <Link href={href} passHref>
      <a className="hidden rounded-full p-1 hover:bg-gray-100 dark:hover:bg-[#151519] sm:px-6 sm:py-2 md:inline-block">
        <span className={clsx(isActive ? 'm-1 border-b-2 border-sky-500 py-1 !font-semibold' : '', 'font-medium')}>
          {t(title as 'navbar.home')}
        </span>
      </a>
    </Link>
  );
};

export const AppLayout = ({ children }: React.PropsWithChildren) => {
  const { asPath } = useRouter();
  const { isDarkMode, toggle } = useDark();

  return (
    <div className="container mx-auto px-4 pt-5">
      <div className="flex items-center justify-between">
        <div>
          <Image src="/imgs/qlaffont.jpg" height="50" width="50" className="rounded-full" />
        </div>
        <div>
          <div className="flex gap-[2vw]">
            {links.map((link, index) => (
              <LinkItem {...link} key={index} isActive={isLinkActive(link.href, asPath)} />
            ))}
          </div>
        </div>
        <div>
          <button className="rounded-full bg-gray-100 p-3 hover:opacity-50 dark:bg-[#151519]" onClick={() => toggle()}>
            <i className={clsx('icon block h-4 w-4 bg-black dark:bg-white', isDarkMode ? 'icon-sun' : 'icon-moon')} />
          </button>
        </div>
      </div>

      {children}
    </div>
  );
};
