import { useEffect, useRef } from 'react';
import { useConsent } from '../../lib/consent';
import ConsentPlaceholder from './ConsentPlaceholder';
import { SectionHeading } from './PageElements';

const TRUSTINDEX_SRC = 'https://cdn.trustindex.io/loader.js?b47c894777b6754692463e28cda';
const TRUSTINDEX_SCRIPT_ID = 'trustindex-reviews-loader';

export default function TrustindexReviewsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const allowed = useConsent('functional');

  useEffect(() => {
    const container = containerRef.current;
    if (!allowed || !container || container.querySelector(`#${TRUSTINDEX_SCRIPT_ID}`)) return;

    const script = document.createElement('script');
    script.id = TRUSTINDEX_SCRIPT_ID;
    script.src = TRUSTINDEX_SRC;
    script.defer = true;
    script.async = true;
    container.appendChild(script);
  }, [allowed]);

  return (
    <section className="section section-soft reviews-section" id="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <SectionHeading
          eyebrow=""
          title="Verified reviews from across the web"
          description="Live ratings and feedback pulled straight from our review profiles, updated automatically as new reviews come in."
          align="center"
        />
        {allowed ? <div className="reviews-widget" ref={containerRef} /> : <ConsentPlaceholder label="Our reviews widget" />}
      </div>
    </section>
  );
}
