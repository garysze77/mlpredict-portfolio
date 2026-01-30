import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://mlpredict.app'),
  title: 'MLPredict - 機器學習系統開發 | 香港ML開發、賽馬預測、股票信號',
  description:
    '生產級ML預測平台，數據驅動決策。香港機器學習開發：賽馬預測、美股買賣通知、商會管理、營利預測。訂造機器學習解決方案。',
  keywords: ['香港ML開發', '賽馬預測', '股票信號', '機器學習', 'ML預測平台', 'XGBoost', 'Finnhub'],
  manifest: '/manifest.json',
  openGraph: {
    title: 'MLPredict - 機器學習系統開發',
    description: '生產級ML預測平台 | 數據驅動決策 | 訂造機器學習解決方案',
    url: 'https://mlpredict.app',
    siteName: 'MLPredict',
    locale: 'zh_HK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLPredict - 機器學習系統開發',
    description: '生產級ML預測平台 | 數據驅動決策',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://mlpredict.app' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
