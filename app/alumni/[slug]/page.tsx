import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import {
  alumniProfiles,
  findAlumnus,
  getImagePath,
  splitParagraphs,
} from "../../lib/labData";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return alumniProfiles.map((person) => ({ slug: person.slug }));
}

export function generateMetadata({ params }: Props) {
  const person = findAlumnus(params.slug);

  if (!person) {
    return {};
  }

  return {
    title: `${person.name} | Kimmey Lab Alumni`,
    description: person.job_title,
  };
}

export default function AlumniDetailPage({ params }: Props) {
  const person = findAlumnus(params.slug);

  if (!person) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />
      <article className="detail-layout person-detail">
        <aside>
          <img src={getImagePath(person.photo)} alt={person.name} />
          <a className="button button-secondary" href="/people">
            All people
          </a>
        </aside>
        <div className="detail-main">
          <p className="eyebrow dark">Alumni</p>
          <h1>{person.name}</h1>
          <p className="detail-meta">{person.job_title}</p>
          <p className="dates">{person.dates}</p>
          <div className="highlight-list">
            {person.highlights.map((highlight) => (
              <p key={highlight}>{highlight}</p>
            ))}
          </div>
          <h2>Bio</h2>
          {splitParagraphs(person.bio).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
