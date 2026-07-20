import { useState } from 'react';
import { services, type ServiceSlug } from '../../content/site';
import { SectionHeading } from './PageElements';

interface Tech {
  name: string;
  /** simpleicons.org slug; omitted when no reliable public logo exists */
  slug?: string;
}

const techByService: Record<ServiceSlug, Tech[]> = {
  'full-stack-dev': [
    { name: 'React', slug: 'react' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'Node.js', slug: 'nodedotjs' },
    { name: 'Next.js', slug: 'nextdotjs' },
    { name: 'PostgreSQL', slug: 'postgresql' },
    { name: 'Docker', slug: 'docker' },
  ],
  wordpress: [
    { name: 'WordPress', slug: 'wordpress' },
    { name: 'WooCommerce', slug: 'woocommerce' },
    { name: 'PHP', slug: 'php' },
    { name: 'Elementor', slug: 'elementor' },
    { name: 'Cloudflare', slug: 'cloudflare' },
  ],
  shopify: [
    { name: 'Shopify', slug: 'shopify' },
    { name: 'Stripe', slug: 'stripe' },
    { name: 'React', slug: 'react' },
    { name: 'Google Analytics', slug: 'googleanalytics' },
  ],
  'digital-marketing': [
    { name: 'Google Ads', slug: 'googleads' },
    { name: 'Meta Ads', slug: 'meta' },
    { name: 'Google Analytics', slug: 'googleanalytics' },
    { name: 'Search Console', slug: 'googlesearchconsole' },
    { name: 'SEMrush', slug: 'semrush' },
  ],
  'youtube-automation': [
    { name: 'YouTube', slug: 'youtube' },
    { name: 'DaVinci Resolve', slug: 'davinciresolve' },
    { name: 'TikTok', slug: 'tiktok' },
    { name: 'Google Analytics', slug: 'googleanalytics' },
  ],
  'marketing-automation': [
    { name: 'HubSpot', slug: 'hubspot' },
    { name: 'Zapier', slug: 'zapier' },
    { name: 'Make', slug: 'make' },
    { name: 'Mailchimp', slug: 'mailchimp' },
    { name: 'Google Analytics', slug: 'googleanalytics' },
  ],
  'graphic-design': [
    { name: 'Figma', slug: 'figma' },
    { name: 'Framer', slug: 'framer' },
    { name: 'Canva' },
  ],
  'customer-support': [
    { name: 'Zendesk', slug: 'zendesk' },
    { name: 'Intercom', slug: 'intercom' },
    { name: 'WhatsApp', slug: 'whatsapp' },
    { name: 'Help Scout', slug: 'helpscout' },
  ],
};

export default function TechStack() {
  const [activeSlug, setActiveSlug] = useState<ServiceSlug>('full-stack-dev');
  const active = services.find((service) => service.slug === activeSlug)!;
  const technologies = techByService[activeSlug];

  function select(slug: ServiceSlug) {
    setActiveSlug(slug);
  }

  function moveTab(currentIndex: number, direction: number) {
    const nextIndex = (currentIndex + direction + services.length) % services.length;
    select(services[nextIndex].slug);
    document.getElementById(`tech-tab-${services[nextIndex].slug}`)?.focus();
  }

  return (
    <section className="section tech-stack-section" id="tech-stack" aria-labelledby="tech-stack-title">
      <div className="container">
        <SectionHeading
          eyebrow=""
          title="Technologies and Platforms We Use"
          description="The tools behind every service we deliver — proven, production-ready, and matched to the job."
          align="center"
        />
        <div className="tech-stack-tabs" role="tablist" aria-label="Service categories">
          {services.map((service, index) => (
            <button
              key={service.slug}
              id={`tech-tab-${service.slug}`}
              type="button"
              role="tab"
              aria-selected={activeSlug === service.slug}
              aria-controls={`tech-panel-${service.slug}`}
              tabIndex={activeSlug === service.slug ? 0 : -1}
              onClick={() => select(service.slug)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowRight') {
                  event.preventDefault();
                  moveTab(index, 1);
                }
                if (event.key === 'ArrowLeft') {
                  event.preventDefault();
                  moveTab(index, -1);
                }
              }}
            >
              {service.shortTitle}
            </button>
          ))}
        </div>
        <div
          className="tech-stack-grid"
          id={`tech-panel-${active.slug}`}
          role="tabpanel"
          aria-labelledby={`tech-tab-${active.slug}`}
        >
          {technologies.map((tech) => (
            <div className="tech-stack-item" key={tech.name}>
              {tech.slug
                ? <img src={`https://cdn.simpleicons.org/${tech.slug}`} alt="" loading="lazy" width={40} height={40} />
                : <span className="tech-stack-monogram" aria-hidden="true">{tech.name[0]}</span>}
              <strong>{tech.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
