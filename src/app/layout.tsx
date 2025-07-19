import '@/styles/globals.css';

import { IBMPlexSansJP, NunitoSans } from '@/styles/font';

import type React from 'react';
import type { JSX } from 'react';
import type { RootLayoutProps } from '@/types';


/**
 * ページを構成する。
 *
 * @param param0 - 子要素
 * @returns 生成したページ
 */
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${NunitoSans.className} ${IBMPlexSansJP.className} relative min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
