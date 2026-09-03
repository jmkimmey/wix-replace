import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kimmeylab.com"),
  title: "Kimmey Lab | UC Santa Cruz",
  description:
    "The Kimmey Lab studies circadian rhythms, innate immunity, and bacterial infection at UC Santa Cruz.",
  openGraph: {
    title: "Kimmey Lab | UC Santa Cruz",
    description:
      "Circadian rhythms, innate immunity, and bacterial infection at UC Santa Cruz.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kimmey Lab | UC Santa Cruz",
    description:
      "Circadian rhythms, innate immunity, and bacterial infection at UC Santa Cruz.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/assets/kimmeylab/logo/LOGO only.png",
    shortcut: "/assets/kimmeylab/logo/LOGO only.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
