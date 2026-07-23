import { caseStudies, services, siteConfig, team, testimonials } from './site';
import { insightCaseStudies } from './insights';

// The 9-stage calderforge Product Studio framework (mirrors ProductStudioFramework.tsx).
const productStudioStages = [
  'Idea Validation',
  'Product Strategy',
  'UI/UX Design',
  'Development',
  'Launch',
  'Marketing',
  'User Acquisition',
  'Optimization',
  'Scaling',
];

/**
 * Builds a compact, plain-text knowledge base from the site content so the AI
 * assistant can answer questions about the whole company. Computed once at
 * module load and sent to the /api/chat proxy as context.
 */
function build(): string {
  const sections: string[] = [];

  sections.push(
    `COMPANY: ${siteConfig.name} — ${siteConfig.tagline}.`,
    siteConfig.description,
    `CONTACT: Email ${siteConfig.email}; Phone ${siteConfig.phone}; Location ${siteConfig.address}; Book a call: ${siteConfig.calendly}.`,
    `KEY PAGES: Home (/), Services (/services), Work/portfolio (/work), About (/about), Insights/blog (/blog), Contact (/contact), Start a project (/get-started).`,
  );

  sections.push(
    `PRODUCT STUDIO FRAMEWORK (9 stages we take products through): ${productStudioStages.join(' → ')}.`,
  );

  sections.push('SERVICES:');
  for (const s of services) {
    sections.push(
      `- ${s.title} (page: /services/${s.slug}). ${s.summary} Problem it solves: ${s.problem} Outcome: ${s.outcome} Deliverables: ${s.deliverables.join(', ')}. Technologies: ${s.technologies.join(', ')}. Business impact: ${s.impact}`,
    );
  }

  sections.push('SELECTED WORK / CASE STUDIES:');
  for (const c of caseStudies) {
    sections.push(`- ${c.title} (${c.industry}). Challenge: ${c.challenge} Solution: ${c.solution} Outcome: ${c.outcome}`);
  }

  const roleCounts = team.reduce<Record<string, number>>((acc, m) => {
    const key = m.group || 'Team';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  sections.push('TEAM (answer team questions from this roster; full profiles on /about):');
  sections.push(`Team size: ${team.length}. Groups: ${Object.entries(roleCounts)
    .map(([group, n]) => `${group} (${n})`)
    .join(', ')}.`);
  for (const member of team) {
    const group = member.group || 'Team';
    const bio = member.bio ? ` Bio: ${member.bio}` : '';
    sections.push(`- ${member.name} — ${member.role} (${group}).${bio}`);
  }

  const countries = Array.from(new Set(testimonials.map((t) => t.country))).join(', ');
  sections.push(
    `CLIENTS & PROOF: ${testimonials.length}+ client testimonials from founders, CEOs, and product leaders across ${countries}. calderforge works with international clients and startups.`,
  );

  sections.push('INSIGHTS / CASE STUDIES:');
  for (const study of insightCaseStudies) {
    sections.push(`- ${study.title} (/blog/${study.slug}). ${study.excerpt} Outcome: ${study.outcome}`);
  }

  return sections.join('\n');
}

export const knowledgeBase = build();
