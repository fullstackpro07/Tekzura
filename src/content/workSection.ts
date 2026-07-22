import type { PortfolioCategoryId, PortfolioEntry } from './portfolio';
import {
  portfolioEntries,
  portfolioStats,
} from './portfolio';

export type WorkSectionCategoryId =
  | 'digital-marketing'
  | 'web-development'
  | 'saas-products'
  | 'shopify'
  | 'wordpress';

export interface ShowcaseProject {
  id: string;
  projectName: string;
  type: string;
  websiteUrl: string;
  industry: string;
  serviceCategory: string;
}

export interface ShowcaseCategoryView {
  title: string;
  description: string;
  accent: string;
}

export interface WorkSectionCategory {
  id: WorkSectionCategoryId;
  title: string;
  description: string;
  accent: string;
  clientIds: PortfolioCategoryId[];
}

export const workSectionCategories: WorkSectionCategory[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Social media, community, campaign, and brand-channel work across Facebook, Instagram, and LinkedIn.',
    accent: '#f79009',
    clientIds: ['digital-marketing'],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Public websites, product interfaces, and customer-facing web experiences built for credibility and conversion.',
    accent: '#155eef',
    clientIds: ['web-development'],
  },
  {
    id: 'saas-products',
    title: 'SaaS Products',
    description: 'Subscription products and software platforms designed around repeatable digital workflows.',
    accent: '#7f56d9',
    clientIds: ['saas-products'],
  },
  {
    id: 'shopify',
    title: 'Shopify',
    description: 'Commerce storefronts spanning consumer products, lifestyle brands, electronics, food, and wellness.',
    accent: '#0f9f8f',
    clientIds: ['shopify'],
  },
  {
    id: 'wordpress',
    title: 'WordPress',
    description: 'Content, corporate, commerce, agency, creator, healthcare, and real-estate WordPress experiences.',
    accent: '#2e90fa',
    clientIds: ['wordpress'],
  },
];

const legacyCategoryMap: Record<string, WorkSectionCategoryId> = {
  'product-web-app': 'web-development',
  'product-saas': 'saas-products',
  'product-website': 'web-development',
};

export const workSectionStats = {
  total: portfolioStats.entries,
  serviceAreas: workSectionCategories.length,
  industries: new Set(portfolioEntries.map((entry) => entry.industry)).size,
};

export function portfolioEntryToShowcase(entry: PortfolioEntry, serviceCategory: string): ShowcaseProject {
  return {
    id: entry.url,
    projectName: entry.title,
    type: entry.platform,
    websiteUrl: entry.url,
    industry: entry.industry,
    serviceCategory,
  };
}

export function resolveWorkSectionCategoryId(value: string | null): WorkSectionCategoryId {
  if (value && workSectionCategories.some((category) => category.id === value)) {
    return value as WorkSectionCategoryId;
  }
  if (value && legacyCategoryMap[value]) {
    return legacyCategoryMap[value];
  }
  return workSectionCategories[0].id;
}

export function getShowcaseCategoryView(categoryId: WorkSectionCategoryId): ShowcaseCategoryView {
  const category = workSectionCategories.find((item) => item.id === categoryId)!;
  return {
    title: category.title,
    description: category.description,
    accent: category.accent,
  };
}

export function getShowcaseProjects(categoryId: WorkSectionCategoryId): ShowcaseProject[] {
  const category = workSectionCategories.find((item) => item.id === categoryId)!;
  const clientProjects = category.clientIds.flatMap((clientId) =>
    portfolioEntries
      .filter((entry) => entry.category === clientId)
      .map((entry) => portfolioEntryToShowcase(entry, category.title)),
  );

  const seen = new Set<string>();
  return clientProjects.filter((project) => {
    const key = project.websiteUrl.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function countWorkSectionCategory(categoryId: WorkSectionCategoryId) {
  return getShowcaseProjects(categoryId).length;
}
