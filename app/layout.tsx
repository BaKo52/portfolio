import '/app/style/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {cn} from "@/lib/utils";
import React from "react";
import PortfolioNavigation from "@/components/portfolio-navigation-menu";
import {ThemeProvider} from "@/components/theme-provider";

const inter = Inter(
    {
        subsets: ['latin'],
        variable : "--font-sans"
    })

export const metadata: Metadata = {
    title: 'BaKo\'s portfolio',
    description: 'Created by Bastien Kotte',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          <body className={cn(
              "min-h-screen bg-background font-sans antialiased",
              inter.variable,
          )}>

          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem={true}
              themes={['dark', 'light', 'system']}
          >
              <header>
                  <PortfolioNavigation/>
              </header>
              {children}
              <footer>
              </footer>
          </ThemeProvider>

          </body>
      </html>
  )
}
