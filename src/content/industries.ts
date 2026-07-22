import {
  Briefcase,
  Car,
  Cpu,
  GraduationCap,
  HardHat,
  HeartPulse,
  House,
  Megaphone,
  Plane,
  ShoppingBag,
  UtensilsCrossed,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { portfolioCategories, portfolioEntries } from './portfolio';
import { portfolioEntryToShowcase, type ShowcaseProject } from './workSection';
import { type ServiceSlug } from './site';

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface IndustryGroup {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  overview: string;
  deliverables: string[];
  whyUs: string[];
  relatedServiceSlugs: ServiceSlug[];
  faq: IndustryFaq[];
}

const industryGroups: IndustryGroup[] = [
  {
    id: 'ecommerce-retail',
    title: 'E-commerce & Retail',
    description: 'Fashion, beauty, home goods, and general retail storefronts built to convert.',
    icon: ShoppingBag,
    accent: '#f79009',
    keywords: ['retail', 'fashion', 'apparel', 'footwear', 'beauty', 'crafts', 'shapewear', 'home goods', 'electronics', 'audio', 'bbq', 'pet care', 'grooming', 'herbal', 'tea /', 'supplements', 'fitness /', 'e-commerce platform', 'fragrance'],
    metaTitle: 'E-commerce & Retail Web Development and Marketing',
    metaDescription: 'caldeforge builds Shopify stores, retail websites, and performance marketing for fashion, beauty, home goods, and general retail brands. See our e-commerce work and process.',
    heroDescription: 'We build storefronts and run the marketing behind them — for fashion, beauty, home goods, and retail brands that need every visitor to have a reason to buy.',
    overview: 'Retail and e-commerce brands live or die on conversion rate, page speed, and repeat purchase behavior. We build Shopify and custom storefronts with fast checkout flows, product pages that answer objections before they are asked, and analytics wired in from day one — then pair the build with paid and organic marketing so the store has demand to convert.',
    deliverables: [
      'Shopify and custom storefront builds with conversion-focused product and checkout pages',
      'Product photography-ready design systems and on-brand graphic design for campaigns',
      'Paid social and search campaigns tied to revenue, not just clicks',
      'Post-launch iteration on pricing pages, upsells, and abandoned-cart flows',
    ],
    whyUs: [
      'We treat the storefront and the marketing as one system, not two separate vendors',
      'Every build ships with analytics and conversion tracking configured, not bolted on later',
      'We stay past launch to test and improve — retail results compound over iterations',
    ],
    relatedServiceSlugs: ['shopify', 'digital-marketing', 'graphic-design', 'full-stack-dev'],
    faq: [
      {
        question: 'Do you work with Shopify or custom-built stores?',
        answer: 'Both. Most retail brands are best served by Shopify for speed and reliability, but we build custom storefronts when a brand needs functionality Shopify cannot cleanly support.',
      },
      {
        question: 'Can you take over marketing for an existing store?',
        answer: 'Yes. We regularly step into stores we did not build to run digital marketing, fix conversion issues, and add missing analytics.',
      },
    ],
  },
  {
    id: 'construction-home',
    title: 'Construction & Home Services',
    description: 'Contractors, tradespeople, and home-service businesses that need to be found and trusted.',
    icon: HardHat,
    accent: '#b54708',
    keywords: ['construction', 'home improvement', 'building solutions', 'engineering', 'home services', 'pest control'],
    metaTitle: 'Web Development & Marketing for Construction and Home Services',
    metaDescription: 'caldeforge builds websites and runs local marketing for construction firms, contractors, and home-service businesses. See our work in the trades and how we deliver it.',
    heroDescription: 'Contractors and home-service businesses win jobs on trust and speed of response. We build websites and marketing that make both obvious in the first ten seconds.',
    overview: 'A construction or home-services website has one job: convince a homeowner or project manager to pick up the phone. We build sites structured around service areas, past project proof, and clear calls to action, then run local and search marketing so the right jobs come in — not just traffic.',
    deliverables: [
      'Service-area websites built to rank for local search and convert calls and quote requests',
      'Project galleries and case studies that prove capability without a sales call',
      'WordPress or custom builds depending on how much the internal team needs to self-manage',
      'Local and paid search campaigns targeting the specific jobs worth winning',
    ],
    whyUs: [
      'We design for how homeowners and property managers actually decide, not how it looks in a portfolio',
      'Sites are built to be maintained by the business, not to require a developer for every text change',
      'We measure success in booked jobs, not vanity traffic',
    ],
    relatedServiceSlugs: ['full-stack-dev', 'wordpress', 'digital-marketing'],
    faq: [
      {
        question: 'Can you build a site that shows service areas and past projects?',
        answer: 'Yes — service-area pages and project galleries are standard parts of any construction or home-services build we deliver.',
      },
      {
        question: 'Will we be able to update the site ourselves?',
        answer: 'For most trades businesses we build on WordPress specifically so your team can edit projects, pricing, and pages without calling a developer.',
      },
    ],
  },
  {
    id: 'food-beverage',
    title: 'Food & Beverage',
    description: 'Restaurants, bakeries, and food brands turning appetite into orders.',
    icon: UtensilsCrossed,
    accent: '#e04f5f',
    keywords: ['food', 'baking'],
    metaTitle: 'Web Development & Marketing for Restaurants and Food Brands',
    metaDescription: 'caldeforge builds ordering-ready websites and runs social and marketing for restaurants, bakeries, and food brands. See our food and beverage work.',
    heroDescription: 'Menus, ordering, and appetite appeal — built and marketed so a hungry visitor becomes a paying customer in a couple of taps.',
    overview: 'Food and beverage businesses convert on appetite and friction, not features. We build sites and ordering flows that load fast on mobile, present the menu clearly, and get out of the way between craving and checkout, then run the social presence that keeps the brand top of mind between visits.',
    deliverables: [
      'Mobile-first menu and ordering experiences with minimal checkout friction',
      'Shopify or WordPress builds for brands selling packaged food and beverage products',
      'Social content and campaign management for restaurants and food brands',
      'Location, hours, and delivery-partner integrations kept accurate and current',
    ],
    whyUs: [
      'We design every food site mobile-first, because that is where the ordering decision actually happens',
      'We understand the difference between a restaurant site and a packaged-goods storefront and build accordingly',
      'Ongoing social management keeps the brand visible between visits, not just at launch',
    ],
    relatedServiceSlugs: ['wordpress', 'shopify', 'digital-marketing', 'graphic-design'],
    faq: [
      {
        question: 'Can you integrate online ordering or delivery platforms?',
        answer: 'Yes, we integrate with common ordering and delivery providers as part of the build, or link out cleanly where a full integration is not the right fit.',
      },
      {
        question: 'Do you handle the social media as well as the website?',
        answer: 'Yes — digital marketing and content for food brands is one of our core services, and we can run it alongside or independently of a website build.',
      },
    ],
  },
  {
    id: 'health-wellness',
    title: 'Health, Fitness & Wellness',
    description: 'Fitness, recovery, and wellness brands built on trust and clarity.',
    icon: HeartPulse,
    accent: '#0f9f8f',
    keywords: ['health', 'fitness', 'wellness', 'recovery', 'hair care'],
    metaTitle: 'Web Development & Marketing for Health and Wellness Brands',
    metaDescription: 'caldeforge builds websites and marketing for fitness, recovery, and wellness brands. See our health and wellness work and how we approach the industry.',
    heroDescription: 'Health and wellness buyers need clarity and trust before commitment. We build sites and campaigns that earn both without overselling.',
    overview: 'Wellness and fitness brands sell an outcome, not a product, which makes clarity and credibility the whole job. We build sites that explain the offer plainly, present proof (results, credentials, testimonials) prominently, and support booking or purchase without unnecessary steps, backed by marketing that reaches the right audience honestly.',
    deliverables: [
      'Booking-ready websites for studios, clinics, and wellness practitioners',
      'Product and program pages that explain outcomes clearly, without overclaiming',
      'Digital marketing campaigns targeted to the specific audience segment that converts',
      'Customer support workflows for member or client inquiries',
    ],
    whyUs: [
      'We prioritize clarity over hype — wellness buyers are wary of overpromising, and so are we',
      'Booking and inquiry flows are built to remove friction, not add another form to abandon',
      'We can support the full journey from first visit to ongoing customer support',
    ],
    relatedServiceSlugs: ['full-stack-dev', 'wordpress', 'digital-marketing', 'customer-support'],
    faq: [
      {
        question: 'Can you add booking or scheduling to the site?',
        answer: 'Yes, we integrate booking and scheduling tools appropriate to the practice, from simple calendar embeds to fuller booking systems.',
      },
      {
        question: 'Do you write the health or wellness content yourselves?',
        answer: 'We draft SEO-aware copy in collaboration with your team, since claims in this space need to come from people with the right expertise to stand behind them.',
      },
    ],
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Agents, brokerages, and property firms presenting listings with confidence.',
    icon: House,
    accent: '#155eef',
    keywords: ['real estate'],
    metaTitle: 'Web Development & Marketing for Real Estate Agents and Brokerages',
    metaDescription: 'caldeforge builds listing-ready websites and marketing for real estate agents, brokerages, and property firms. See our real estate work and delivery process.',
    heroDescription: 'Listings, agent credibility, and lead capture — built into one site that works as hard as the agent does.',
    overview: 'A real estate site needs to make listings easy to browse, the agent or brokerage easy to trust, and inquiries easy to send. We build listing-driven sites with clean property pages and lead capture built in, then run marketing that puts new listings and the brand in front of the right local audience.',
    deliverables: [
      'Listing-driven websites with searchable property pages and inquiry capture',
      'Agent and brokerage brand sites built for local search visibility',
      'Digital marketing campaigns for new listings, open houses, and brand awareness',
      'CRM and lead-routing integrations so no inquiry gets missed',
    ],
    whyUs: [
      'We build listing pages that present property details cleanly, not as an afterthought template',
      'Lead capture is wired to notify agents immediately, because real estate leads go cold fast',
      'We understand the local-search dynamics that make or break agent visibility',
    ],
    relatedServiceSlugs: ['full-stack-dev', 'wordpress', 'digital-marketing'],
    faq: [
      {
        question: 'Can the site pull listings automatically from an MLS or feed?',
        answer: 'Where a feed or API is available we integrate it; otherwise we build a listing management system your team can update directly.',
      },
      {
        question: 'Do you build for individual agents or full brokerages?',
        answer: 'Both — the scope and site structure differ, but the goal of turning listing views into inquiries stays the same.',
      },
    ],
  },
  {
    id: 'education-training',
    title: 'Education & Training',
    description: 'Schools, institutes, and EdTech platforms built for enrollment and outcomes.',
    icon: GraduationCap,
    accent: '#2e90fa',
    keywords: ['education', 'edtech', 'training', 'school'],
    metaTitle: 'Web Development & Marketing for Schools, Institutes and EdTech',
    metaDescription: 'caldeforge builds enrollment-ready websites and platforms for schools, training institutes, and EdTech products. See our education work and process.',
    heroDescription: 'Enrollment, course discovery, and student trust — built into websites and platforms that turn interest into signups.',
    overview: 'Education and training businesses need to move a prospective student from curiosity to enrollment, often across multiple visits. We build course-discovery pages, enrollment flows, and — for EdTech products — the underlying platform, then automate the follow-up sequences that turn an inquiry into a signed-up student.',
    deliverables: [
      'Course and program pages built around clear outcomes and enrollment paths',
      'Custom-built platforms for EdTech products, from MVP to scaled application',
      'Marketing automation for enrollment nurture sequences and application follow-up',
      'Support workflows for prospective and current student inquiries',
    ],
    whyUs: [
      'We build for the full enrollment funnel, not just a marketing page that stops at "contact us"',
      'Automation keeps prospective students warm between the first visit and the enrollment deadline',
      'We have delivered both marketing sites and full EdTech products, so we can scope either honestly',
    ],
    relatedServiceSlugs: ['full-stack-dev', 'wordpress', 'marketing-automation', 'customer-support'],
    faq: [
      {
        question: 'Can you build the platform, not just the marketing site?',
        answer: 'Yes — our full-stack development service covers EdTech platforms, learning portals, and application systems, not only the public-facing site.',
      },
      {
        question: 'Do you set up automated enrollment follow-up?',
        answer: 'Yes, marketing automation for application and enrollment nurture sequences is a standard part of what we deliver for education clients.',
      },
    ],
  },
  {
    id: 'technology-saas',
    title: 'Technology & SaaS',
    description: 'Software platforms, developer tools, and AI products built to scale.',
    icon: Cpu,
    accent: '#7f56d9',
    keywords: ['software development', 'ai tools', 'hosting', 'creator tools', 'cloud', 'developer tools', 'saas', 'hr tech', 'mobile application', 'wordpress themes'],
    metaTitle: 'Full-Stack Development for SaaS and Technology Products',
    metaDescription: 'caldeforge builds SaaS platforms, developer tools, and AI products end to end — from MVP to scaled application. See our technology work and delivery process.',
    heroDescription: 'MVP to scaled product — we build the software, not just the marketing site around it.',
    overview: 'SaaS and technology products live and die on execution speed and product quality. We build MVPs and scaled platforms with React, Node.js, and modern infrastructure, own the architecture decisions, and keep iterating post-launch as usage and requirements evolve — with marketing automation and support tooling layered in as the product grows.',
    deliverables: [
      'MVP and full-platform development in React, TypeScript, Node.js, and PostgreSQL',
      'API design, integrations, and infrastructure set up to scale without a rebuild',
      'Marketing automation and lifecycle email for trial and onboarding funnels',
      'Customer support tooling and workflows for growing user bases',
    ],
    whyUs: [
      'We build products, not just landing pages describing products',
      'Architecture decisions are made for where the product is going, not just the first release',
      'We stay engaged post-launch — SaaS products need continuous iteration, not a one-time delivery',
    ],
    relatedServiceSlugs: ['full-stack-dev', 'marketing-automation', 'customer-support'],
    faq: [
      {
        question: 'Do you build MVPs from scratch or only extend existing products?',
        answer: 'Both. We regularly take a product from a first idea through to a working MVP, and we also join existing codebases to extend or rebuild specific parts.',
      },
      {
        question: 'What is your stack for SaaS products?',
        answer: 'Typically React and TypeScript on the frontend, Node.js on the backend, and PostgreSQL for data, chosen for maintainability and hiring flexibility — adjusted case by case.',
      },
    ],
  },
  {
    id: 'marketing-creative',
    title: 'Marketing, Media & Creative',
    description: 'Agencies, creators, and brands building audiences and visibility.',
    icon: Megaphone,
    accent: '#d6409f',
    keywords: ['marketing', 'branding', 'design', 'blogging', 'self improvement', 'wordpress / business', 'media'],
    metaTitle: 'Digital Marketing, Design and Video for Media and Creative Brands',
    metaDescription: 'caldeforge delivers digital marketing, graphic design, and YouTube automation for agencies, creators, and media brands. See our marketing and creative work.',
    heroDescription: 'Audience growth, brand identity, and content that compounds — for agencies, creators, and media brands.',
    overview: 'Marketing, media, and creator businesses need output that is both fast and on-brand, across channels. We run campaign management, design systems, and video/content production so a brand shows up consistently everywhere it needs to — without every asset going through a bottleneck.',
    deliverables: [
      'Brand identity and ongoing graphic design for campaigns and social content',
      'Digital marketing and paid campaign management across social and search',
      'YouTube automation and channel growth systems for creators and media brands',
      'Website builds for agencies and brands that need a credible home base',
    ],
    whyUs: [
      'Design, video, and marketing come from one team working from the same brand brief',
      'We build repeatable systems for content output, not one-off campaigns that stall',
      'We have run channel growth work specifically for YouTube, not just generic social posting',
    ],
    relatedServiceSlugs: ['digital-marketing', 'graphic-design', 'youtube-automation', 'marketing-automation'],
    faq: [
      {
        question: 'Can you manage our brand across multiple channels consistently?',
        answer: 'Yes — that consistency is the point of pairing design and marketing under one team rather than separate vendors.',
      },
      {
        question: 'Do you work with individual creators, not just agencies?',
        answer: 'Yes, YouTube automation and content systems are built for individual creators and media brands alike.',
      },
    ],
  },
  {
    id: 'professional-services',
    title: 'Professional & Business Services',
    description: 'Recruitment, consulting, fintech, and B2B service providers.',
    icon: Briefcase,
    accent: '#667085',
    keywords: ['hr &', 'hiring', 'consultancy', 'consulting', 'trading education', 'trade body', 'web development', 'web maintenance', 'fintech', 'forex'],
    metaTitle: 'Web Development & Marketing for Consulting and Professional Services',
    metaDescription: 'caldeforge builds websites, platforms, and marketing for recruitment, consulting, fintech, and B2B service firms. See our professional services work.',
    heroDescription: 'Credibility, lead qualification, and clear positioning — built for firms whose next client finds them through research, not impulse.',
    overview: 'Professional and B2B service buyers research before they ever reach out, so the site has to establish credibility and pre-qualify the inquiry before a conversation starts. We build sites and, where needed, internal platforms that present expertise clearly and route serious inquiries efficiently, backed by marketing automation that nurtures longer B2B sales cycles.',
    deliverables: [
      'Credibility-first websites for consultancies, recruiters, and B2B service firms',
      'Custom platforms and internal tools for fintech and operations-heavy businesses',
      'Marketing automation for lead nurture across longer B2B sales cycles',
      'Support workflows for client and candidate inquiries',
    ],
    whyUs: [
      'We understand B2B buying is slower and more research-driven, and design accordingly',
      'We can build the marketing site and the internal platform, so nothing falls between two vendors',
      'Automation is set up to keep long sales cycles warm without manual follow-up',
    ],
    relatedServiceSlugs: ['full-stack-dev', 'wordpress', 'marketing-automation', 'customer-support'],
    faq: [
      {
        question: 'Can you build internal tools alongside the public website?',
        answer: 'Yes — full-stack development covers internal platforms and operational tools, which we frequently deliver alongside the client-facing site.',
      },
      {
        question: 'How do you handle longer B2B sales cycles in marketing?',
        answer: 'We set up nurture automation and lead scoring so prospects stay engaged between the first inquiry and the eventual buying decision.',
      },
    ],
  },
  {
    id: 'travel-hospitality',
    title: 'Travel, Hospitality & Events',
    description: 'Hotels, venues, and event organizers built around bookings and turnout.',
    icon: Plane,
    accent: '#ef6820',
    keywords: ['hotel', 'travel', 'trade shows', 'attractions', 'transportation'],
    metaTitle: 'Web Development & Marketing for Hotels, Venues and Events',
    metaDescription: 'caldeforge builds booking-ready websites and marketing for hotels, venues, and event organizers. See our travel and hospitality work.',
    heroDescription: 'Bookings and turnout are the whole game — we build sites and campaigns aimed directly at both.',
    overview: 'Hospitality and events businesses succeed on booking conversion and turnout, which depend on visual presentation, trust signals, and timely marketing. We build booking-ready sites with strong visual storytelling and run the campaigns that drive awareness ahead of key dates.',
    deliverables: [
      'Booking-ready websites for hotels, venues, and travel businesses',
      'Event and trade-show marketing campaigns timed to drive turnout',
      'Visual design and content built to sell the experience, not just list features',
      'Customer support workflows for booking and guest inquiries',
    ],
    whyUs: [
      'We design for the emotional decision hospitality buyers are making, not just a feature list',
      'Campaign timing is built around actual event and booking dates, not a generic content calendar',
      'We can support guest and attendee inquiries end to end, not only the marketing push',
    ],
    relatedServiceSlugs: ['wordpress', 'digital-marketing', 'customer-support'],
    faq: [
      {
        question: 'Can you integrate booking or reservation systems?',
        answer: 'Yes, we integrate with common booking and reservation platforms as part of the site build.',
      },
      {
        question: 'Do you handle time-sensitive event marketing?',
        answer: 'Yes — event and trade-show marketing is built around your actual dates, with campaigns timed to drive turnout when it matters.',
      },
    ],
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description: 'Repair shops, detailers, and automotive lifestyle brands.',
    icon: Car,
    accent: '#12b76a',
    keywords: ['auto', 'automotive', 'trucking'],
    metaTitle: 'Web Development & Marketing for Automotive Businesses',
    metaDescription: 'caldeforge builds websites, online stores, and local marketing for repair shops, detailers, and automotive lifestyle brands. See our automotive work.',
    heroDescription: 'Local trust and parts or service discovery — built into sites and marketing tuned for the automotive buyer.',
    overview: 'Automotive businesses range from local service shops to lifestyle product brands, and each needs a different build: service shops need local trust and easy booking, product brands need a storefront that handles fitment and specs clearly. We build both, and run the local or performance marketing that brings customers in.',
    deliverables: [
      'Local-service websites for repair shops and detailers built for calls and bookings',
      'Shopify or WordPress storefronts for automotive parts and lifestyle brands',
      'Local search and paid marketing tuned to automotive buyer intent',
      'Content and design that presents technical products clearly',
    ],
    whyUs: [
      'We tailor the build to whether the business sells a service or a product — the sites are not the same',
      'Local search visibility is treated as core to the build, not an add-on',
      'We present technical specs and fitment information in a way buyers can actually use',
    ],
    relatedServiceSlugs: ['wordpress', 'shopify', 'digital-marketing'],
    faq: [
      {
        question: 'Do you build sites for repair shops as well as parts retailers?',
        answer: 'Yes — the structure differs (booking-focused versus storefront-focused) and we scope each one accordingly.',
      },
      {
        question: 'Can you help with local search visibility for a shop?',
        answer: 'Yes, local search and paid marketing tuned to nearby buyer intent is part of our digital marketing service for automotive clients.',
      },
    ],
  },
  {
    id: 'community-lifestyle',
    title: 'Community & Lifestyle',
    description: 'Coworking spaces, community initiatives, and lifestyle brands.',
    icon: Users,
    accent: '#84cc16',
    keywords: ['coworking', 'community', 'productivity', 'lifestyle'],
    metaTitle: 'Web Development & Marketing for Coworking and Community Brands',
    metaDescription: 'caldeforge builds websites and marketing for coworking spaces, community initiatives, and lifestyle brands. See our community and lifestyle work.',
    heroDescription: 'Membership, community trust, and brand identity — built for spaces and initiatives that grow through word of mouth and visibility.',
    overview: 'Coworking spaces and community-driven brands grow through visibility and trust as much as advertising. We build sites that make membership or participation an easy decision, and run the social presence that keeps a community engaged between events or sign-up cycles.',
    deliverables: [
      'Membership and community websites with clear sign-up and inquiry paths',
      'Brand identity and graphic design for community and lifestyle brands',
      'Ongoing social media management to keep a community engaged',
      'WordPress builds the internal team can update without a developer',
    ],
    whyUs: [
      'We build sites that make joining or participating a low-friction decision',
      'Design and social content come from the same team, so the brand stays consistent',
      'We keep the build maintainable by non-technical community teams',
    ],
    relatedServiceSlugs: ['wordpress', 'digital-marketing', 'graphic-design'],
    faq: [
      {
        question: 'Can you manage ongoing social content, not just build the site?',
        answer: 'Yes — digital marketing and content management for community brands is something we run on an ongoing basis, not just at launch.',
      },
      {
        question: 'Do you build membership or sign-up systems?',
        answer: 'Yes, we build membership and inquiry flows suited to the platform, from simple forms to fuller account-based systems.',
      },
    ],
  },
];

export interface IndustrySummary extends IndustryGroup {
  projectCount: number;
  exampleClients: string[];
  projects: ShowcaseProject[];
}

function matchesGroup(industry: string, group: IndustryGroup) {
  const lower = industry.toLowerCase();
  return group.keywords.some((keyword) => lower.includes(keyword));
}

function categoryTitle(categoryId: string) {
  return portfolioCategories.find((category) => category.id === categoryId)?.title ?? categoryId;
}

export const industrySummaries: IndustrySummary[] = industryGroups
  .map((group) => {
    const matches = portfolioEntries.filter((entry) => matchesGroup(entry.industry, group));
    const exampleClients = [...new Set(matches.map((entry) => entry.title))].slice(0, 4);
    const seenUrls = new Set<string>();
    const projects = matches
      .map((entry) => portfolioEntryToShowcase(entry, categoryTitle(entry.category)))
      .filter((project) => {
        const key = project.websiteUrl.toLowerCase();
        if (seenUrls.has(key)) return false;
        seenUrls.add(key);
        return true;
      });
    return {
      ...group,
      projectCount: matches.length,
      exampleClients,
      projects,
    };
  })
  .filter((group) => group.projectCount > 0)
  .sort((a, b) => b.projectCount - a.projectCount);

export function getIndustryBySlug(slug: string | undefined) {
  return industrySummaries.find((industry) => industry.id === slug);
}

export const industriesStats = {
  totalIndustries: industrySummaries.length,
  totalProjects: portfolioEntries.length,
};
