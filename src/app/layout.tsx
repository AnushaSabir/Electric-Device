import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
});

export const metadata: Metadata = {
  title: 'ZapGuard - Ultimate Electric Mosquito Killer',
  description: 'Experience peaceful, bite-free nights with the Ultimate Electric Mosquito Killer. Safe, quiet, and 100% effective.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} antialiased bg-[#020c1b] text-white font-poppins`}>
        {children}
      </body>
    </html>
  );
}
