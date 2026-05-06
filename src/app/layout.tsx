import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Casa Flores Restaurant | Authentic Mexican Cuisine in Stockton',
  description: 'Enjoy authentic Mexican food, fresh vegetarian options, and all-day breakfast at Casa Flores in Stockton. Dine-in, takeout, and delivery available.',
  keywords: ["Mexican restaurant, Stockton dining, Casa Flores, authentic Mexican, breakfast, margaritas"],
  openGraph: {
    "title": "Casa Flores Restaurant",
    "description": "Authentic Mexican flavors in Stockton.",
    "type": "website",
    "siteName": "Casa Flores"
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
