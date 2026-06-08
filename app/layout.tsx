import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Metric Anomaly Alerter — Get alerted when key metrics behave unusually",
  description: "Connect to analytics APIs and detect statistical anomalies in growth metrics with smart alerts. For startup founders, growth teams, and product managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fa90ab2f-7159-4592-ac27-d40adf0df86b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
