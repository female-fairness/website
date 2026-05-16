import wordmark from '../assets/brand/wordmark.svg';
import { marketingLinks } from '../config/links';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <img alt="Female Fairness" className="site-footer__logo" src={wordmark} />
        <p className="site-footer__text">Where equality becomes action.</p>
        <p className="site-footer__text">
          Address
          <br />
          Company number
        </p>
        <nav aria-label="Social and contact links" className="site-footer__links">
          <a href={marketingLinks.linkedin}>Linkedin</a>
          <a href={marketingLinks.instagram}>Instagram</a>
          <a href={marketingLinks.contact}>Contact us</a>
        </nav>
      </div>
    </footer>
  );
}
