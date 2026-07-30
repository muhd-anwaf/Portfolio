import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 text-slate-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
