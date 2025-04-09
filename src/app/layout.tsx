import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'lineicons/dist/lineicons.css';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});



export const metadata: Metadata = {
  title: "MichalAniol - Portfolio",
  description: "Tutaj doszlo do sigmy",
  icons: {
    icon: "/logo/logo.ico", // Główna ikona
    apple: "/logo/apple-touch-logo.png", // Ikona dla iOS
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/logo-16x16.png" sizes="16x16" />
        <link rel="icon" href="/logo/logo-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo/apple-touch-logo.png" sizes="180x180" />
        <link rel="icon" href="/logo/android-chrome-192x192.png" sizes="192x192" />
      </head>

      <body
        className={`${inter.variable}  antialiased bg-gray-950`}
      >

        {children}

      </body>
    </html>
  );
}
