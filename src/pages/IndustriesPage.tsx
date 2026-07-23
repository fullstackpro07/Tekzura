import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConversionCTA from '../components/site/ConversionCTA';
import { PageHero, SectionHeading } from '../components/site/PageElements';
import Seo from '../components/site/Seo';
import { industriesStats, industrySummaries } from '../content/industries';

export default function IndustriesPage() {
  return (
    <>
      <Seo
        title="Industries"
        description={`calderforge has delivered ${industriesStats.totalProjects}+ projects across ${industriesStats.totalIndustries} industries — e-commerce, construction, education, healthcare, real estate, SaaS, and more.`}
        path="/industries"
      />
      <PageHero
        eyebrow=""
        title="Industries we've built for."
        description={`From ${industriesStats.totalProjects}+ delivered projects across ${industriesStats.totalIndustries} industries, we bring pattern-matched experience to every new engagement — not a first attempt.`}
        theme="dark"
      >
        <Link className="button button-primary" to="/work">
          See the project list
        </Link>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow=""
            title="A sector-by-sector look at our delivery history."
            description="Every industry below is backed by real, live client work — click through to the Work page to verify any of it."
            align="center"
          />
          <div className="service-grid industry-grid">
            {industrySummaries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link className="service-card industry-card" key={industry.id} to={`/industries/${industry.id}`}>
                  <div className="industry-card-head">
                    <div className="industry-card-icon"><Icon aria-hidden="true" /></div>
                    <span className="industry-card-count">{industry.projectCount} projects</span>
                  </div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  {industry.exampleClients.length > 0 && (
                    <div className="industry-card-examples">
                      {industry.exampleClients.map((client) => (
                        <span key={client}>{client}</span>
                      ))}
                    </div>
                  )}
                  <span className="industry-card-link">See how we work in {industry.title.toLowerCase()} <ArrowRight aria-hidden="true" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ConversionCTA
        eyebrow="Don't see your industry?"
        title="We adapt fast to new sectors too."
        description="Every industry above started with a first project. Tell us about your business and we'll show you how the same process applies."
        bullets={['Discovery call', 'Fit assessment', 'Clear next step']}
      />
    </>
  );
}
