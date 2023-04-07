/* eslint-disable @typescript-eslint/no-non-null-assertion */
import clsx from 'clsx';
import ColorHash from 'color-hash';
import { useMemo } from 'react';

import { SEO } from '../components/atoms/SEO';
import { PageTitle } from '../components/molecule/PageTitle';
import { SectionTitle } from '../components/molecule/SectionTitle';
import { useI18n } from '../i18n/useI18n';
import { getAllFieldsFromNotion } from '../services/notion/fetchNotionFields';
import { normalize } from '../services/textUtils/normalizeString';

const colorHash = new ColorHash({ saturation: 0.5 });

export async function getStaticProps() {
  // Data Source : https://qlaffont.notion.site/ad90bac785dc4d3a9eebf91fa542573a
  const results = await getAllFieldsFromNotion('ad90bac785dc4d3a9eebf91fa542573a');

  return {
    props: { data: JSON.parse(JSON.stringify(results || [])) },
    // revalidate: 60 * 60 * 24, // 24 hours
  };
}

const Tools = ({
  data,
}: {
  data: { Link: string; 'Name FR': string; 'Name EN': string; Color: string; Category: string; Icon: string }[];
}) => {
  const { t, actualLang } = useI18n();

  const tools = useMemo(
    () =>
      data?.map((item) => ({
        name: actualLang === 'fr' ? item['Name FR'] : item['Name EN'],
        url: item['Link'],
        color: item['Color'],
        category: item['Category'],
        icon: item['Icon'],
      })) || [],
    [data, actualLang],
  );

  const categories: Record<string, { items: typeof tools }> = useMemo(() => {
    return Object.entries(
      tools.reduce(
        (prev, next) =>
          ({
            ...prev,
            [next.category]: {
              //@ts-ignore
              items: [...(prev[next.category]?.items || []), next],
            },
          } as Record<string, { items: typeof tools }>),
        {},
      ),
    )
      .sort(([k], [nextK]) => {
        return normalize(k)!.localeCompare(normalize(nextK)!);
      })
      .reduce((prev, next) => ({ ...prev, [next[0]]: next[1] }), {});
  }, [tools]);

  return (
    <>
      <SEO title={t('pages.tools.title')!} description={t('pages.tools.description')!} />
      <div>
        <PageTitle title={t('pages.tools.title')!} description={t('pages.tools.description')!} />

        <div className="divide-y divide-dotted divide-gray-500/50">
          <div className="mb-12 flex flex-wrap items-center justify-start gap-y-6 ">
            <div>
              <p className="font-bold">{t('pages.tools.config.desktop')}</p>
              <p>&nbsp;</p>

              <p>
                <span className="border-b border-sky-500">{t('pages.tools.config.os')} :</span> Windows 11 / PopOS 22
              </p>
              <p>&nbsp;</p>

              <p>
                <span className="border-b border-sky-500">{t('pages.tools.config.processor')} :</span> AMD RYZEN 7 3700X
              </p>
              <p>
                <span className="border-b border-sky-500">{t('pages.tools.config.motherboard')} :</span> GIGABYTE X570
                GAMING X
              </p>
              <p>
                <span className="border-b border-sky-500">{t('pages.tools.config.alimentation')} :</span> CORSAIR
                PROFESSIONAL PLATINUM SERIES HX750
              </p>
              <p>
                <span className="border-b border-sky-500">{t('pages.tools.config.cooler')} :</span> BE QUIET DARK ROCK 4
              </p>
              <p>
                <span className="border-b border-sky-500">{t('pages.tools.config.case')} :</span> FRACTAL DESIGN MESHIFY
                S2 DARK TG (BLACK)
              </p>
              <p>
                <span className="border-b border-sky-500">{t('pages.tools.config.graphicCard')} :</span> KFA2 GeForce
                RTX 2070 SUPER EX (1-Click OC), 8 Go
              </p>
              <p>
                <span className="border-b border-sky-500">{t('pages.tools.config.ram')} :</span> HYPERX FURY BLACK DDR4
                4 X 8 GO 3200 MHZ CAS 16
              </p>
              <p>&nbsp;</p>

              <p>
                <span className="border-b border-sky-500">{t('pages.tools.config.keyboardAndMouse')} :</span> Logitech G
                Pro
              </p>
              <p>
                <span className="border-b border-sky-500">{t('pages.tools.config.headset')} :</span> Logitech G Pro
                Wireless
              </p>
              <p>
                <span className="border-b border-sky-500">{t('pages.tools.config.flight')} :</span> Joystick Logitech G
                X52 Professional Space & Flight Simulator HOTAS Joystick
              </p>
              <p>
                <span className="border-b border-sky-500">{t('pages.tools.config.driving')} :</span> Logitech G 923 Pro
                TRUEFORCE
              </p>
            </div>
            <div>
              <p className="font-bold">{t('pages.tools.config.portable')}</p>
              <p>&nbsp;</p>

              <p>Macbook Pro 2017 (16 Go RAM / 256 SSD) </p>
              <p>&nbsp;</p>

              <p>
                <span className="border-b border-sky-500">{t('pages.tools.config.keyboard')} :</span> Keychron Q1
              </p>
              <p>
                <span className="border-b border-sky-500">{t('pages.tools.config.headset')} :</span> PLT BB PRO 2
              </p>
              <p>&nbsp;</p>
            </div>
          </div>

          <div className="mb-12 space-y-5 pt-12">
            <div className="space-y-12 pt-5">
              {Object.entries(categories).map(([category, data], index) => (
                <div key={index} className="space-y-3">
                  <div>
                    <SectionTitle title={category} />
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {data.items
                      .sort((prev, next) => normalize(prev.name)!.localeCompare(next.name))
                      .map((link, j) => (
                        <div key={j}>
                          <a
                            target="_blank"
                            href={link.url}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-200 px-2 py-3 font-medium text-white shadow-lg hover:opacity-70 dark:bg-gray-500 md:px-6"
                            style={{ backgroundColor: link?.color || colorHash.hex(link.name) }}
                            rel="noreferrer"
                          >
                            {link.icon && <i className={clsx(link.icon, 'h-4 w-4 bg-white pb-1')}></i>}{' '}
                            <span>{link.name}</span>
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
