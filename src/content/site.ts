import {
  Bot,
  Braces,
  ChartNoAxesCombined,
  Database,
  Globe2,
  Megaphone,
  ShoppingBag,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ServiceSlug =
  | 'web-development'
  | 'ecommerce'
  | 'digital-marketing'
  | 'wordpress'
  | 'automation-ai'
  | 'lead-generation'
  | 'data-entry';

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  problem: string;
  outcome: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  deliverables: string[];
  technologies: string[];
  process: string[];
  faq: { question: string; answer: string }[];
}

export interface CaseStudy {
  title: string;
  industry: string;
  service: ServiceSlug;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  width?: number;
  height?: number;
  bio: string;
  linkedinUrl?: string;
  group?: 'Leadership' | 'Engineering & Product' | 'Growth & Creative' | 'Operations & Client Success';
  gender?: 'male' | 'female';
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  country: string;
  image?: string;
}

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
}

export const siteConfig = {
  name: 'Tekzura',
  email: 'info@tekzura.com',
  phone: '+92 326 9379244',
  phoneHref: '+923269379244',
  address: 'Bahawalpur, Pakistan',
  calendly: 'https://calendly.com/yasirmalik2182/new-meeting',
  description:
    'Tekzura builds high-performing websites, e-commerce experiences, automation systems, and growth programs for ambitious businesses.',
};

