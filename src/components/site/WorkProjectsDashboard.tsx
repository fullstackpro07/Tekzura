import { BarChart3, Cloud, Globe2, Layers3, Link2, TrendingUp } from 'lucide-react';
import type { ShowcaseCategoryView, ShowcaseProject } from '../../content/workSection';
import { WorkProjectCard } from './WorkProjectCard';

function projectMetrics(projects: ShowcaseProject[]) {
  const industries = new Set(projects.map((project) => project.industry)).size;
  const categories = new Set(projects.map((project) => project.serviceCategory)).size;
  const types = new Set(projects.map((project) => project.type)).size;
  return { industries, categories, types };
}

function DashboardVisual({
  category,
  projects,
}: {
  category: ShowcaseCategoryView;
  projects: ShowcaseProject[];
}) {
  const { industries, types } = projectMetrics(projects);
  const Icon = category.title.includes('SaaS') ? Cloud : category.title.includes('Web') ? Layers3 : Link2;

  return (
    <div className="work-projects-visual" role="img" aria-label={`${category.title} portfolio dashboard`}>
      <div className="work-projects-visual-head">
        <div>

          <strong>{category.title} dashboard</strong>
        </div>

      </div>

      <div className="work-projects-metrics">
        <article>
          <Icon aria-hidden="true" />
          <b>{projects.length}</b>
          <small>Projects</small>
        </article>
        <article>
          <BarChart3 aria-hidden="true" />
          <b>{industries}</b>
          <small>Segments</small>
        </article>
        <article>
          <TrendingUp aria-hidden="true" />
          <b>{types}</b>
          <small>Platforms</small>
        </article>
        <article>
          <Globe2 aria-hidden="true" />
          <b>Public</b>
          <small>Live links</small>
        </article>
      </div>

      <div className="work-dashboard-card-grid" aria-label={`Interactive ${category.title} project cards`}>
        {projects.map((project, index) => (
          <WorkProjectCard key={project.id} project={project} index={index} variant="compact" />
        ))}
      </div>
    </div>
  );
}

export function WorkProjectsDashboard({
  category,
  projects,
}: {
  category: ShowcaseCategoryView;
  projects: ShowcaseProject[];
}) {
  const topTags = [...new Set(projects.map((project) => project.industry))].slice(0, 5);

  return (
    <div className="work-category-panel">
      <div className="work-category-copy">
        <span>{projects.length} delivered projects</span>
        <h2>{category.title}</h2>
        <p>{category.description}</p>
        <div>
          {topTags.map((tag) => (
            <small key={tag}>{tag}</small>
          ))}
        </div>
      </div>
      <DashboardVisual category={category} projects={projects} />
    </div>
  );
}
