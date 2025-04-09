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
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${inter.variable}  antialiased bg-gray-950`}
      >

        {children}

      </body>
    </html>
  );
}
