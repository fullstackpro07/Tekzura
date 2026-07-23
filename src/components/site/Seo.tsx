import { useEffect } from 'react';
import { siteConfig } from '../../content/site';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  schema?: Record<string, unknown>;
  noIndex?: boolean;
  image?: string;
}

const DEFAULT_OG_IMAGE = '/calderforge-logo.png';

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value));
}

function normalizePath(path: string) {
  if (!path || path === '/') return '/';
  return path.startsWith('/') ? path : `/${path}`;
}

export default function Seo({ title, description, path, schema, noIndex = false, image }: SeoProps) {
  useEffect(() => {
    const normalizedPath = normalizePath(path);
    const fullTitle = title.includes('|') ? title : title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
    const canonicalUrl = `${siteConfig.url}${normalizedPath}`;
    const imageUrl = `${siteConfig.url}${image || DEFAULT_OG_IMAGE}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', { name: 'description', content: description });
    setMeta('meta[name="robots"]', {
      name: 'robots',
      content: noIndex ? 'noindex, nofollow' : 'index, follow',
    });
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteConfig.name });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    setMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const scriptId = 'structured-data';
    document.getElementById(scriptId)?.remove();
    if (schema) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => document.getElementById(scriptId)?.remove();
  }, [description, noIndex, path, schema, title]);

  return null;
}
