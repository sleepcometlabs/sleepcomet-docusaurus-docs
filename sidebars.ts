import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guideSidebar: [
    'intro',
    'quickstart',
    'architecture',
    {
      type: 'category',
      label: 'Conta e Planos',
      items: ['account/auth', 'account/settings', 'account/pricing'],
    },
  ],
  featuresSidebar: [
    {
      type: 'category',
      label: 'Processamento',
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
      items: [
        'features/clips',
        'features/scoring',
        'features/preview',
      ],
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
      label: 'Endpoints',
      items: [
        'api/projects',
        'api/clips',
        'api/caption-templates',
        'api/integrations',
        'api/scheduling',
        'api/credits',
        'api/auth',
      ],
    },
    {
      type: 'category',
      label: 'Webhooks e Events',
      items: [
        'api/sse-status',
      ],
    },
    {
      type: 'category',
      label: 'Worker Internals',
      items: [
        'api/worker-pipeline',
        'api/worker-subtitles',
      ],
    },
  ],
};

export default sidebars;
