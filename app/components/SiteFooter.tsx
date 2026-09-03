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
    </footer>
  );
}