const sharedFaq = [
  {
    question: 'How does a project begin?',
    answer:
      'We start with a focused discovery call, confirm goals and constraints, then provide a practical scope with milestones.',
  },
  {
    question: 'Can you work with an existing product or team?',
    answer:
      'Yes. We can improve an existing platform, deliver a defined workstream, or collaborate with your internal team.',
  },
  {
    question: 'How do you keep delivery transparent?',
    answer:
      'Projects use clear milestones, regular progress updates, shared priorities, and review points before major releases.',
  },
];

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    shortTitle: 'Web Development',
    eyebrow: 'Fast, scalable digital products',
    summary:
      'Responsive websites and web applications designed around usability, performance, and measurable business goals.',
    problem:
      'Slow, difficult-to-maintain websites lose trust, weaken search visibility, and make every campaign less effective.',
    outcome:
      'A dependable web experience that is easy to use, straightforward to maintain, and ready to grow with your business.',
    icon: Braces,
    image: '/service-web-development.jpg',
    imageAlt: 'Product engineering team reviewing a responsive web application across desktop and mobile screens',
    deliverables: ['Product discovery', 'UX and interface design', 'Frontend and backend development', 'Quality assurance', 'Deployment support'],
    technologies: ['React', 'TypeScript', 'Node.js', 'WordPress', 'Cloud platforms'],
    process: ['Discover', 'Design', 'Build', 'Validate', 'Launch'],
    faq: sharedFaq,
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce Solutions',
    shortTitle: 'E-Commerce',
    eyebrow: 'Turn product interest into revenue',
    summary:
      'Conversion-minded storefronts with clear merchandising, smooth checkout flows, and reliable integrations.',
    problem:
      'Complex navigation, slow product pages, and checkout friction cause customers to abandon purchases.',
    outcome:
      'A faster shopping experience that makes products easier to discover and purchasing easier to complete.',
    icon: ShoppingBag,
    image: '/case-ecommerce.jpg',
    imageAlt: 'Modern e-commerce storefront displayed across laptop and mobile screens',
    deliverables: ['Store strategy', 'Catalog and navigation design', 'Storefront development', 'Payments and integrations', 'Analytics setup'],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'React', 'Analytics'],
    process: ['Audit', 'Plan', 'Design', 'Integrate', 'Optimize'],
    faq: sharedFaq,
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    eyebrow: 'Focused campaigns, clearer decisions',
    summary:
      'Search, content, and paid campaigns built around relevant audiences and useful performance reporting.',
    problem:
      'Disconnected campaigns and unclear reporting make it difficult to know what is working or where to invest.',
    outcome:
      'A coordinated growth program with clear priorities, consistent execution, and practical reporting.',
    icon: Megaphone,
    image: '/service-growth.jpg',
    imageAlt: 'Growth strategists reviewing a campaign funnel and performance dashboard',
    deliverables: ['Channel strategy', 'Campaign planning', 'Content direction', 'SEO and paid media', 'Performance reporting'],
    technologies: ['Google Ads', 'Meta Ads', 'GA4', 'Search Console', 'CRM tools'],
    process: ['Research', 'Position', 'Launch', 'Measure', 'Improve'],
    faq: sharedFaq,
  },
  {
    slug: 'wordpress',
    title: 'WordPress Development',
    shortTitle: 'WordPress',
    eyebrow: 'Flexible publishing without the clutter',
    summary:
      'Custom WordPress websites that give teams practical editing tools without compromising performance.',
    problem:
      'Template-heavy WordPress builds often become slow, insecure, and frustrating for content teams.',
    outcome:
      'A tailored, maintainable website with a clear editing experience and disciplined plugin use.',
    icon: Globe2,
    image: '/service-web-development.jpg',
    imageAlt: 'Development team reviewing a maintainable publishing interface and responsive website',
    deliverables: ['Content architecture', 'Custom theme development', 'Block editor setup', 'Plugin integration', 'Performance hardening'],
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'ACF', 'Cloudflare'],
    process: ['Structure', 'Prototype', 'Develop', 'Migrate', 'Train'],
    faq: sharedFaq,
  },
  {
    slug: 'automation-ai',
    title: 'Automation & AI',
    shortTitle: 'Automation & AI',
    eyebrow: 'Remove repetitive work',
    summary:
      'Practical automation and AI workflows that reduce manual tasks, connect systems, and support faster decisions.',
    problem:
      'Repeated data entry and fragmented tools consume time that should be spent serving customers and growing the business.',
    outcome:
      'Reliable workflows that reduce handoffs, improve consistency, and give teams more time for valuable work.',
    icon: Bot,
    image: '/case-automation.jpg',
    imageAlt: 'Automation operations dashboard showing connected workflows and business systems',
    deliverables: ['Workflow audit', 'Automation design', 'AI-assisted tools', 'System integrations', 'Monitoring and handover'],
    technologies: ['Python', 'OpenAI APIs', 'Zapier', 'Make', 'CRM platforms'],
    process: ['Map', 'Prioritize', 'Prototype', 'Integrate', 'Monitor'],
    faq: sharedFaq,
  },
  {
    slug: 'lead-generation',
    title: 'Lead Generation',
    shortTitle: 'Lead Generation',
    eyebrow: 'Build a healthier sales pipeline',
    summary:
      'Targeted outreach systems and landing experiences designed to start relevant business conversations.',
    problem:
      'Broad outreach and generic messaging create low-quality conversations and waste sales capacity.',
    outcome:
      'A more focused acquisition system with clearer targeting, better messaging, and organized follow-up.',
    icon: ChartNoAxesCombined,
    image: '/service-growth.jpg',
    imageAlt: 'B2B growth team reviewing lead generation performance and CRM pipeline data',
    deliverables: ['Audience research', 'Offer positioning', 'Landing pages', 'Outreach workflows', 'Pipeline reporting'],
    technologies: ['CRM tools', 'Email platforms', 'LinkedIn', 'Analytics', 'Automation'],
    process: ['Define', 'Research', 'Build', 'Engage', 'Refine'],
    faq: sharedFaq,
  },
  {
    slug: 'data-entry',
    title: 'Data Entry Services',
    shortTitle: 'Data Operations',
    eyebrow: 'Accurate data, dependable operations',
    summary:
      'Structured data support for teams that need reliable records, organized catalogs, and consistent back-office execution.',
    problem:
      'Incomplete or inconsistent records create errors across reporting, customer service, and daily operations.',
    outcome:
      'Clean, organized information delivered through a documented process with quality checks.',
    icon: Database,
    image: '/service-data-operations.jpg',
    imageAlt: 'Data operations specialist validating organized product and CRM records',
    deliverables: ['Data collection', 'Data cleanup', 'Catalog management', 'CRM updates', 'Quality assurance'],
    technologies: ['Spreadsheets', 'CRM platforms', 'CMS tools', 'Data validation', 'Reporting'],
    process: ['Define', 'Prepare', 'Process', 'Review', 'Deliver'],
    faq: sharedFaq,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: 'Modern E-Commerce Experience',
    industry: 'Retail',
    service: 'ecommerce',
    challenge: 'A growing retailer needed a clearer mobile shopping journey and a storefront that was easier to manage.',
    solution: 'We reorganized product discovery, simplified key purchase steps, and created a maintainable commerce foundation.',
    outcome: 'A faster, easier-to-navigate experience prepared for ongoing merchandising and campaign work.',
    tags: ['Commerce', 'UX', 'Performance'],
    image: '/case-ecommerce.jpg',
    imageAlt: 'E-commerce experience displayed across desktop and mobile devices',
  },
  {
    title: 'Operations Automation Program',
    industry: 'Professional Services',
    service: 'automation-ai',
    challenge: 'Routine handoffs and repeated data entry were slowing customer response times.',
    solution: 'We mapped the workflow, connected the core tools, and automated repetitive status and data tasks.',
    outcome: 'A clearer operating process with fewer manual steps and better visibility for the team.',
    tags: ['Automation', 'Integrations', 'Operations'],
    image: '/case-automation.jpg',
    imageAlt: 'Business automation command center with connected workflow dashboards',
  },
  {
    title: 'Lead Generation Foundation',
    industry: 'B2B Services',
    service: 'lead-generation',
    challenge: 'The sales team needed a more focused way to identify and engage relevant prospects.',
    solution: 'We refined the offer, created campaign landing content, and organized outreach and follow-up workflows.',
    outcome: 'A repeatable acquisition process built around relevant conversations instead of volume alone.',
    tags: ['Growth', 'Campaigns', 'CRM'],
    image: '/service-growth.jpg',
    imageAlt: 'Growth strategy session with a lead funnel and campaign analytics',
  },
  {
    title: 'Service Business Website Rebuild',
    industry: 'Technology',
    service: 'web-development',
    challenge: 'An outdated website made the company’s expertise difficult to understand and slowed content updates.',
    solution: 'We introduced a clearer information architecture, reusable page system, and performance-focused frontend.',
    outcome: 'A credible sales website that communicates services quickly and supports future content growth.',
    tags: ['Web', 'Content', 'Conversion'],
    image: '/service-web-development.jpg',
    imageAlt: 'Product engineering team reviewing a modern responsive web platform',
  },
];

