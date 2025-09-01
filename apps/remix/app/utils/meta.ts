import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';

export const appMetaTags = (title?: string) => {
  const description =
    '0xDocHub, Digital Document Hub for 0xMetaLabs.';

  return [
    {
      title: title ? `${title} - 0xDocHub ` : 'Documenso',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content:
        '0xDocHub, Digital Document Hub for 0xMetaLabs.',
    },
    {
      name: 'author',
      content: '0xMetaLabs, Inc.',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: '0xDocHub, Digital Document Hub for 0xMetaLabs.',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@documenso',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
  ];
};
