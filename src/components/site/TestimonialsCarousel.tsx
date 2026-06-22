import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, UserRound } from 'lucide-react';
import BH from 'country-flag-icons/react/3x2/BH';
import CA from 'country-flag-icons/react/3x2/CA';
import GB from 'country-flag-icons/react/3x2/GB';
import NL from 'country-flag-icons/react/3x2/NL';
import NZ from 'country-flag-icons/react/3x2/NZ';
import US from 'country-flag-icons/react/3x2/US';
import type { Testimonial } from '../../content/site';

const AUTO_ADVANCE_MS = 4000;

const countryFlagComponents = {
  Bahrain: BH,
  USA: US,
  'United States': US,
  'United Kingdom': GB,
  UK: GB,
  Canada: CA,
  'New Zealand': NZ,
  Netherlands: NL,
} as const;

function CountryFlag({ country }: { country: string }) {
  const Flag = countryFlagComponents[country as keyof typeof countryFlagComponents];
  if (!Flag) return null;
  return <Flag aria-hidden="true" />;
}

export default function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isDocumentHidden, setIsDocumentHidden] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const active = items[activeIndex];
  const cardPositions = [
    { offset: -2, className: 'is-far-previous' },
    { offset: -1, className: 'is-previous' },
    { offset: 0, className: 'is-active' },
    { offset: 1, className: 'is-next' },
    { offset: 2, className: 'is-far-next' },
  ];
  const shouldAutoAdvance = items.length > 1 && !isPaused && !isInteracting && !prefersReducedMotion && !isDocumentHidden;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsDocumentHidden(document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    if (!shouldAutoAdvance) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [items.length, shouldAutoAdvance]);

  if (!items.length) return null;

  function move(direction: number) {
    setActiveIndex((current) => (current + direction + items.length) % items.length);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      setActiveIndex(0);
    }
    if (event.key === 'End') {
      event.preventDefault();
      setActiveIndex(items.length - 1);
    }
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) >= 48) move(distance > 0 ? -1 : 1);
  }

  return (
    <div
      className="testimonial-carousel"
      aria-label="Client testimonials"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false);
      }}
    >
      <div
        className="testimonial-card-stage"
        role="group"
        aria-label={`${activeIndex + 1} of ${items.length}`}
        aria-roledescription="slide"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}
        onTouchEnd={handleTouchEnd}
      >
        {cardPositions.map(({ offset, className }) => {
          const index = (activeIndex + offset + items.length) % items.length;
          const item = items[index];
          const isActive = offset === 0;
          return (
            <article
              className={`testimonial-stack-card ${className}`}
              aria-hidden={!isActive}
              key={`${item.name}-${index}`}
            >
              <Quote className="testimonial-card-quote" aria-hidden="true" />
              <div className="testimonial-avatar">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={isActive ? `Portrait of ${item.name}` : ''}
                    width="960"
                    height="960"
                    loading="lazy"
                  />
                ) : (
                  <UserRound aria-hidden="true" />
                )}
              </div>
              <div className="testimonial-card-person">
                <div className="testimonial-person-name">
                  <span className="testimonial-country-flag" title={item.country} aria-hidden="true">
                    <CountryFlag country={item.country} />
                  </span>
                  <cite>{item.name}</cite>
                </div>
                <span>{item.role}</span>
              </div>
              <blockquote>
                <p>{item.quote}</p>
              </blockquote>
            </article>
          );
        })}
        <span className="sr-only">{active.name}, {active.role}. {active.quote}</span>
      </div>

      <div className="testimonial-controls">
        
        <div className="testimonial-buttons">
          <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial">
            <ChevronLeft aria-hidden="true" />
          </button>
          
          <button type="button" onClick={() => move(1)} aria-label="Next testimonial">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
