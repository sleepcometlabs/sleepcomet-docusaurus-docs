import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guideSidebar: [
    {
      type: 'category',
      label: 'Primeiros Passos',
      collapsed: false,
      items: ['intro', 'quickstart', 'best-practices'],
    },
    {
      type: 'category',
      label: 'Plataforma',
      collapsed: false,
      items: ['architecture', 'security'],
    },
    {
      type: 'category',
      label: 'Conta e Assinatura',
      items: [
        'account/auth',
        'account/settings',
        'account/credits',
        'account/pricing',
      ],
    },
    {
      type: 'category',
      label: 'Central de Ajuda',
      items: ['faq', 'troubleshooting', 'limits', 'glossary'],
    },
  ],
  featuresSidebar: [
    {
      type: 'category',
      label: 'Processamento',
      collapsed: false,
      items: [
        'features/url-processing',
        'features/file-upload',
        'features/pipeline',
      ],
    },
    {
      type: 'category',
      label: 'Legendas e Estilos',
      items: [
        'features/caption-templates',
        'features/animations',
        'features/fonts',
      ],
    },
    {
      type: 'category',
      label: 'Clipes',
      items: ['features/clips', 'features/scoring', 'features/preview'],
    },
    {
      type: 'category',
      label: 'Publicação',
      items: [
        'features/scheduling',
        'features/integrations',
        'features/calendar',
      ],
    },
  ],
  apiSidebar: [
    'api/index',
    {
      type: 'category',
      label: 'Fundamentos',
      collapsed: false,
      items: ['api/auth', 'api/errors'],
    },
    {
      type: 'category',
      label: 'Endpoints',
      collapsed: false,
      items: [
        'api/videos',
        'api/projects',
        'api/clips',
        'api/caption-templates',
        'api/scheduling',
        'api/integrations',
        'api/credits',
        'api/notifications',
      ],
    },
    {
      type: 'category',
      label: 'Tempo Real',
      items: ['api/sse-status'],
    },
    {
      type: 'category',
      label: 'Interno — Worker',
      items: ['api/worker-pipeline', 'api/worker-subtitles'],
    },
  ],
};

export default sidebars;
