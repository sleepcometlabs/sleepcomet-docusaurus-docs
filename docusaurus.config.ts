import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Sleepcomet Docs',
  tagline: 'Documentação da plataforma Sleepcomet',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.sleepcomet.com',
  baseUrl: '/',

  organizationName: 'sleepcomet',
  projectName: 'sleepcomet',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Sleepcomet',
        src: 'img/logo-letter-white.png',
        srcDark: 'img/logo-letter-white.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'Guia',
        },
        {
          type: 'docSidebar',
          sidebarId: 'featuresSidebar',
          position: 'left',
          label: 'Funcionalidades',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://sleepcomet.com',
          label: 'Plataforma',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Plataforma',
          items: [
            { label: 'App', href: 'https://app.sleepcomet.com' },
            { label: 'Preços', href: 'https://sleepcomet.com/precos' },
            { label: 'Roadmap', href: 'https://sleepcomet.com/roadmap' },
          ],
        },
        {
          title: 'Documentação',
          items: [
            { label: 'Início Rápido', to: '/quickstart' },
            { label: 'API Reference', to: '/api/' },
            { label: 'Guia de Templates', to: '/features/caption-templates' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacidade', href: 'https://sleepcomet.com/privacidade' },
            { label: 'Termos', href: 'https://sleepcomet.com/termos' },
            { label: 'Cookies', href: 'https://sleepcomet.com/cookies' },
          ],
        },
      ],
      copyright: `Copyright \u00A9 ${new Date().getFullYear()} Sleepcomet. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'python', 'go'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
