import { Fragment, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/site/PageElements';
import Seo from '../components/site/Seo';
import { legalDocuments, legalIdentity, legalMeta, type LegalBlock } from '../content/legal';
import NotFoundPage from './NotFoundPage';

const inlinePattern = /(\[[A-Z/ ]+\]|[\w.+-]+@calderforge\.com)/g;

// Swaps confirmed business facts into placeholders and links email addresses.
function renderText(text: string): ReactNode {
  return text.split(inlinePattern).map((part, index) => {
    if (part in legalIdentity) {
      const value = legalIdentity[part];
      return value ? <Fragment key={index}>{value}</Fragment> : <mark key={index} className="legal-placeholder">{part}</mark>;
    }
    if (part.endsWith('@calderforge.com')) return <a key={index} href={`mailto:${part}`}>{part}</a>;
    return <Fragment key={index}>{part}</Fragment>;
  });
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === 'paragraph') return <p>{renderText(block.text)}</p>;
  if (block.type === 'list') {
    return (
      <ul>
        {block.items.map((item) => <li key={item}>{renderText(item)}</li>)}
      </ul>
    );
  }
  return (
    <div className="legal-table-wrap">
      <table className="legal-table">
        <thead>
          <tr>{block.head.map((cell) => <th key={cell} scope="col">{cell}</th>)}</tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
                <td key={index} data-label={block.head[index]}>{renderText(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LegalPage({ slug }: { slug: string }) {
  const doc = legalDocuments.find((item) => item.slug === slug);
  if (!doc) return <NotFoundPage />;

  return (
    <>
      <Seo title={doc.title} description={doc.description} path={`/${doc.slug}`} />

      <PageHero eyebrow="Legal" title={doc.title} description={doc.description}>
        <p className="legal-meta">
          Effective {legalMeta.effectiveDate} · Version {legalMeta.version}
        </p>
      </PageHero>

      <section className="section legal-section">
        <div className="container legal-layout">
          <aside className="legal-aside">
            <nav aria-label="Legal policies" className="legal-doc-nav">
              <span>Policies</span>
              {legalDocuments.map((item) => (
                <Link key={item.slug} to={`/${item.slug}`} aria-current={item.slug === doc.slug ? 'page' : undefined}>
                  {item.title}
                </Link>
              ))}
            </nav>
            <nav aria-label="On this page" className="legal-toc">
              <span>On this page</span>
              {doc.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  <b>{section.number}</b> {section.heading}
                </a>
              ))}
            </nav>
          </aside>

          <article className="legal-content">
            <p className="legal-lead">{doc.lead}</p>
            {doc.sections.map((section) => (
              <section key={section.id} id={section.id} className="legal-clause">
                <h2><span>{section.number}</span> {section.heading}</h2>
                {section.blocks.map((block, index) => <Block key={index} block={block} />)}
              </section>
            ))}
            <div className="legal-contact">
              <h2>Questions about this policy?</h2>
              <p>
                Email <a href={`mailto:${legalMeta.contactEmail}`}>{legalMeta.contactEmail}</a> or call{' '}
                <a href={`tel:${legalMeta.phone.replace(/\s/g, '')}`}>{legalMeta.phone}</a>, and include enough detail for us to identify
                the relevant project or records.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
