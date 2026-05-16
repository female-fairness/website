import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '/about') {
    return <AboutPage />;
  }

  return <HomePage />;
}
