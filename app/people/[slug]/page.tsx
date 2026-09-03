import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import {
  currentPeople,
  findPerson,
  getImagePath,
  splitParagraphs,
} from "../../lib/labData";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return currentPeople.map((person) => ({ slug: person.slug }));
}

export function generateMetadata({ params }: Props) {
  const person = findPerson(params.slug);

  if (!person) {
    return {};
  }

  return {
    title: `${person.name} | Kimmey Lab`,
    description: person.job_title,
  };
}

export default function PersonDetailPage({ params }: Props) {
  const person = findPerson(params.slug);

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
          <p className="eyebrow dark">Team member</p>
          <h1>{person.name}</h1>
          <p className="detail-meta">{person.job_title}</p>
          <p className="dates">{person.dates}</p>
          {person.email ? <p>{person.email}</p> : null}
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
