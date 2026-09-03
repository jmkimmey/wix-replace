import { PersonCard } from "./components/PersonCard";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { siteContent } from "./content";
import { currentPeople, getImagePath, publications } from "./lib/labData";

const people = currentPeople.slice(0, 8);
const featuredPublications = publications.slice(0, 5);

export const metadata = {
  title: "Kimmey Lab | UC Santa Cruz",
  description:
    "The Kimmey Lab at UC Santa Cruz studies circadian rhythms, innate immunity, and bacterial infection.",
};

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="home">
        <video
          className="hero-media"
          autoPlay
          muted
          loop
          playsInline
          poster={siteContent.heroPoster}
          aria-hidden="true"
        >
          <source src={siteContent.heroVideo} type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-inner">
          <p className="eyebrow">{siteContent.affiliation}</p>
          <h1>
            <span>Kimmey</span>
            <span>Lab</span>
          </h1>
          <p className="hero-copy">{siteContent.tagline}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">
              Explore the science
            </a>
            <a className="button button-secondary" href="/people">
              Meet the lab
            </a>
          </div>
        </div>
      </section>

      <section className="quick-grid" aria-label="Site highlights">
        {[
          [
            "What we do",
            "Study how innate immunity controls susceptibility to bacterial infection.",
            "#research",
          ],
          [
            "Who we are",
            "A hands-on, question-driven group at UC Santa Cruz.",
            "/people",
          ],
          [
            "What is new",
            "Recent work on microbial signals, PER2, and clock biology.",
            "/publications",
          ],
          ["Where we are", "Biomedical Sciences, Department of METX.", "#contact"],
        ].map(([title, text, href]) => (
          <a className="quick-cell" href={href} key={title}>
            <span>{title.split(" ")[0]}</span>
            <strong>{title.split(" ").slice(1).join(" ")}</strong>
            <p>{text}</p>
          </a>
        ))}
      </section>

      <section className="section split-section" id="research">
        <div>
          <p className="eyebrow dark">Research</p>
          <h2>Biological time changes infection outcome.</h2>
        </div>
        <div className="prose">
          {siteContent.research.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="video-band" id="video">
        <div className="video-copy">
          <h2>Want to see firsthand what it is like to work in the Kimmey Lab?</h2>
          <p>Watch below: laughter and mistakes included.</p>
        </div>
        <div className="video-frame">
          <iframe
            src={siteContent.youtube.embedUrl}
            title={siteContent.youtube.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <p className="credit">
          Video produced by{" "}
          <a href={siteContent.youtube.creditUrl}>
            {siteContent.youtube.creditName}
          </a>
        </p>
      </section>

      <section className="section focus-section">
        <p className="eyebrow dark">Current areas of focus</p>
        <div className="focus-grid">
          {siteContent.research.focusAreas.map((item) => (
            <article className="focus-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section people-section" id="people">
        <div className="section-heading">
          <p className="eyebrow dark">People</p>
          <h2>Team members</h2>
          <p>Listed in order of joining the lab.</p>
        </div>
        <div className="people-grid">
          {people.map((person) => (
            <PersonCard basePath="/people" person={person} key={person.name} />
          ))}
        </div>
        <div className="section-actions">
          <a className="button button-secondary" href="/people">
            View all people and alumni
          </a>
        </div>
      </section>

      <section className="section publications-section" id="publications">
        <div className="section-heading">
          <p className="eyebrow dark">Publications</p>
          <h2>Recent work</h2>
        </div>
        <div className="publication-list">
          {featuredPublications.map((pub) => (
            <a
              className="publication-item"
              href={`/publications/${pub.slug}`}
              key={pub.title}
            >
              <img src={getImagePath(pub.image)} alt="" />
              <div>
                <h3>{pub.title}</h3>
                <p>{pub.authors}</p>
                <span>
                  {pub.journal} / {new Date(pub.date).getFullYear()}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="section-actions">
          <a className="button button-secondary" href="/publications">
            View all publications
          </a>
        </div>
      </section>

      <section className="instagram-band">
        <div>
          <p className="eyebrow">Instagram</p>
          <h2>{siteContent.instagram.handle}</h2>
          <p>{siteContent.instagram.text}</p>
          <a className="button button-primary" href={siteContent.instagram.url}>
            Open Instagram
          </a>
        </div>
        <div className="instagram-grid" aria-hidden="true">
          {siteContent.instagram.featuredImages.map((image) => (
            <img src={image} alt="" key={image} />
          ))}
        </div>
      </section>

      <section className="join-band" id="join">
        <h2>{siteContent.join.headline}</h2>
        <p>{siteContent.join.text}</p>
        <a className="button button-primary" href={`mailto:${siteContent.join.email}`}>
          Email Dr. Kimmey
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
