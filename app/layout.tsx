import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Story Archives | Interactive Investigation & Narrative Platform',
  description:
    'A branching interactive story platform with mystery investigations, deduction boards, and meaningful choices. Explore 9 immersive story categories.',
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  keywords: [
    'detective game',
    'branching mystery',
    'interactive narrative',
    'deduction board',
    'indie game',
    'PWA',
  ],
};

export const viewport: Viewport = {
  themeColor: '#121316',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

import { GoogleTranslateLoader } from '@/components/ui/GoogleTranslateLoader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="paper-sepia" data-font-size="normal" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <GoogleTranslateLoader />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(err) {
                    console.log('ServiceWorker registration omitted:', err);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
