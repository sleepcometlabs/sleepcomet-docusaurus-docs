import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {
  ArrowRight,
  Braces,
  CalendarClock,
  Captions,
  Coins,
  ListVideo,
  Rocket,
} from 'lucide-react';
import {Badge} from '@site/src/components/cui/badge';
import {Button} from '@site/src/components/cui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@site/src/components/cui/card';

const stats = [
  {value: '8', label: 'etapas na pipeline de processamento'},
  {value: '12', label: 'templates de legenda prontos para uso'},
  {value: '9', label: 'animações de legenda disponíveis'},
  {value: '3', label: 'redes sociais com publicação direta'},
];

const sections = [
  {
    icon: Rocket,
    title: 'Início rápido',
    description:
      'Da criação da conta ao primeiro clipe renderizado em cinco passos. O ponto de partida recomendado para novos usuários.',
    link: '/quickstart',
  },
  {
    icon: ListVideo,
    title: 'Pipeline de processamento',
    description:
      'Como o vídeo percorre as oito etapas — da análise da URL à renderização final — e como acompanhar cada uma em tempo real.',
    link: '/features/pipeline',
  },
  {
    icon: Captions,
    title: 'Templates de legenda',
    description:
      'Tipografia, cores, animações por palavra e de entrada, posicionamento e marca d’água. Tudo o que compõe o estilo dos seus cortes.',
    link: '/features/caption-templates',
  },
  {
    icon: CalendarClock,
    title: 'Agendamento e calendário',
    description:
      'Programe publicações individuais ou em lote no TikTok, Instagram e YouTube, e gerencie tudo pelo calendário integrado.',
    link: '/features/scheduling',
  },
  {
    icon: Coins,
    title: 'Créditos e planos',
    description:
      'Entenda o modelo de créditos (1 crédito = 1 minuto de vídeo), os limites de cada plano e como fazer upgrade.',
    link: '/account/pricing',
  },
  {
    icon: Braces,
    title: 'Referência da API',
    description:
      'Endpoints REST, autenticação, eventos em tempo real via SSE e os detalhes internos do worker de renderização.',
    link: '/api/',
  },
];

const steps = [
  {
    number: '1',
    title: 'Envie o vídeo',
    description:
      'Cole um link do YouTube ou Vimeo, ou envie um arquivo do seu computador. A plataforma identifica título, duração e idioma automaticamente.',
  },
  {
    number: '2',
    title: 'Defina o estilo',
    description:
      'Escolha o modo de processamento, a duração dos cortes e um template de legenda — pronto ou criado por você.',
  },
  {
    number: '3',
    title: 'Publique',
    description:
      'Receba os clipes classificados por potencial de viralidade e publique na hora ou agende direto nas suas redes.',
  },
];

function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-border bg-background">
      <div className="sc-starfield" />
      <div className="sc-comet" />
      <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Badge variant="outline" className="mb-6 h-6 px-2.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Documentação oficial
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
          O corte perfeito acontece enquanto você dorme.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          O Sleepcomet transforma vídeos longos em cortes verticais com
          legendas animadas, pontuação de viralidade e publicação agendada.
          Esta documentação cobre a plataforma de ponta a ponta — do primeiro
          projeto à integração com a API.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            render={<Link to="/quickstart" />}
            className="no-underline hover:no-underline"
          >
            Começar em 5 minutos
            <ArrowRight />
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<Link to="/api/" />}
            className="no-underline hover:no-underline"
          >
            Referência da API
          </Button>
        </div>
        <p className="mt-8 font-mono text-xs text-muted-foreground">
          1 crédito = 1 minuto de vídeo processado · plano Free inclui 30
          créditos por mês
        </p>
      </div>
    </header>
  );
}

function Stats() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-border md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 py-8">
            <p className="font-heading text-3xl font-bold text-foreground">
              {stat.value}
            </p>
            <p className="mt-1 text-sm leading-snug text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Sections() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-comet">
          Explore a documentação
        </p>
        <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Tudo o que a plataforma faz, explicado em detalhe.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.title}
              to={section.link}
              className="group no-underline hover:no-underline"
            >
              <Card className="h-full transition-colors group-hover:border-ring">
                <CardHeader>
                  <section.icon className="mb-2 size-5 text-comet" />
                  <CardTitle className="font-heading text-base text-foreground">
                    {section.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {section.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="border-t border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-comet">
          Como funciona
        </p>
        <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Do link ao post em três passos.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <p className="font-mono text-sm text-comet">{step.number}</p>
              <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
            Comece pelo seu primeiro projeto.
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            O guia de início rápido leva menos de cinco minutos e não exige
            cartão de crédito.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <Button
            render={<Link to="/quickstart" />}
            className="no-underline hover:no-underline"
          >
            Início rápido
          </Button>
          <Button
            variant="outline"
            render={
              <a href="https://app.sleepcomet.com" target="_blank" rel="noopener noreferrer" />
            }
            className="no-underline hover:no-underline"
          >
            Abrir o app
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Documentação" description={siteConfig.tagline}>
      <main className="bg-background text-foreground">
        <Hero />
        <Stats />
        <Sections />
        <HowItWorks />
        <FinalCta />
      </main>
    </Layout>
  );
}
