import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://loyalstring.com"),
  title: "Loyal String International Pvt. Ltd. | RFID Tags & Guns",
  description: "Global manufacturer of premium RFID guns and multiple types of RFID tags for business solutions.",
  icons: {
    icon: [
      { url: "/logos/logo.jpeg", type: "image/jpeg" },
      { url: "/favicon.jpg", type: "image/jpeg" },
    ],
    shortcut: "/logos/logo.jpeg",
    apple: "/logos/logo.jpeg",
  },
  openGraph: {
    type: "website",
    siteName: "Loyal String",
    title: "Loyal String International Pvt. Ltd. | RFID Tags & Guns",
    description: "Global manufacturer of premium RFID guns and multiple types of RFID tags for business solutions.",
    images: [
      {
        url: "/logos/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Loyal String logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Loyal String International Pvt. Ltd. | RFID Tags & Guns",
    description: "Global manufacturer of premium RFID guns and multiple types of RFID tags for business solutions.",
    images: ["/logos/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
