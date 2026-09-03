import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata = {
  title: "Join the Lab | Kimmey Lab",
  description:
    "Information for prospective postdoctoral fellows, graduate students, and undergraduate researchers interested in the Kimmey Lab.",
};

export default function JoinPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow dark">Join</p>
        <h1>Joining the Lab</h1>
        <p>
          Make sure to check out our <a href="/#research">research page</a> to
          see what it is like to be in the lab. Think you might be a good fit?
          Join us.
        </p>
      </section>

      <section className="section content-page">
        <article className="text-card">
          <h2>Postdoctoral Fellows</h2>
          <p>
            Interested applicants should contact Dr. Kimmey and include a cover
            letter that includes a description of your research experience and
            the research you want to carry out in the lab, and your CV.
            Postdoctoral fellows must have done their PhD in a microbiology or
            molecular biology related field. Experience with hypothesis-driven
            research in microbiology, pathogenesis, immunology, circadian
            biology or cell biology is required. Our lab is <em>not a good fit</em>{" "}
            for applicants interested in metagenomics, clinical
            surveillance/epidemiology, antibiotic screening etc.
          </p>
          <p className="note">
            Though we are not accepting applications via a former advertisement
            anymore, we do have an opening for a postdoctoral fellow with
            expertise in one of our lab&apos;s areas of research, such as
            molecular mechanisms of pathogenesis, circadian biology, or cellular
            immunology. If you feel you are a good fit for the lab, please send
            Dr. Kimmey an email with the requested materials.
          </p>
        </article>

        <article className="text-card">
          <h2>Graduate Students</h2>
          <p>
            We accept Ph.D. students via the Program in Biomedical Sciences and
            Engineering (PBSE) via the{" "}
            <a href="https://microbiology.ucsc.edu/graduate/index.html">
              Microbial Biology and Pathogenesis (MICRO)
            </a>{" "}
            track.
          </p>
          <p className="note">
            Students interested in applying should check current PBSE admissions
            instructions and deadlines.
          </p>
        </article>

        <article className="text-card">
          <h2>Undergraduate Researchers</h2>
          <p>
            We accept committed undergraduate researchers to carry out
            independent study as space allows. Students must be able to commit
            15 hours/week for at least 4 quarters. If you are interested,
            please reach out to <a href="mailto:jkimmey@ucsc.edu">Dr. Kimmey</a>{" "}
            to see if there is currently space in the lab.
          </p>
          <p>The form will ask for the following, so it is good to have these handy:</p>
          <ul>
            <li>CV or resume</li>
            <li>Transcript</li>
            <li>Previous laboratory experience</li>
            <li>Why you are interested in the lab, and your future plans</li>
            <li>Expected time commitment to lab, in hours/week and number of quarters</li>
          </ul>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
