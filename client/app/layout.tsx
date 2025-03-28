import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/custom/Header";
const montserrat = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "техно | строй",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased sticky top-0 bg-background text-foreground`}
      >
        <Header />
        <main className="flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
