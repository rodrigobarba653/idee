import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IDEE | Consultoría de Negocios y Crecimiento Empresarial",
    template: "%s | IDEE",
  },
  description:
    "IDEE te ayuda a hacer crecer tu negocio. Clase gratuita Value Lab de 20 minutos, planes de consultoría, acompañamiento y estrategia. Deja de trabajar de más, empieza a trabajar mejor.",
  keywords: [
    "consultoría de negocios",
    "crecimiento empresarial",
    "Value Lab",
    "clase gratuita",
    "estrategia empresarial",
    "operación y decisiones",
    "IDEE",
  ],
  authors: [{ name: "IDEE" }],
  creator: "IDEE",
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: "IDEE | Consultoría de Negocios y Crecimiento Empresarial",
    description:
      "Clase gratuita Value Lab, planes de consultoría y acompañamiento para hacer crecer tu negocio. Empieza gratis y avanza cuando estés listo.",
    siteName: "IDEE",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDEE | Consultoría de Negocios y Crecimiento Empresarial",
    description:
      "Clase gratuita Value Lab, planes de consultoría y acompañamiento para hacer crecer tu negocio.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://idee.com.mx"),
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e20102",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
