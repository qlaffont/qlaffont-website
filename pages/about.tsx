import type { NextPage } from 'next';
import Image from 'next/image';

import { PageTitle } from '../components/molecule/PageTitle';
import { SectionTitle } from '../components/molecule/SectionTitle';
import { useI18n } from '../i18n/useI18n';
import { HTMLStyleText } from '../services/textUtils/HTMLStyleText';

const Home: NextPage = () => {
  const { t } = useI18n();

  return (
    <div>
      <PageTitle title={t('pages.about.title')!} description={t('pages.about.description')!} />

      <div className="divide-y divide-dotted divide-gray-500/50">
        <div className="mb-12 space-y-6">
          <p dangerouslySetInnerHTML={{ __html: HTMLStyleText(t('pages.about.presentation.1')!) }}></p>

          <p
            dangerouslySetInnerHTML={{
              __html: HTMLStyleText(t('pages.about.presentation.2', { jobTitle: 'FullStackJS', company: 'Flexper' })!),
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

        <div className="pt-12">
          <SectionTitle title={t('pages.about.experiences')!} />
        </div>
      </div>
    </div>
  );
};

export default Home;
