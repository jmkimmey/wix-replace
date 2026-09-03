import { siteContent } from "../content";

export function SiteHeader() {
  return (
    <header className="site-nav" aria-label="Primary navigation">
      <a className="brand" href="/">
        <img src={siteContent.logo} alt="" />
        <span>{siteContent.labName}</span>
      </a>
      <nav>
        <a href="/#research">Research</a>
        <a href="/people">People</a>
        <a href="/publications">Publications</a>
        <a href="/join">Join</a>
        <a href="/diversity">Diversity</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
