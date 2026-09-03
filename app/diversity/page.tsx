import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata = {
  title: "Diversity, Equity and Inclusion | Kimmey Lab",
  description:
    "The Kimmey Lab's commitment to diversity, equity, inclusion, and a supportive STEM environment.",
};

export default function DiversityPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow dark">Values</p>
        <h1>Diversity, Equity and Inclusion</h1>
      </section>

      <section className="section diversity-layout">
        <div className="prose content-prose">
          <p>
            The Kimmey lab values diversity of race, identity, experience,
            background, career goals and opinions. We are committed to
            providing an inclusive and supportive environment to stimulate
            respectful conversation to promote continued learning and self
            growth. We strive to be aware of systemic and implicit biases within
            our society, cultures, and educational systems.
          </p>
          <p>
            We enthusiastically support diversity in STEM, and we reserve at
            least one spot for scholars in STEM access programs such as{" "}
            <a href="https://stemdiv.ucsc.edu/">UC LEADS</a>,{" "}
            <a href="https://stemdiv.ucsc.edu/programs/marc.html">MARC</a>, and{" "}
            <a href="https://graddiv.ucsc.edu/current-students/prep.html">
              PREP
            </a>
            . Jacqueline owes her success in research to the UC LEADS and MARC
            programs, and is honored to have the privilege to support the
            continued growth of such programs. In fact, the priority that the
            university places on diversity and inclusion, as well as the very
            frequent, active conversations surrounding how to &quot;do better&quot;
            were major factors in Jacqueline&apos;s decision to start the lab at
            UC Santa Cruz.
          </p>
          <p className="statement">
            We do not tolerate racism, sexism, homophobia or bigotry. Period.
          </p>
          <div className="resource-list">
            <a href="https://stemdiv.ucsc.edu/">stemdiv.ucsc.edu</a>
            <a href="https://diversity.ucsc.edu/">diversity.ucsc.edu</a>
            <a href="https://pbse.ucsc.edu/about/pbse-clubs-groups.html">
              PBSE clubs and groups
            </a>
          </div>
        </div>
        <figure className="poster-frame">
          <img
            src="/assets/kimmeylab/images/diversity-poster.jpeg"
            alt="In this lab, we believe: science is real, love is love, Black lives matter, feminism is for everyone, bacteria are cool, immigrants are welcome."
          />
        </figure>
      </section>
      <SiteFooter />
    </main>
  );
}
