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
import { portfolioEntries } from './portfolio';

export interface IndustryGroup {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  keywords: string[];
}

const industryGroups: IndustryGroup[] = [
  {
    id: 'ecommerce-retail',
    title: 'E-commerce & Retail',
    description: 'Fashion, beauty, home goods, and general retail storefronts built to convert.',
    icon: ShoppingBag,
    keywords: ['retail', 'fashion', 'apparel', 'footwear', 'beauty', 'crafts', 'shapewear', 'home goods', 'electronics', 'audio', 'bbq', 'pet care', 'grooming', 'herbal', 'tea /', 'supplements', 'fitness /', 'e-commerce platform', 'fragrance'],
  },
  {
    id: 'construction-home',
    title: 'Construction & Home Services',
    description: 'Contractors, tradespeople, and home-service businesses that need to be found and trusted.',
    icon: HardHat,
    keywords: ['construction', 'home improvement', 'building solutions', 'engineering', 'home services', 'pest control'],
  },
  {
    id: 'food-beverage',
    title: 'Food & Beverage',
    description: 'Restaurants, bakeries, and food brands turning appetite into orders.',
    icon: UtensilsCrossed,
    keywords: ['food', 'baking'],
  },
  {
    id: 'health-wellness',
    title: 'Health, Fitness & Wellness',
    description: 'Fitness, recovery, and wellness brands built on trust and clarity.',
    icon: HeartPulse,
    keywords: ['health', 'fitness', 'wellness', 'recovery', 'hair care'],
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Agents, brokerages, and property firms presenting listings with confidence.',
    icon: House,
    keywords: ['real estate'],
  },
  {
    id: 'education-training',
    title: 'Education & Training',
    description: 'Schools, institutes, and EdTech platforms built for enrollment and outcomes.',
    icon: GraduationCap,
    keywords: ['education', 'edtech', 'training', 'school'],
  },
  {
    id: 'technology-saas',
    title: 'Technology & SaaS',
    description: 'Software platforms, developer tools, and AI products built to scale.',
    icon: Cpu,
    keywords: ['software development', 'ai tools', 'hosting', 'creator tools', 'cloud', 'developer tools', 'saas', 'hr tech', 'mobile application', 'wordpress themes'],
  },
  {
    id: 'marketing-creative',
    title: 'Marketing, Media & Creative',
    description: 'Agencies, creators, and brands building audiences and visibility.',
    icon: Megaphone,
    keywords: ['marketing', 'branding', 'design', 'blogging', 'self improvement', 'wordpress / business', 'media'],
  },
  {
    id: 'professional-services',
    title: 'Professional & Business Services',
    description: 'Recruitment, consulting, fintech, and B2B service providers.',
    icon: Briefcase,
    keywords: ['hr &', 'hiring', 'consultancy', 'consulting', 'trading education', 'trade body', 'web development', 'web maintenance', 'fintech', 'forex'],
  },
  {
    id: 'travel-hospitality',
    title: 'Travel, Hospitality & Events',
    description: 'Hotels, venues, and event organizers built around bookings and turnout.',
    icon: Plane,
    keywords: ['hotel', 'travel', 'trade shows', 'attractions', 'transportation'],
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description: 'Repair shops, detailers, and automotive lifestyle brands.',
    icon: Car,
    keywords: ['auto', 'automotive', 'trucking'],
  },
  {
    id: 'community-lifestyle',
    title: 'Community & Lifestyle',
    description: 'Coworking spaces, community initiatives, and lifestyle brands.',
    icon: Users,
    keywords: ['coworking', 'community', 'productivity', 'lifestyle'],
  },
];

export interface IndustrySummary extends IndustryGroup {
  projectCount: number;
  exampleClients: string[];
}

function matchesGroup(industry: string, group: IndustryGroup) {
  const lower = industry.toLowerCase();
  return group.keywords.some((keyword) => lower.includes(keyword));
}

export const industrySummaries: IndustrySummary[] = industryGroups
  .map((group) => {
    const matches = portfolioEntries.filter((entry) => matchesGroup(entry.industry, group));
    const exampleClients = [...new Set(matches.map((entry) => entry.title))].slice(0, 4);
    return {
      ...group,
      projectCount: matches.length,
      exampleClients,
    };
  })
  .filter((group) => group.projectCount > 0)
  .sort((a, b) => b.projectCount - a.projectCount);

export const industriesStats = {
  totalIndustries: industrySummaries.length,
  totalProjects: portfolioEntries.length,
};
