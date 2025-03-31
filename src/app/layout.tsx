import "./globals.css";
import { League_Spartan } from "next/font/google";

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
