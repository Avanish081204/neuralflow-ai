import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://neuralflow-ai.vercel.app'),
  title: {
    default: 'NeuralFlow AI — Intelligent Data Automation Platform',
    template: '%s | NeuralFlow AI',
  },
  description:
    'NeuralFlow AI automates your most complex data workflows with adaptive AI pipelines, real-time fusion, and zero-latency execution. Ship smarter, faster.',
  keywords: [
    'AI automation', 'data pipeline', 'neural automation', 'LLM orchestration',
    'workflow automation', 'real-time data', 'AI platform', 'SaaS automation',
  ],
  authors: [{ name: 'NeuralFlow AI' }],
  creator: 'NeuralFlow AI',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neuralflow-ai.vercel.app',
    siteName: 'NeuralFlow AI',
    title: 'NeuralFlow AI — Intelligent Data Automation Platform',
    description:
      'Automate complex AI workflows end-to-end. Real-time data fusion, adaptive model routing, and one-click deployment at any scale.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'NeuralFlow AI — Intelligent Data Automation Platform',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuralFlow AI — Intelligent Data Automation Platform',
    description: 'Automate complex AI workflows end-to-end with NeuralFlow AI.',
    images: ['/og-image.png'],
    creator: '@neuralflowai',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Font preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Theme color */}
        <meta name="theme-color" content="#0A0A0F" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
