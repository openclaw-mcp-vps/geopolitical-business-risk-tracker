import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GeoRisk Tracker — Monitor Geopolitical Events Affecting Your Business",
  description: "Real-time geopolitical event monitoring, automated compliance analysis, and alert systems for international businesses and compliance teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="830eafeb-a991-4a84-a6b5-d672b1a277bf"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
