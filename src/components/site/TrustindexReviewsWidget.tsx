import { useEffect, useRef } from 'react';
import { SectionHeading } from './PageElements';

const TRUSTINDEX_SRC = 'https://cdn.trustindex.io/loader.js?b47c894777b6754692463e28cda';
const TRUSTINDEX_SCRIPT_ID = 'trustindex-reviews-loader';

export default function TrustindexReviewsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector(`#${TRUSTINDEX_SCRIPT_ID}`)) return;

    const script = document.createElement('script');
    script.id = TRUSTINDEX_SCRIPT_ID;
    script.src = TRUSTINDEX_SRC;
    script.defer = true;
    script.async = true;
    container.appendChild(script);
  }, []);

  return (
    <section className="section section-soft reviews-section" id="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <SectionHeading
          eyebrow=""
          title="Verified reviews from across the web"
          description="Live ratings and feedback pulled straight from our review profiles, updated automatically as new reviews come in."
          align="center"
        />
        <div className="reviews-widget" ref={containerRef} />
      </div>
    </section>
  );
}
