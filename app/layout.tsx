import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://eduhub.com'),
  title: {
    default: 'EduHub - All Your Study Solutions in One Place',
    template: '%s | EduHub'
  },
  description: 'Access comprehensive educational resources for students from Class 1-12. Get study materials, video lectures, practice questions, and exam preparation guides all in one place.',
  keywords: ['education', 'study materials', 'online learning', 'exam preparation', 'JEE', 'NEET', 'board exams', 'K-12 education'],
  authors: [{ name: 'EduHub Team' }],
  creator: 'EduHub',
  publisher: 'EduHub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EduHub - All Your Study Solutions in One Place',
    description: 'Access comprehensive educational resources for students from Class 1-12. Get study materials, video lectures, practice questions, and exam preparation guides all in one place.',
    url: 'https://eduhub.com',
    siteName: 'EduHub',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
      width: 1200,
      height: 630,
      alt: 'EduHub - Educational Resources',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduHub - All Your Study Solutions in One Place',
    description: 'Access comprehensive educational resources for students from Class 1-12. Get study materials, video lectures, practice questions, and exam preparation guides all in one place.',
    images: ['https://images.unsplash.com/photo-1497633762265-9d179a990aa6'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          :root {
            color-scheme: light dark;
          }
          .prevent-flash {
            background: hsl(var(--background));
            color: hsl(var(--foreground));
          }
        `}</style>

      </head>
      <body className={`${inter.className} prevent-flash`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "EduHub",
              "description": "Comprehensive educational resources for students from Class 1-12",
              "url": "https://eduhub.com",
              "sameAs": [
                "https://facebook.com/eduhub",
                "https://twitter.com/eduhub",
                "https://instagram.com/eduhub",
                "https://linkedin.com/company/eduhub"
              ],
              "offers": {
                "@type": "Offer",
                "category": "Educational Resources"
              },
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "student"
              }
            })
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}