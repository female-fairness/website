import wordmark from '../assets/brand/wordmark.svg';
import { marketingLinks } from '../config/links';
import { Button } from './Button';

interface HeaderProps {
  activePage: 'home' | 'about';
}

export function Header({ activePage }: HeaderProps) {
  return (
    <header className="site-header">
      <a aria-label="Female Fairness home" href="/">
        <img
          alt="Female Fairness"
          className="site-header__logo"
          src={wordmark}
        />
      </a>
      <nav aria-label="Main navigation" className="site-header__actions">
        <Button current={activePage === 'about'} href="/about" variant="secondary">
          About
        </Button>
        <Button href={marketingLinks.appDownload} variant="primary">
          Download app
        </Button>
      </nav>
    </header>
  );
}
