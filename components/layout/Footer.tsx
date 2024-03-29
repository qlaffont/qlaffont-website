import { useI18n } from '../../i18n/useI18n';

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="mb-6 mt-12 flex shrink-0 flex-wrap items-center justify-between">
      <p className="text-xs italic">© {new Date().getFullYear()} Quentin Laffont</p>

      <div className="flex items-center space-x-6">
        <a href="https://github.com/qlaffont/qlaffont-website/" target="_blank" rel="noreferrer" className="text-xs">
          {t('components.layout.footer.source')}
        </a>
        <a href="https://www.linkedin.com/in/qlaffont" target="_blank" rel="noreferrer">
          <i className="brand icon-linkedin mask-center block h-6 w-4 bg-gray-700 hover:opacity-60 dark:bg-gray-400" />
        </a>
        <a href="https://github.com/qlaffont" target="_blank" rel="noreferrer">
          <i className="brand icon-github mask-center block h-6 w-5 bg-gray-700 hover:opacity-60 dark:bg-gray-400" />
        </a>
        <a href="https://discord.gg/PqUw8r2hpm" target="_blank" rel="noreferrer">
          <i className="brand icon-discord mask-center block h-6 w-5 bg-gray-700 hover:opacity-60 dark:bg-gray-400" />
        </a>
      </div>
    </footer>
  );
};
