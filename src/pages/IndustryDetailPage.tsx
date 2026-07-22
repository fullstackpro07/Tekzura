import { type CSSProperties } from 'react';
import { ArrowRight, ArrowUpRight, CalendarDays } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ConversionCTA from '../components/site/ConversionCTA';
import { SectionHeading } from '../components/site/PageElements';
import { StudioDeliveryProcess } from '../components/site/InteractiveSections';
import Seo from '../components/site/Seo';
import { getIndustryBySlug, industriesStats } from '../content/industries';
import { services, siteConfig } from '../content/site';
import NotFoundPage from './NotFoundPage';

export default function IndustryDetailPage() {
  const { industrySlug } = useParams();
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return <NotFoundPage />;

  const Icon = industry.icon;
  const relatedServices = industry.relatedServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
  const accentStyle = { '--industry-accent': industry.accent } as CSSProperties;

  const organizationId = `${siteConfig.url}/#organization`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${siteConfig.url}/industries/${industry.id}#service`,
        name: `${industry.title} web development and marketing`,
        description: industry.metaDescription,
        provider: { '@id': organizationId },
        areaServed: 'Worldwide',
        url: `${siteConfig.url}/industries/${industry.id}`,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteConfig.url}/industries/${industry.id}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Industries', item: `${siteConfig.url}/industries` },
          { '@type': 'ListItem', position: 3, name: industry.title, item: `${siteConfig.url}/industries/${industry.id}` },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteConfig.url}/industries/${industry.id}#faq`,
        mainEntity: industry.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <Seo title={industry.metaTitle} description={industry.metaDescription} path={`/industries/${industry.id}`} schema={schema} />

      <section className="industry-brief-hero" style={accentStyle}>
        <div className="industry-brief-hero-glow" aria-hidden="true" />
        <div className="container industry-brief-hero-inner">
          <div className="industry-brief-hero-copy">
            <p className="industry-brief-eyebrow">
              <Link to="/industries">Industries</Link> / {industry.title}
            </p>
            <div className="industry-brief-badge"><Icon aria-hidden="true" /></div>
            <h1>{industry.title}</h1>
            <p className="lead">{industry.heroDescription}</p>
            <div className="button-row">
              <a className="button button-primary" href={siteConfig.calendly} target="_blank" rel="noreferrer">
                <CalendarDays aria-hidden="true" /> Book a Growth Strategy Call
              </a>
              <Link className="button button-secondary" to="/work">
                See our work <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="industry-brief-stat-stack">
            <div className="industry-brief-stat">
              <strong>{industry.projectCount}</strong>
              <span>Projects delivered</span>
            </div>
            <div className="industry-brief-stat">
              <strong>{relatedServices.length}</strong>
              <span>Services engaged</span>
            </div>
            <div className="industry-brief-stat">
              <strong>{industriesStats.totalProjects}+</strong>
              <span>Total portfolio</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section industry-brief-overview">
        <div className="container industry-brief-overview-grid" style={accentStyle}>
          <div className="industry-brief-overview-copy">
            <p className="eyebrow">Overview</p>
            <h2>How we approach {industry.title.toLowerCase()}</h2>
            <p>{industry.overview}</p>
            
          </div>
          <ol className="industry-brief-list">
            {industry.deliverables.map((item, index) => (
              <li key={item}>
                <span className="industry-brief-list-index">{String(index + 1).padStart(2, '0')}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-soft industry-brief-reasons" style={accentStyle}>
        <div className="container">
          <SectionHeading
            eyebrow=""
            title={`Why ${industry.title.toLowerCase()} teams choose caldeforge`}
            align="center"
          />
          <div className="industry-reason-grid">
            {industry.whyUs.map((reason, index) => (
              <article className="industry-reason-card" key={reason}>
                <span className="industry-reason-mark">{String(index + 1).padStart(2, '0')}</span>
                <p>{reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow=""
              title="Services we bring to this industry"
              description="Each service below can be scoped standalone or combined into one engagement."
              align="center"
            />
            <div className="industry-service-links">
              {relatedServices.map((service) => (
                <Link key={service.slug} className="industry-service-link" to={`/services/${service.slug}`}>
                  <strong>{service.shortTitle}</strong>
                  <span>{service.eyebrow}</span>
                  <ArrowRight aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <StudioDeliveryProcess
        eyebrow=""
        title={`How we work with ${industry.title.toLowerCase()} businesses`}
        description="The same visible-progress process we run for every engagement, applied to the priorities and pace of this industry."
        className="section-soft"
      />

      <section className="section industry-brief-proof" style={accentStyle}>
        <div className="container industry-brief-proof-inner">
          <div>
            <p className="eyebrow">Proof, not promises</p>
            <h2>{industry.projectCount} live {industry.title.toLowerCase()} projects, verifiable on the Work page.</h2>
            <p>Every project we reference is a real, live client engagement — browse the full portfolio filtered across all sectors we serve.</p>
          </div>
          <Link className="button button-primary" to="/work">
            Explore the Work page <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container faq-layout">
          <SectionHeading eyebrow="" title={`Planning a ${industry.title.toLowerCase()} project`} />
          <div className="faq-list">
            {industry.faq.map((item) => (
              <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
