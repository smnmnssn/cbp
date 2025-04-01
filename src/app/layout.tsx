import "./globals.css";
import { League_Spartan } from "next/font/google";

export const metadata = {
  title: "Mölndals City Bil & Plåt | Skadereparationer i Mölndal",
  description: "Vi utför plåt-, lack- och plastreparationer med kvalitet och erfarenhet. Kontakta oss idag.",
  keywords: ["bilverkstad", "plåt", "lack", "skadereparation", "Mölndal", "cbp.nu", "plåtskada", "krockskada", "buckla", "bucklor", "repa", "repor"],
  openGraph: {
    title: "Mölndals City Bil & Plåt",
    description: "Plåt- och lackverkstad i Mölndal med lång erfarenhet.",
    url: "https://cbp.nu",
    siteName: "Mölndals City Bil & Plåt",
  },
};

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"],
  // Du kan även ange exempelvis "900" om du behöver den vikten
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spartan.className}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
