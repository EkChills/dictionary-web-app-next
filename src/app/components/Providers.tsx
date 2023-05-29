"use client"

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { SkeletonTheme } from 'react-loading-skeleton'

export default function Providers({children}:{children:React.ReactNode}) {
  return (
    <ThemeProvider enableSystem={true} attribute='class' >
      <SkeletonTheme baseColor='#e5e0e0' highlightColor='#525252'>
      <div className='dark:bg-[#050505] transition-colors duration-300 min-h-screen select-none px-6 '>
      {children}
      </div>
      </SkeletonTheme>
    </ThemeProvider>
  )
}
