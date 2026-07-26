import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from './PageElements';

const TRUSTINDEX_SRC = 'https://cdn.trustindex.io/loader-feed.js?c60deed77fee753a8686777d4b8';
const TRUSTINDEX_SCRIPT_ID = 'trustindex-facebook-feed-loader';
const POSTS_PER_PAGE = 4;

export default function FacebookFeedWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function updatePageCount() {
      const items = container!.querySelectorAll('.ti-layout-item').length;
      setPageCount(Math.max(1, Math.ceil(items / POSTS_PER_PAGE)));
    }

    updatePageCount();
    const observer = new MutationObserver(updatePageCount);
    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setPage((current) => Math.min(current, pageCount - 1));
  }, [pageCount]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = container.querySelectorAll<HTMLElement>('.ti-layout-item');
    items.forEach((item, index) => {
      item.style.display = Math.floor(index / POSTS_PER_PAGE) === page ? '' : 'none';
    });
  }, [page, pageCount]);

  return (
    <section className="section section-soft facebook-feed-section" id="facebook-feed" aria-labelledby="facebook-feed-title">
      <div className="container">
        <SectionHeading
          eyebrow=""
          title="Follow our latest updates on Facebook"
          description="Real-time posts and highlights straight from the calderforge Facebook page."
          align="center"
        />
        <div className="facebook-feed-widget" ref={containerRef} />
        {pageCount > 1 && (
          <div className="facebook-feed-pagination">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(0, current - 1))}
              disabled={page === 0}
              aria-label="Previous posts"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <span>{page + 1} / {pageCount}</span>
            <button
              type="button"
              onClick={() => setPage((current) => Math.min(pageCount - 1, current + 1))}
              disabled={page === pageCount - 1}
              aria-label="Next posts"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
