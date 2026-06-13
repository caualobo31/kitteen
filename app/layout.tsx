import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kit Consultório Teen — Recursos visuais para psicólogos que atendem adolescente",
  description:
    "+80 recursos terapêuticos prontos, organizados por demanda, feitos especificamente para adolescentes. Sem cara de material infantil.",
  openGraph: {
    title: "Kit Consultório Teen — Recursos visuais para psicólogos que atendem adolescente",
    description:
      "+80 recursos terapêuticos prontos, organizados por demanda, feitos especificamente para adolescentes.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-background text-text-primary font-inter antialiased">
        {children}
        <Script id="utmify-pixel" strategy="afterInteractive">{`
          window.pixelId = "6a2cc718a1866dee26a8a4cb";
          var a = document.createElement("script");
          a.setAttribute("async", "");
          a.setAttribute("defer", "");
          a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
          document.head.appendChild(a);
        `}</Script>
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
