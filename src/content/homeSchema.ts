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
  {
    question: 'What is your approach to MVP development?',
    answer: 'We focus on rapid prototyping and iterative development to get your product to market quickly while ensuring it meets user needs and business goals.',
  },
];

export const homePageTitle = 'caldeforge |  Where strategy meets execution & ideas become assets.';
export const homePageDescription =
  'caldeforge is a full-stack development and AI growth studio building websites, apps, automation, and marketing systems that turn ideas into scalable products.';
export const homePageH1 = 'Where strategy meets execution — and ideas become assets.';

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
