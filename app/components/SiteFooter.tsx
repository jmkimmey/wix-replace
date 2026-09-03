import { siteContent } from "../content";

export function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <img src={siteContent.ucscLogo} alt="UC Santa Cruz" />
      <div>
        <strong>{siteContent.labName}</strong>
        <p>{siteContent.contact.department}</p>
        <p>{siteContent.contact.location}</p>
      </div>
      <div className="footer-links">
        <a href={`mailto:${siteContent.contact.email}`}>
          {siteContent.contact.email}
        </a>
        <a href={siteContent.contact.instagram}>@kimmeylab</a>
      </div>
    </footer>
  );
}
