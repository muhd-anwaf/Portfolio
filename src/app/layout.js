import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 text-slate-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
