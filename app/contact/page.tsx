import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata = {
  title: "Contact | Kimmey Lab",
  description: "Kimmey Lab location, office, shipping, and mailing address.",
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <p className="eyebrow dark">Contact</p>
        <h1>Contact Us</h1>
        <p>
          Laboratory, office, shipping, and mailing information for the Kimmey
          Lab at UC Santa Cruz.
        </p>
      </section>

      <section className="section contact-page">
        <div className="contact-grid">
          <article className="text-card">
            <h2>Laboratory Location</h2>
            <p>Biomedical Sciences 0214</p>
            <p>Phone: 831-459-4311</p>
            <p>
              <a href="https://maps.ucsc.edu/">Find physical addresses for buildings on campus</a>
            </p>
            <p>Note the official / shipping address is below.</p>
          </article>

          <article className="text-card">
            <h2>Dr. Kimmey&apos;s Office</h2>
            <p>Biomedical Sciences 0246</p>
            <p>Phone: 831-459-4095</p>
          </article>

          <article className="text-card">
            <h2>Lab Shipping Address</h2>
            <p>Biomed 215 (Kimmey Lab)</p>
            <p>UCSC / Thimann Receiving</p>
            <p>1156 High Street</p>
            <p>Santa Cruz, CA 95064</p>
            <p className="small-note">Sales reps, quotes, purchasing etc:</p>
            <p>
              <a href="mailto:kimmeylab@ucsc.edu">kimmeylab@ucsc.edu</a>
            </p>
          </article>

          <article className="text-card">
            <h2>Mailing Address</h2>
            <p>UC Santa Cruz Mailstop: METX</p>
            <p>ATTN: Dr. Jacqueline Kimmey</p>
            <p>1156 High Street</p>
            <p>Santa Cruz, CA 95064</p>
          </article>
        </div>

        <div className="location-media">
          <img
            src="/assets/kimmeylab/images/biomedical-sciences-building.jpg"
            alt="Biomedical Sciences building at UC Santa Cruz"
          />
          <a
            className="map-panel"
            href="https://www.google.com/maps/search/?api=1&query=Biomedical+Sciences+UC+Santa+Cruz"
          >
            <span>Biomedical Sciences</span>
            <strong>Open Map</strong>
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
