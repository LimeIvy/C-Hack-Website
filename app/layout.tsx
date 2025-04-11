import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "C-Tech | 中京大学公式エンジニアサークル",
  description: "プログラミングに興味を持つ学生のためのサークル"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}


import './globals.css'