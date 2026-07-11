import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPostcss from '@tailwindcss/postcss';

const config: Config = {
  title: 'SleepComet Docs',
  tagline:
    'Documentação oficial do SleepComet — a plataforma de IA que transforma vídeos longos em cortes prontos para publicar.',
  favicon: 'img/favicon.svg',

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

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;600&display=swap',
  ],

  plugins: [
    async function tailwindV4Plugin() {
      return {
        name: 'tailwind-v4',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(tailwindPostcss);
          return postcssOptions;
        },
      };
    },
  ],

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
    image: 'img/social-card.svg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'SleepComet',
        src: 'img/logo-icon.png',
        srcDark: 'img/logo-icon.png',
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
          href: 'https://app.sleepcomet.com',
          label: 'Abrir o app',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Produto',
          items: [
            {label: 'Aplicativo', href: 'https://app.sleepcomet.com'},
            {label: 'Planos e preços', href: 'https://sleepcomet.com/precos'},
            {label: 'Roadmap', href: 'https://sleepcomet.com/roadmap'},
          ],
        },
        {
          title: 'Documentação',
          items: [
            {label: 'Início rápido', to: '/quickstart'},
            {label: 'Funcionalidades', to: '/features/url-processing'},
            {label: 'Referência da API', to: '/api/'},
          ],
        },
        {
          title: 'Suporte',
          items: [
            {label: 'Perguntas frequentes', to: '/faq'},
            {label: 'Solução de problemas', to: '/troubleshooting'},
            {label: 'Limites e cotas', to: '/limits'},
          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Privacidade', href: 'https://sleepcomet.com/privacidade'},
            {label: 'Termos de uso', href: 'https://sleepcomet.com/termos'},
            {label: 'Cookies', href: 'https://sleepcomet.com/cookies'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SleepComet. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.nightOwl,
      additionalLanguages: ['bash', 'json', 'python', 'go'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
