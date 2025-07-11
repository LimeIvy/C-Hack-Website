'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...properties }: ThemeProviderProps) {
  return <NextThemesProvider {...properties}>{children}</NextThemesProvider>
}
