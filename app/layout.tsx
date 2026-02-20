import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GenZ Cap Store | Exclusive Streetwear Caps",
  description: "Discover the freshest Gen Z streetwear caps. Limited drops, bold designs, and urban style. Sign up for exclusive access to our latest collections.",
  keywords: ["caps", "streetwear", "Gen Z", "fashion", "urban style", "hats", "headwear"],
  openGraph: {
    title: "GenZ Cap Store | Exclusive Streetwear Caps",
    description: "Discover the freshest Gen Z streetwear caps. Limited drops, bold designs, and urban style.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}