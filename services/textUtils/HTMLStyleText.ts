export const HTMLStyleText = (text: string) => {
  return text
    .trim()
    .replaceAll('<u>', '<span class="border-b border-sky-500 font-semibold">')
    .replaceAll('</u>', '</span>')
    .replaceAll(
      'Twitter (@qlaffont)',
      '<a href="https://twitter.com/qlaffont" target="_blank" class="border-b border-sky-500 hover:text-sky-500 font-semibold">Twitter (@qlaffont)</a>',
    )
    .replaceAll(
      'Github (@qlaffont)',
      '<a href="https://github.com/qlaffont" target="_blank" class="border-b border-sky-500 hover:text-sky-500 font-semibold">Github (@qlaffont)</a>',
    )
    .replaceAll(
      'Discord server',
      '<a href="https://discord.gg/PqUw8r2hpm" target="_blank" class="border-b border-sky-500 hover:text-sky-500 font-semibold">Discord server</a>',
    )
    .replaceAll(
      'serveur Discord',
      '<a href="https://discord.gg/PqUw8r2hpm" target="_blank" class="border-b border-sky-500 hover:text-sky-500 font-semibold">serveur Discord</a>',
    );
};
