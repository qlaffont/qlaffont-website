import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useBoolean, useSsr } from 'usehooks-ts';

import { useI18n } from '../../i18n/useI18n';
import { useDark } from '../../services/dark/useDark';
import { useI18nSEO } from '../../services/seo/useI18nSEO';
import { Footer } from './Footer';

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

const LinkItemMobile = ({ title, href, isActive }: LinkType & { isActive: boolean }) => {
  const { t } = useI18n();
  const { push } = useRouter();

  return (
    <button
      aria-label={t(title as 'navbar.home')}
      onClick={() => {
        push(href);
      }}
    >
      <a
        className={clsx(
          'rounded-full py-1 px-4 md:inline-block',
          isActive ? 'bg-gray-100 dark:bg-[#151519]' : '',
          'hover:bg-gray-100 dark:hover:bg-[#151519]',
        )}
      >
        <span className={clsx(isActive ? ' !font-semibold' : '', 'font-medium')}>{t(title as 'navbar.home')}</span>
      </a>
    </button>
  );
};

export const AppLayout = ({ children }: React.PropsWithChildren) => {
  const { asPath } = useRouter();
  const { isDarkMode, toggle } = useDark();
  const { value: darkMode, setValue: setDarkMode } = useBoolean();
  const { actualLang, changeLang } = useI18n();
  const { isBrowser } = useSsr();
  useI18nSEO();

  useEffect(() => {
    if (isBrowser) {
      setDarkMode(isDarkMode);
    }
  }, [isBrowser, isDarkMode]);

  return (
    <div className="container mx-auto flex min-h-screen flex-col px-4 pt-5">
      <div className="grow">
        <div className="relative z-50 flex items-center justify-between">
          <div>
            <Image
              src="/imgs/qlaffont.jpg"
              height="50"
              width="50"
              className="rounded-full"
              alt="navbar profile picture"
            />
          </div>
          <div>
            <div className="flex gap-[2vw]">
              {links.map((link, index) => (
                <LinkItem {...link} key={index} isActive={isLinkActive(link.href, asPath)} />
              ))}
            </div>
          </div>
          <div className="relative flex gap-1">
            <button
              aria-label="toggle-dark-mode"
              className="rounded-full bg-gray-100 p-3 hover:opacity-50 dark:bg-[#151519]"
              onClick={() => toggle()}
            >
              <i className={clsx('icon block h-4 w-4 bg-black dark:bg-white', darkMode ? 'icon-sun' : 'icon-moon')} />
            </button>
            <button
              aria-label={`lang-${actualLang === 'fr' ? 'en' : 'fr'}`}
              className="rounded-full bg-gray-100 p-3 hover:opacity-50 dark:bg-[#151519]"
              onClick={() => {
                if (isBrowser) {
                  const newLang = actualLang === 'fr' ? 'en' : 'fr';

                  changeLang(newLang);
                  localStorage.setItem('lang', newLang);
                }
              }}
            >
              <i className={clsx('icon mask-center block h-2 w-4', actualLang === 'fr' ? 'bg-en' : 'bg-fr')} />
            </button>
            <Menu>
              <Menu.Button as="div" className="block md:hidden">
                <button
                  className="rounded-full bg-gray-100 p-3 hover:opacity-50 dark:bg-[#151519]"
                  aria-label="open navbar"
                >
                  <i className={clsx('icon block h-4 w-4 bg-black dark:bg-white', 'icon-menu')} />
                </button>
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items
                  className={
                    'absolute top-0 right-0  w-[80vw] max-w-[100vw] rounded-lg bg-white p-6 shadow-lg dark:bg-[#1E1D24] dark:text-gray-400'
                  }
                >
                  {links.map((link, index) => (
                    <Menu.Item as="div" key={index} className="my-3">
                      <LinkItemMobile {...link} key={index} isActive={isLinkActive(link.href, asPath)} />
                    </Menu.Item>
                  ))}
                  <Menu.Item as="div" className={'absolute top-1 right-1'}>
                    <button
                      className="m-1 rounded-full bg-gray-100 p-2 hover:opacity-50 dark:bg-[#151519]"
                      aria-label="close-navbar"
                    >
                      <i className={clsx('icon block h-4 w-4 bg-black dark:bg-white', 'icon-close')} />
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        {children}
      </div>

      <Footer />
    </div>
  );
};
