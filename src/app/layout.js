import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import './globals.css';

const deploymentUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const metadataBase = new URL(deploymentUrl ? `https://${deploymentUrl}` : 'http://localhost:3000');

export const metadata = {
  metadataBase,
  title: { default: 'Muhammed Anwaf | Backend Engineer', template: '%s | Muhammed Anwaf' },
  description: 'Backend engineer focused on Java, Spring Boot, APIs, databases, deployment systems, and full-stack application development.',
  authors: [{ name: 'Muhammed Anwaf' }],
  creator: 'Muhammed Anwaf',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return <html lang="en" className="scroll-smooth"><body><ScrollProgress /><a href="#main-content" className="skip-link">Skip to content</a><Navbar />{children}<Footer /></body></html>;
}
