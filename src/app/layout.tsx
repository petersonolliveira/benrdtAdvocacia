import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/cormorant-garamond";
import "@fontsource-variable/cormorant-garamond/wght-italic.css";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/whatsapp";
import { isIndexable, site, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: "%s | Berndt & Effting Advocacia" },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: "/images/logo-hor-2.png", width: 1920, height: 1080, alt: site.name }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/images/logo-hor-2.png"] },
  robots: { index: isIndexable, follow: isIndexable },
};

export const viewport: Viewport = { themeColor: "#541126", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
