import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rn-shop",
  description: "Reactive Native Shop Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <main>{children}</main>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
