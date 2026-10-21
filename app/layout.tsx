import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'A price multiple, not a tick',
  description: 'The width that covers a low and a high around an entry. Not an Alcor range and not a forecast.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
