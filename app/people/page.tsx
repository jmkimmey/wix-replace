import { PersonCard } from "../components/PersonCard";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { alumniRoster, currentPeople } from "../lib/labData";

export const metadata = {
  title: "People | Kimmey Lab",
  description: "Current and former members of the Kimmey Lab at UC Santa Cruz.",
};

export default function PeoplePage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow dark">People</p>
        <h1>Team members</h1>
        <p>Current lab members are listed in order of joining the lab.</p>
      </section>

      <section className="section compact-section">
        <div className="people-grid">
          {currentPeople.map((person) => (
            <PersonCard basePath="/people" person={person} key={person.slug} />
          ))}
        </div>
      </section>

      <section className="section alumni-section">
        <div className="section-heading">
          <p className="eyebrow dark">Alumni</p>
          <h2>Former lab members</h2>
          <p>Listed by category.</p>
        </div>
        <div className="alumni-roster">
          {alumniRoster.map((group) => (
            <section key={group.heading}>
              <h3>{group.heading}</h3>
              <ul>
                {group.people.map((person) => (
                  <li key={`${group.heading}-${person.name}-${person.rest}`}>
                    {person.slug ? (
                      <a href={`/alumni/${person.slug}`}>
                        <strong>{person.name}</strong>
                      </a>
                    ) : (
                      <strong>{person.name}</strong>
                    )}
                    {person.rest}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
