import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider } from '@clerk/nextjs'

import Navbar from "@components/Navbar"
import Footer from "@components/Footer"

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Notion Clone",
  description: "Notion Clone Web App Created with NextJs",
  icons: {
    icon: []
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", "font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <body className="h-full flex flex-col">
        <ClerkProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar/>
            <main className="w-full h-full">
              {children}
            </main>
            <Footer/>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
