import "./globals.css";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  // Títulos e descrições serão definidos fora deste exemplo
  title: "ONG Repense - Conectando Pessoas a Oportunidades",
  description: "Acreditamos no poder da educação e do acesso à informação para transformar vidas. Capacitação, vagas de emprego e conexões que fazem a diferença.",
  openGraph: {
    title: "ONG Repense - Educação e Oportunidades para Todos",
    description: "A Repense é uma ONG que busca capacitar pessoas e conectar talentos a oportunidades, promovendo inclusão e transformação social.",
    url: "https://repense.ong.br/", // URL canônica
    type: "website", // Tipo de Open Graph
    images: [
      {
        url: "https://repense.ong.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ONG Repense - Educação e Oportunidades para Todos",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://repense.ong.br/", // URL canônica
    languages: {
      // "en-US": "hhttps://repense.ong.br/en/",
      "pt-BR": "https://repense.ong.br/",
    },
  },
  icons: {
    icon: "/favicon.ico", // Favicon padrão
    apple: "/apple-touch-icon.png", // Ícone para dispositivos Apple
    shortcut: "/favicon.ico", // Ícone de atalho
  },
  verification: {
    google: "código-de-verificação-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap" rel="stylesheet"/>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-W6935XDPG2"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6935XDPG2');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}