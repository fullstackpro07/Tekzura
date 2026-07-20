import { services, siteConfig } from './site';

export const homeFaqs = [
  {
    question: 'How quickly can a project start?',
    answer: 'After a focused discovery call, we confirm the scope, delivery team, milestones, and earliest practical start date.',
  },
  {
    question: 'Can caldeforge work with our existing team and systems?',
    answer: 'Yes. We can own a defined workstream or collaborate with internal product, marketing, and operations teams using your existing tools.',
  },
  {
    question: 'How do you keep delivery transparent?',
    answer: 'You receive visible priorities, reviewable milestones, regular progress updates, and clear decisions before major implementation work moves forward.',
  },
  {
    question: 'What happens after launch?',
    answer: 'We provide handover guidance and can continue through maintenance, optimization, campaign support, or the next prioritized product phase.',
  },
];

export const homePageTitle = 'caldeforge | Full Stack Development, AI & Digital Growth Agency';
export const homePageDescription =
  'caldeforge helps businesses build modern websites, AI solutions, Shopify stores, WordPress platforms, and digital marketing systems that drive growth.';
export const homePageH1 = 'Full Stack Development & Digital Growth Solutions for Modern Businesses';

export function buildHomeSchema() {
  const organizationId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        logo: `${siteConfig.url}/caldeforge-logo.png`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bahawalpur',
          addressCountry: 'PK',
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: homePageDescription,
        publisher: { '@id': organizationId },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteConfig.url}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteConfig.url,
          },
        ],
      },
      ...services.map((service) => ({
        '@type': 'Service',
        '@id': `${siteConfig.url}/services/${service.slug}#service`,
        name: service.title,
        description: service.summary,
        provider: { '@id': organizationId },
        url: `${siteConfig.url}/services/${service.slug}`,
        areaServed: 'Worldwide',
      })),
      {
        '@type': 'FAQPage',
        '@id': `${siteConfig.url}/#faq`,
        mainEntity: homeFaqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };
}
