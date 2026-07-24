import { ArrowRight, CalendarDays, CheckCircle2, Headset, MoveDown, Palette, Megaphone, Rocket, Star } from 'lucide-react';
import { siteConfig, team, testimonials } from '../content/site';
import { portfolioStats } from '../content/portfolio';
import { buildHomeSchema, homePageDescription, homePageH1, homePageTitle } from '../content/homeSchema';
import { SectionHeading } from '../components/site/PageElements';
import Seo from '../components/site/Seo';
import { CapabilityExplorer } from '../components/site/InteractiveSections';
import HeroBackground from '../components/site/HeroBackground';
import { CommonQuestions, FounderSpotlight } from '../components/site/TeamSections';
import TestimonialsCarousel from '../components/site/TestimonialsCarousel';
import PortfolioStats from '../components/site/PortfolioStats';
import TechStack from '../components/site/TechStack';
import TrustSection from '../components/site/TrustSection';
import ProductStudioFramework from '../components/site/ProductStudioFramework';
import InvestorSection from '../components/site/InvestorSection';

export default function HomePage() {
  return (
    <>
      <Seo title={homePageTitle} description={homePageDescription} path="/" schema={buildHomeSchema()} />
      <section className="home-hero immersive-hero">
        <HeroBackground />
        <div className="immersive-overlay" aria-hidden="true" />
        <div className="container home-hero-grid">
          <div className="hero-copy">

            <h1>{homePageH1}</h1>
            <p className="lead">
              calderforge transforms ideas into launch-ready assets with strategy, engineering, and marketing under one roof.
            </p>
            <div className="button-row">
              <a className="button button-primary" href={siteConfig.calendly} target="_blank" rel="noreferrer">
                <CalendarDays aria-hidden="true" /> Book a Growth Strategy Call
              </a>
              <a className="button button-secondary" href="#product-studio">
                See How We Scale Products <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <ul className="hero-points" aria-label="Why teams choose calderforge">
              <li><CheckCircle2 aria-hidden="true" /> Product strategy to launch</li>
              <li><CheckCircle2 aria-hidden="true" /> Conversion-focused execution</li>
              <li><CheckCircle2 aria-hidden="true" /> 100% ownership and control</li>
              <li><CheckCircle2 aria-hidden="true" /> Growth support after release</li>
            </ul>
          </div>
          <div className="hero-signal-panel" aria-label="calderforge product studio model">

            <strong>From idea to launch, traction, and scale.</strong>
            <div className="signal-flow">
              <span>Validate</span><i /><span>Build</span><i /><span>Launch</span><i /><span>Scale</span>
            </div>
            <div className="hero-team-strip">
              <img
                src={team[0].image}
                alt=""
                width={team[0].width}
                height={team[0].height}
                loading="eager"
              />
              <div><strong>Founder-led delivery</strong><span>Strategy stays connected to execution</span></div>
            </div>
          </div>
        </div>
        <a className="hero-scroll-cue" href="#capabilities"><MoveDown aria-hidden="true" /> Explore Capabilities</a>
      </section>
      <section className="trust-strip capability-rail" aria-label="calderforge capabilities">
        <div className="container trust-grid">
          <div><Rocket aria-hidden="true" /><strong>MVP Development</strong><span>Fast, iterative, and scalable</span></div>
          <div><Megaphone aria-hidden="true" /><strong>Marketing</strong><span>SEO, ads, YouTube & automation</span></div>
          <div><Palette aria-hidden="true" /><strong>Design</strong><span>Brand, content & visual identity</span></div>
          <div><Headset aria-hidden="true" /><strong>Support</strong><span>Live chat, VA & helpdesk ops</span></div>
        </div>
      </section>

      <TrustSection />



      <PortfolioStats />

      <CapabilityExplorer variant="dashboard" />

      <TechStack />

      <ProductStudioFramework />

      <InvestorSection />


      <FounderSpotlight />
      <section className="section section-ink testimonial-section" id="testimonials">
        <div className="container testimonial-layout">
          <div className="testimonial-intro">
            <SectionHeading
              eyebrow=""
              title="Don't just take our words for it – Take theirs!"
              description="Feedback from founders, operators, and product leaders who wanted more than task-based delivery."
            />
            <div className="satisfaction-rating">
              <div>
                <strong>100%</strong>
                <span>Satisfaction from {portfolioStats.trustedClients}+ clients — and counting!</span>
              </div>
              <div>
                <div className="satisfaction-rating-stars">
                  <strong>5.0</strong>
                  <span className="satisfaction-rating-stars-icons" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} fill="currentColor" />)}
                  </span>
                </div>
                <span>Customer Satisfaction Rating</span>
              </div>
            </div>
          </div>
          <TestimonialsCarousel items={testimonials} />
        </div>
      </section>

      <CommonQuestions />

    </>
  );
}
