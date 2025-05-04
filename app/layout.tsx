import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CustomCursor from '@/components/custom-cursor';
import { Sora } from 'next/font/google';

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'Debashish  | Web3 & Cybersecurity',
  description: 'Web3 & Cybersecurity Enthusiast, Security Researcher, and Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={sora.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Header />
          <main className="min-h-screen bg-background text-foreground">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}