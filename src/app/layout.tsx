import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';

import { IBMPlexSansJP, NunitoSans } from '@/styles/font';


export const metadata: Metadata = {
  title: 'Terminal | 中京大学公式エンジニアサークル',
  description: 'プログラミングに興味を持つ学生のためのサークル'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${NunitoSans.className} ${IBMPlexSansJP.className}`}>
        {children}
      </body>
    </html>
  )
}
