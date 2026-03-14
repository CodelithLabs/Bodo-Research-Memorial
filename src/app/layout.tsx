import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "Bodo Research Memorial | Digital Heritage Archive",
  description: "An institutional academic platform dedicated to the preservation of Bodo history, cultural documentation, and scholarly research. Explore leaders, timelines, and research papers.",
  keywords: ["Bodo", "culture", "history", "heritage", "Assam", "Bathou", "religion", "leaders", "archive", "research", "memorial", "academic"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&family=Source+Serif+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-ivory text-text-primary min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
