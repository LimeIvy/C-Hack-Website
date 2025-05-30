/* eslint-disable new-cap, camelcase */

import { Geist, Geist_Mono, Roboto_Slab } from 'next/font/google';


export const GeistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});


export const GeistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});


export const RobotoSlab = Roboto_Slab({
  variable: '--font-roboto-slab',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});
