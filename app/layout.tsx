import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
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
      <head>
        {/* TODO: inserir IDs reais */}
        {/* <Script id="meta-pixel" strategy="afterInteractive">{`...`}</Script> */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" strategy="afterInteractive" /> */}
      </head>
      <body className="bg-background text-text-primary font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
