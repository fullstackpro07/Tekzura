import { ArrowRight, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { industriesStats, industrySummaries } from '../../content/industries';

interface IndustriesDropdownProps {
  onNavigate?: () => void;
}

export default function IndustriesDropdown({ onNavigate }: IndustriesDropdownProps) {
  return (
    <div className="industries-dropdown">
      <div className="industries-dropdown-top">
        <p className="services-dropdown-label">
          {industriesStats.totalIndustries} industries &middot; {industriesStats.totalProjects}+ delivered projects
        </p>
        <div className="industries-dropdown-grid">
          {industrySummaries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.id}
                className="industries-dropdown-card"
                to={`/industries/${industry.id}`}
                onClick={onNavigate}
              >
                <span className="industries-dropdown-card-icon"><Icon aria-hidden="true" /></span>
                <span className="industries-dropdown-card-body">
                  <strong>{industry.title}</strong>
                  <small>{industry.projectCount} projects delivered</small>
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="services-dropdown-bottom">
        <div className="services-dropdown-bottom-copy">
          <LayoutGrid aria-hidden="true" />
          <p>
            Not sure where your business fits? <strong>Browse every industry we've delivered for.</strong>
          </p>
        </div>
        <Link className="button button-primary services-dropdown-cta" to="/industries" onClick={onNavigate}>
          View all industries <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
