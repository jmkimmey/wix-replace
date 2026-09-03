import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { getImagePath, publications } from "../lib/labData";

export const metadata = {
  title: "Publications | Kimmey Lab",
  description:
    "Publication list for the Kimmey Lab at UC Santa Cruz, with abstracts and article links.",
};

export default function PublicationsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow dark">Publications</p>
        <h1>Publications</h1>
        <p>
          Publications with major efforts while affiliated with UCSC. For Dr.
          Kimmey&apos;s complete publication list, see{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/?term=kimmey+jm&sort=pubdate">
            PubMed
          </a>
          .
        </p>
      </section>

      <section className="section publications-section compact-section">
        <div className="publication-list">
          {publications.map((pub) => (
            <a
              className="publication-item publication-item-large"
              href={`/publications/${pub.slug}`}
              key={pub.slug}
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
      </section>
      <SiteFooter />
    </main>
  );
}
