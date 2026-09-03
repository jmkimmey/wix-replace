import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { findPublication, getImagePath, publications } from "../../lib/labData";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return publications.map((publication) => ({ slug: publication.slug }));
}

export function generateMetadata({ params }: Props) {
  const publication = findPublication(params.slug);

  if (!publication) {
    return {};
  }

  return {
    title: `${publication.title} | Kimmey Lab`,
    description: publication.abstract,
  };
}

export default function PublicationDetailPage({ params }: Props) {
  const publication = findPublication(params.slug);

  if (!publication) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />
      <article className="detail-layout">
        <aside>
          <img src={getImagePath(publication.image)} alt="" />
          <a className="button button-secondary" href="/publications">
            All publications
          </a>
        </aside>
        <div className="detail-main">
          <p className="eyebrow dark">Publication</p>
          <h1>{publication.title}</h1>
          <p className="detail-authors">{publication.authors}</p>
          <p className="detail-meta">
            {publication.journal} / {new Date(publication.date).getFullYear()}
          </p>
          <h2>Abstract</h2>
          <p>{publication.abstract}</p>
          {publication.keywords ? (
            <>
              <h2>Keywords</h2>
              <p>{publication.keywords}</p>
            </>
          ) : null}
          <div className="detail-actions">
            {publication.url ? (
              <a className="button button-primary" href={publication.url}>
                Article
              </a>
            ) : null}
            {publication.news ? (
              <a className="button button-secondary" href={publication.news}>
                News
              </a>
            ) : null}
            {publication.press ? (
              <a className="button button-secondary" href={publication.press}>
                Press
              </a>
            ) : null}
          </div>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
