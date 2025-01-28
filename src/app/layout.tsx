import "./globals.css";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  // Títulos e descrições serão definidos fora deste exemplo
  title: "Repense",
  description: "Descrição repense",
  openGraph: {
    title: "Teste Open Graph",
    description: "Teste Open Graph",
    url: "https://repense.ong.br/", // URL canônica
    type: "website", // Tipo de Open Graph
    images: [
      {
        url: "https://repense.ong.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Descrição da imagem",
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
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap" rel="stylesheet"/>
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}