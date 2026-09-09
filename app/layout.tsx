import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vrindratech.com"),

  title: {
    default: "VrindraTech | Web Development & IT Solutions",
    template: "%s | VrindraTech",
  },

  description:
    "VrindraTech provides professional web development, software solutions, mobile apps and IT services to help businesses innovate, integrate and grow.",

  keywords: [
    "VrindraTech",
    "Vrindra Tech",
    "web development",
    "website development",
    "software development",
    "IT solutions",
    "mobile app development",
    "digital solutions",
    "IT company",
    "web development company",
  ],

  authors: [{ name: "VrindraTech" }],
  creator: "VrindraTech",
  publisher: "VrindraTech",

  alternates: {
    canonical: "https://vrindratech.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://vrindratech.com",
    siteName: "VrindraTech",
    title: "VrindraTech | Web Development & IT Solutions",
    description:
      "Professional web development, software solutions, mobile apps and IT services for modern businesses.",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "VrindraTech | Web Development & IT Solutions",
    description:
      "Professional web development, software solutions, mobile apps and IT services for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LN9SGDVNC0"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LN9SGDVNC0');
          `}
        </Script>
{/* Microsoft Clarity */}
  <Script id="microsoft-clarity" strategy="afterInteractive">
    {`
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){
          (c[a].q=c[a].q||[]).push(arguments)
        };
        t=l.createElement(r);
        t.async=1;
        t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "yfpykb27x5");
    `}
  </Script>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}