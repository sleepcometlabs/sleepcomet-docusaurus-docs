import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx('buttons', 'hero--buttons')}>
          <Link
            className="button button--lg hero-button-primary"
            to="/quickstart">
            Início Rápido
          </Link>
          <Link
            className="button button--lg hero-button-outline"
            to="/api/"
            style={{marginLeft: '1rem'}}>
            API Reference
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureSection() {
  const features = [
    {
      title: 'Clipagem por IA',
      description: 'Transforme vídeos longos em clipes virais automaticamente com análise inteligente de momentos de alto impacto.',
      link: '/features/url-processing',
    },
    {
      title: 'Legendas Automáticas',
      description: 'Transcrição precisa com Whisper e legendas estilizadas com 9 tipos de animação diferentes.',
      link: '/features/caption-templates',
    },
    {
      title: 'Publicação Social',
      description: 'Agende e publique clipes diretamente no TikTok, Instagram e YouTube.',
      link: '/features/scheduling',
    },
  ];

  return (
    <section className="container" style={{padding: '2rem 0'}}>
      <div className="row">
        {features.map((f, idx) => (
          <div key={idx} className={clsx('col col--4')} style={{padding: '1rem'}}>
            <Heading as="h3">{f.title}</Heading>
            <p>{f.description}</p>
            <Link to={f.link}>Saiba mais →</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <FeatureSection />
      </main>
    </Layout>
  );
}
