import { useMemo } from 'react';
import { ArrowRight, BriefcaseBusiness, SlidersHorizontal } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { CaseStudyCard, PageHero } from '../components/site/PageElements';
import { PortfolioDashboard, PortfolioLinkCard } from '../components/site/PortfolioDashboard';
import Seo from '../components/site/Seo';
import { caseStudies } from '../content/site';
import {
  portfolioCategories,
  portfolioEntries,
  portfolioStats,
  type PortfolioCategoryId,
} from '../content/portfolio';

export default function WorkPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get('category') as PortfolioCategoryId | null;
  const activeCategory = portfolioCategories.some((category) => category.id === requestedCategory)
    ? requestedCategory!
    : portfolioCategories[0].id;
  const active = portfolioCategories.find((category) => category.id === activeCategory)!;
  const categoryEntries = useMemo(
    () => portfolioEntries.filter((entry) => entry.category === activeCategory),
    [activeCategory],
  );
  const filters = useMemo(
    () => ['All', ...new Set(categoryEntries.map((entry) => entry.subcategory || entry.platform))],
    [categoryEntries],
  );
  const requestedFilter = searchParams.get('filter');
  const activeFilter = requestedFilter && filters.includes(requestedFilter) ? requestedFilter : 'All';
  const filteredEntries = activeFilter === 'All'
    ? categoryEntries
    : categoryEntries.filter((entry) => (entry.subcategory || entry.platform) === activeFilter);

  function selectCategory(category: PortfolioCategoryId) {
    setSearchParams({ category });
  }

  function selectFilter(filter: string) {
    setSearchParams(filter === 'All' ? { category: activeCategory } : { category: activeCategory, filter });
  }

  function moveCategory(currentIndex: number, direction: number) {
    const nextIndex = (currentIndex + direction + portfolioCategories.length) % portfolioCategories.length;
    const next = portfolioCategories[nextIndex];
    selectCategory(next.id);
    document.getElementById(`portfolio-tab-${next.id}`)?.focus();
  }

  return (
    <>
      <Seo
        title="Work"
        description="Explore Tekzura projects across digital marketing, web development, SaaS, Shopify, and WordPress."
        path="/work"
      />
      <PageHero
        eyebrow="Portfolio"
        title="A connected view of the work we have delivered."
        description={`Explore ${portfolioStats.entries}+ projects and digital channels through interactive service dashboards, then visit the live work directly.`}
        theme="dark"
      >
        <a className="button button-primary" href="#portfolio-explorer">Explore the portfolio <ArrowRight aria-hidden="true" /></a>
      </PageHero>
      <section className="section portfolio-section" id="portfolio-explorer">
        <div className="container">
          <div className="work-intro">
            <div>
              <p className="eyebrow">Service portfolio</p>
              <h2>Witness the impact of our work across various industries and markets.</h2>
            </div>
            <p>Each Story tells a unique tale of how we've helped clients achieve their goals.</p>
          </div>

          <div className="portfolio-category-tabs" role="tablist" aria-label="Portfolio service categories">
            {portfolioCategories.map((category, index) => {
              const count = portfolioEntries.filter((entry) => entry.category === category.id).length;
              return (
                <button
                  key={category.id}
                  id={`portfolio-tab-${category.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  aria-controls="portfolio-category-panel"
                  tabIndex={activeCategory === category.id ? 0 : -1}
                  onClick={() => selectCategory(category.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                      event.preventDefault();
                      moveCategory(index, 1);
                    }
                    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                      event.preventDefault();
                      moveCategory(index, -1);
                    }
                    if (event.key === 'Home') {
                      event.preventDefault();
                      selectCategory(portfolioCategories[0].id);
                      document.getElementById(`portfolio-tab-${portfolioCategories[0].id}`)?.focus();
                    }
                    if (event.key === 'End') {
                      event.preventDefault();
                      const last = portfolioCategories.at(-1)!;
                      selectCategory(last.id);
                      document.getElementById(`portfolio-tab-${last.id}`)?.focus();
                    }
                  }}
                  style={{ '--category-accent': category.accent } as React.CSSProperties}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{category.title}</strong>
                  <small>{count} projects</small>
                </button>
              );
            })}
          </div>

          <div
            className="portfolio-category-panel"
            id="portfolio-category-panel"
            role="tabpanel"
            aria-labelledby={`portfolio-tab-${activeCategory}`}
            key={activeCategory}
          >
            <div className="portfolio-category-copy">
              <span>{categoryEntries.length} delivered projects</span>
              <h2>{active.title}</h2>
              <p>{active.description}</p>
              <div>
                {filters.filter((filter) => filter !== 'All').slice(0, 4).map((filter) => <small key={filter}>{filter}</small>)}
              </div>
            </div>
            <PortfolioDashboard category={active} entries={categoryEntries} />
          </div>

          <div className="work-toolbar portfolio-toolbar">
            <div className="work-filter-group">
              <span className="work-filter-label"><SlidersHorizontal aria-hidden="true" /> Filter {active.title}</span>
              <div className="filter-bar" aria-label={`Filter ${active.title} projects`}>
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={activeFilter === filter ? 'active' : ''}
                    aria-pressed={activeFilter === filter}
                    onClick={() => selectFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <p className="results-count" aria-live="polite"><BriefcaseBusiness aria-hidden="true" /> {filteredEntries.length} {filteredEntries.length === 1 ? 'project' : 'projects'} showcased</p>
          </div>

          <div className="portfolio-link-grid filter-results" key={`${activeCategory}-${activeFilter}`}>
            {filteredEntries.map((entry, index) => <PortfolioLinkCard key={`${entry.category}-${entry.url}`} entry={entry} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section section-soft delivery-stories">
        <div className="container">
          <div className="work-intro">
            <div><p className="eyebrow">Featured delivery stories</p><h2>A closer look at the operating challenge behind the work.</h2></div>
            <p>These representative engagements add context around the problem, delivery approach, and intended outcome.</p>
          </div>
          <div className="case-grid">
            {caseStudies.map((item, index) => <CaseStudyCard key={item.title} item={item} index={index} expandable={false} />)}
          </div>
        </div>
      </section>
    </>
  );
}
