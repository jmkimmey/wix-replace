import type { Person } from "../lib/labData";
import { getImagePath } from "../lib/labData";

type Props = {
  basePath: "/people" | "/alumni";
  person: Person;
};

export function PersonCard({ basePath, person }: Props) {
  return (
    <article className="person-card">
      <a href={`${basePath}/${person.slug}`}>
        <img src={getImagePath(person.photo)} alt={person.name} />
        <div>
          <h3>{person.name}</h3>
          <p className="role">{person.job_title}</p>
          <p className="dates">{person.dates}</p>
          {person.highlights[0] ? <p>{person.highlights[0]}</p> : null}
        </div>
      </a>
    </article>
  );
}
