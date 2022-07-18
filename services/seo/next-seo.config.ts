const APP_DEFAULT_SEO = {
  title: 'Quentin Laffont',
  titleTemplate: '%s - Quentin Laffont',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: 'imgs/qlaffont.jpg',
        height: 640,
        width: 640,
        alt: 'Quentin Laffont profile',
      },
    ],
  },
  twitter: {
    handle: '@qlaffont',
    site: '@qlaffont',
    cardType: 'summary_large_image',
  },
};

export const ogTitle = (title: string, description = undefined) => ({
  title: APP_DEFAULT_SEO.titleTemplate.replace('%s', title),
  description,
});
export default APP_DEFAULT_SEO;
