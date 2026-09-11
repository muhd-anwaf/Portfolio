import ANLogo from './ANLogo';

export default function Footer() {
  return <footer className="footer"><div className="site-container"><div className="footer-brand"><ANLogo /><span>ANWAF</span></div><p>© {new Date().getFullYear()} Muhammed Anwaf</p><p>Design → Develop → Deploy</p></div></footer>;
}
