import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DigiPosters - Create Political Posters",
  description: "Create and share personalized political posters with our Android app",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  )
}



import './globals.css'