export const Footer = () => {
  return (
    <footer className="mt-12 mb-6 flex shrink-0 flex-wrap items-center justify-between">
      <p className="italic">© {new Date().getFullYear()} Quentin Laffont</p>

      <div className="flex items-center space-x-6">
        <a href="https://twitter.com/qlaffont" target="_blank" rel="noreferrer">
          <i className="brand icon-twitter mask-center block h-6 w-6 bg-gray-700 hover:opacity-60 dark:bg-gray-400" />
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