export const team: TeamMember[] = [
  {
    name: 'Muhammad Yasir',
    role: 'Founder & CEO',
    image: '/yasir.jpg',
    width: 793,
    height: 1024,
    bio: 'Leads strategy, client partnerships, and Tekzuraâ€™s focus on practical digital outcomes.',
    linkedinUrl: 'https://www.linkedin.com/in/muhammad-yasir-954a99389',
    group: 'Leadership',
    gender: 'male',
  },
  {
    name: 'Muhammad Abdullah Awais',
    role: 'MEAN Stack Developer',
    image: '/team/muhammad-abdullah-awais.webp',
    width: 720,
    height: 840,
    bio: 'Builds scalable, secure web applications across frontend, backend APIs, databases, cloud deployment, and SaaS subscription systems.',
    linkedinUrl: 'https://www.linkedin.com/in/m-abdullah-awais-programmer',
    group: 'Engineering & Product',
    gender: 'male',
  },

  {
    name: 'Muhammad Danial Malik',
    role: 'Full-Stack Web Developer',
    image: '/team/muhammad-danial-malik.webp',
    width: 720,
    height: 840,
    bio: 'Converts Figma designs into dynamic, responsive web applications and delivers MERN projects from concept through deployment.',
    linkedinUrl: 'https://www.linkedin.com/in/muhammad-danial-malik',
    group: 'Engineering & Product',
    gender: 'male',
  },
  {
    name: 'Waleed Amin',
    role: 'Frontend Engineer',
    image: '/team/waleed-amin.webp',
    width: 720,
    height: 840,
    bio: 'Builds scalable, responsive web applications with React, JavaScript, Django integrations, Supabase, Firebase, payment gateways, and API-driven workflows.',
    linkedinUrl: 'https://www.linkedin.com/in/waleedamin',
    group: 'Engineering & Product',
    gender: 'male',
  },
  {
    name: 'Zohaib Zulfiqar',
    role: 'Web & Frontend Developer',
    image: '/team/zohaib-zulfiqar.webp',
    width: 720,
    height: 840,
    bio: 'Builds responsive, performance-optimized frontend interfaces with a focus on usability, accessibility, SEO-aware structure, and maintainable code.',
    linkedinUrl: 'https://www.linkedin.com/in/zohaib-zulfiqar-web-developer',
    group: 'Engineering & Product',
    gender: 'male',
  },
  {
    name: 'Muhammad Umer',
    role: 'Full Stack Developer',
    image: '/team/muhammad-umer.webp',
    width: 720,
    height: 840,
    bio: 'Develops full-stack web and app products with experience across frontend development, responsive interfaces, and eCommerce projects.',
    linkedinUrl: 'https://www.linkedin.com/in/muhammad-umer-203b0b337',
    group: 'Engineering & Product',
    gender: 'male',
  },
  {
    name: 'Abdul Rehman',
    role: 'Full Stack MERN & PERN Developer',
    image: '/team/abdul-rehman.webp',
    width: 720,
    height: 840,
    bio: 'Builds SaaS products, AI-powered applications, and modern web experiences using MERN, Next.js, TypeScript, Supabase, and AI APIs.',
    linkedinUrl: 'https://www.linkedin.com/in/abdul-rehman4002',
    group: 'Engineering & Product',
    gender: 'male',
  },
  
  {
    name: 'Maria Asghar',
    role: 'Software Developer',
    bio: 'Develops full-stack web applications with MERN, Next.js, PostgreSQL, SQL, React, and modern developer workflows.',
    linkedinUrl: 'https://www.linkedin.com/in/iammariaasghar',
    group: 'Engineering & Product',
    gender: 'female',
  },
  {
    name: 'Faizan Haider',
    role: 'Machine Learning Engineer ',
    bio: 'Builds applied AI and machine learning systems, from preprocessing and model evaluation to FastAPI deployment and LLM-powered workflows.',
    linkedinUrl: 'https://www.linkedin.com/in/m-faizan-haider',
    group: 'Engineering & Product',
    gender: 'male',
  },
  {
    name: 'Mohammad Sajjad',
    role: 'Social Media Manager',
    image: '/team/mohammad-sajjad.webp',
    width: 720,
    height: 840,
    bio: 'Supports businesses with virtual assistance, social media management, influencer outreach, CRM organization, lead follow-up, and daily operations.',
    linkedinUrl: 'https://www.linkedin.com/in/mohammad-sajjad-59281b3a0',
    group: 'Growth & Creative',
    gender: 'male',
  },
  {
    name: 'Humaira Malik',
    role: 'Digital Marketer',
    bio: 'Works across digital marketing, SEO, and digital media, with experience managing marketing work at Hello World Technologies.',
    linkedinUrl: 'https://www.linkedin.com/in/humaira-malik-0b2b55374',
    group: 'Growth & Creative',
    gender: 'female',
  },
  {
    name: 'Lubaba Muaaz',
    role: 'Digital Marketing',
    image: '/team/lubaba-muaaz.webp',
    width: 720,
    height: 840,
    bio: 'Plans and optimizes digital marketing work across Meta ads, content strategy, SEO, local search, and social media growth.',
    linkedinUrl: 'https://www.linkedin.com/in/lubaba-muaaz-b78b35409',
    group: 'Growth & Creative',
    gender: 'female',
  },
  {
    name: 'Nimrah Ashiq Hussain',
    role: 'Content Writer',
    bio: 'Supports content writing and social media management, with experience across financial administration, social media work, and education.',
    linkedinUrl: 'https://www.linkedin.com/in/nimrah-ashiq-hussain-a73694365',
    group: 'Growth & Creative',
    gender: 'female',
  },
  {
    name: 'Sana Nawaz',
    role: 'Graphic Designer',
    bio: 'Creates brand visuals, posts, magazine covers, and marketing graphics using Adobe Photoshop, Adobe Illustrator, and Figma.',
    linkedinUrl: 'https://www.linkedin.com/in/sana-nawaz-130066266',
    group: 'Growth & Creative',
    gender: 'female',
  },
  {
    name: 'Muhammad Rashid',
    role: 'Research Assistant',
    image: '/team/muhammad-rashid.webp',
    width: 720,
    height: 840,
    bio: 'Supports research, data analysis, business analysis, and administrative workflows with a background in information technology.',
    linkedinUrl: 'https://www.linkedin.com/in/muhammad-rashid-941865397',
    group: 'Operations & Client Success',
    gender: 'male',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Khalid Almubarak',
    role: 'CEO',
    country: 'Bahrain',
    image: '/testimonials/khalid-almubarak.jpg',
    quote: 'Great job completing a second iteration and upgrade of our initial project. The process was smooth, efficient, and professionally managed throughout.',
  },
  {
    name: 'Fernando Escaffi',
    role: 'Owner & CEO',
    country: 'USA',
    image: '/testimonials/fernando-escaffi.jpg',
    quote: 'They did an excellent job setting up our automation workflows and continue to help us improve and expand them. Their expertise, attention to detail, and commitment to delivering results have been impressive. Highly recommended.',
  },
  {
    name: 'Ruth Marshall',
    role: 'Owner',
    country: 'USA',
    image: '/testimonials/ruth-marshall.jpg',
    quote: 'Excellent collaboration throughout the project. Demonstrated strong expertise, clear communication, and a commitment to achieving the best possible outcome.',
  },
  {
    name: 'David Ranalli',
    role: 'Founder',
    country: 'USA',
    image: '/testimonials/david-ranalli.jpg',
    quote: 'An exceptional experience from start to finish. A critical website issue was identified and resolved efficiently, minimizing downtime and ensuring business continuity. Professional, responsive, and highly reliable.',
  },
  {
    name: 'Kevin Duncan',
    role: 'CTO',
    country: 'USA',
    image: '/testimonials/kevin-duncan.jpg',
    quote: 'Exceptional development skills combined with clear communication and professionalism. High-quality work was delivered on time, with a strong focus on scalability and security.',
  },
  {
    name: 'Chris Berry',
    role: 'CEO',
    country: 'USA',
    quote: 'Outstanding work on our SaaS MVP project. The team quickly understood the requirements and delivered a scalable, production-ready solution with excellent attention to detail.',
  },
  {
    name: 'Jamie El Kaleh',
    role: 'Founder',
    country: 'United Kingdom',
    quote: 'A seamless and stress-free experience. The team took the time to understand our vision and delivered a website that perfectly reflected our brand while providing an exceptional user experience.',
  },
  {
    name: 'Ama Elizabeth',
    role: 'Product Owner',
    country: 'Canada',
    quote: 'Delivered outstanding work and exceeded expectations. The frontend was modern, fully responsive, and built with exceptional attention to detail and performance.',
  },
  {
    name: 'Charles',
    role: 'Business Owner',
    country: 'USA',
    quote: 'Resolved critical issues quickly and efficiently. Communication was clear throughout the project, and the technical quality of the work was outstanding.',
  },
  {
    name: 'Pedro Marcelino',
    role: 'Owner & Pastry Chef',
    country: 'New Zealand',
    image: '/testimonials/pedro-marcelino.jpg',
    quote: 'Reliable, proactive, and highly skilled. Consistently delivered quality work while maintaining excellent communication and a solutions-focused approach.',
  },
  {
    name: 'Rick Bowal',
    role: 'Real Estate Agent',
    country: 'Canada',
    image: '/testimonials/rick-bowal.jpg',
    quote: 'Over the course of four months, the team consistently delivered exceptional results on a complex API integration and data scraping project. Their technical expertise, problem-solving abilities, and attention to detail were evident throughout the engagement. They successfully handled evolving requirements, optimized data collection processes, and ensured the accuracy and reliability of the extracted data. Communication was always prompt and professional, and every milestone was delivered on schedule. Their ability to tackle technical challenges and provide scalable solutions made them a valuable partner.',
  },
  {
    name: 'Martin Tuks',
    role: 'Owner',
    country: 'USA',
    quote: 'We needed reliable data extraction from multiple sources, and the results exceeded our expectations. The scraping infrastructure was efficient, accurate, and scalable. Communication was excellent, and every deliverable was completed on schedule.',
  },
  {
    name: 'Jennifer Arteta',
    role: 'Founder & CEO',
    country: 'USA',
    image: '/testimonials/jennifer-arteta.jpg',
    quote: 'Over several months of collaboration, the team consistently demonstrated professionalism, technical excellence, and strong problem-solving skills. They handled complex data challenges with ease and became a trusted extension of our internal team.',
  },
  {
    name: 'Jennifer Roberts',
    role: 'Managing Director',
    country: 'Canada',
    image: '/testimonials/jennifer-roberts.jpg',
    quote: 'The data scraping and automation solutions exceeded our expectations. Complex workflows were streamlined into efficient systems that saved significant time and resources. Professional, knowledgeable, and results-oriented throughout the engagement.',
  },
  {
    name: 'David Thompson',
    role: 'Founder',
    country: 'USA',
    image: '/testimonials/david-thompson.jpg',
    quote: 'An outstanding experience from start to finish. Every milestone was delivered on time, and the quality of execution was exceptional. Their technical expertise and commitment to excellence made them a valuable extension of our team.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Product Manager',
    country: 'USA',
    image: '/testimonials/sarah-mitchell.jpg',
    quote: 'The team demonstrated deep technical knowledge and a remarkable ability to solve complex challenges. Their proactive communication and attention to detail ensured the project ran smoothly from beginning to end.',
  },
  {
    name: 'Robert Williams',
    role: 'VP of Engineering',
    country: 'USA',
    image: '/testimonials/robert-williams.jpg',
    quote: "One of the most professional development teams we've worked with. They handled sophisticated API integrations, optimized system performance, and consistently delivered solutions that exceeded expectations.",
  },
  {
    name: 'Shenika Pinckney',
    role: 'Founder',
    country: 'USA',
    image: '/testimonials/shenika-pinckney.jpg',
    quote: 'The collaboration was smooth and professional from start to finish. Communication was clear, requirements were well understood, and the final delivery aligned perfectly with expectations. The work was completed on time with strong attention to detail and quality. Highly recommended for anyone looking for reliable and skilled execution.',
  },
  {
    name: 'Thomas Swanson',
    role: 'Vice President of Commerce',
    country: 'USA',
    image: '/testimonials/thomas-swanson.jpg',
    quote: 'The team delivered a highly professional and well-executed solution. Their communication was clear throughout the project, and they demonstrated strong technical understanding and attention to detail. The final results aligned perfectly with our expectations, and the overall collaboration was smooth and efficient.',
  },
  {
    name: 'Lucas Van Haaften',
    role: 'Founder',
    country: 'Netherlands',
    image: '/testimonials/lucas-van-haaften.jpg',
    quote: 'It was amazing.',
  },
  {
    name: 'Gisela Pleite',
    role: 'Owner',
    country: 'Netherlands',
    quote: 'Did an excellent job redesigning our Shopify store and improving our overall brand presentation. Professional, responsive, and detail-oriented throughout the project. Communication was smooth, and every deliverable was completed on time. I would definitely recommend working with them again.',
  },
  {
    name: 'Warren Kiru',
    role: 'E-commerce Owner',
    country: 'USA',
    quote: 'Delivered highly effective Google Ads optimization, combining strong strategic insight with precise execution. Their work significantly improved our campaign performance and overall business results. Highly recommended.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'The Future of AI in Business Automation',
    category: 'AI & Automation',
    date: '2024-12-10',
    readTime: '5 min',
    excerpt: 'Where AI-assisted workflows create useful leverage, and how to start with the right operational problem.',
    tags: ['AI', 'Automation', 'Operations'],
    image: '/case-automation.jpg',
    imageAlt: 'Automation dashboard showing connected operational workflows',
  },
  {
    title: 'Building Scalable Web Applications',
    category: 'Web Development',
    date: '2024-12-08',
    readTime: '7 min',
    excerpt: 'A practical look at architecture, performance, deployment, and maintainability for growing products.',
    tags: ['Web', 'Architecture', 'Performance'],
    image: '/service-web-development.jpg',
    imageAlt: 'Development team working across application architecture, code, and interface design',
  },
  {
    title: 'Mobile-First Design: Why It Matters',
    category: 'Design',
    date: '2024-12-05',
    readTime: '4 min',
    excerpt: 'How prioritizing small screens improves content decisions, usability, and conversion paths.',
    tags: ['Design', 'Mobile', 'UX'],
    image: '/case-ecommerce.jpg',
    imageAlt: 'Mobile-first commerce interface shown on desktop and smartphone screens',
  },
  {
    title: 'Maximizing ROI with Data-Driven Marketing',
    category: 'Marketing',
    date: '2024-12-03',
    readTime: '6 min',
    excerpt: 'Use measurement to focus campaign decisions, improve targeting, and invest in channels with purpose.',
    tags: ['Marketing', 'Analytics', 'Growth'],
    image: '/service-growth.jpg',
    imageAlt: 'Marketing team reviewing campaign performance and conversion funnel data',
  },
  {
    title: 'Cloud Infrastructure: A Practical Guide',
    category: 'Infrastructure',
    date: '2024-11-30',
    readTime: '8 min',
    excerpt: 'The core scalability, reliability, security, and cost questions to answer before choosing a platform.',
    tags: ['Cloud', 'DevOps', 'Infrastructure'],
    image: '/service-data-operations.jpg',
    imageAlt: 'Data specialist reviewing structured records and quality reporting',
  },
  {
    title: 'The Power of Progressive Web Apps',
    category: 'Technology',
    date: '2024-11-28',
    readTime: '5 min',
    excerpt: 'When an installable web experience can deliver mobile value without the overhead of separate native apps.',
    tags: ['PWA', 'Web', 'Mobile'],
    image: '/service-web-development.jpg',
    imageAlt: 'Responsive web product under review across desktop and mobile screens',
  },
];
