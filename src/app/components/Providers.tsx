"use client"

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { SkeletonTheme } from 'react-loading-skeleton'
import {Roboto_Mono, Roboto_Serif, Open_Sans} from 'next/font/google/'
import { useMainContext } from './context/mainContext'


export default function Providers({children}:{children:React.ReactNode}) {
  // const RobotoMono = Roboto_Mono({subsets:['latin']})
  // const RobotoSerif = Roboto_Serif({subsets:['latin']})
  // const OpenSans = Open_Sans({subsets:['latin']})
  const {selectedFont} = useMainContext()
  
  return (
    <ThemeProvider enableSystem={true} attribute='class' >
      <SkeletonTheme baseColor='#e5e0e0' highlightColor='#525252'>
      <div className={`dark:bg-[#050505] transition-colors duration-300 min-h-screen select-none px-6 ${selectedFont?.trim().toLocaleLowerCase() === 'Sans Serif'.trim().toLocaleLowerCase() ? 'font-sans' : selectedFont!.trim().toLocaleLowerCase() === 'Serif'.trim().toLocaleLowerCase() ? 'font-serif' : 'font-mono'}`}>
      {children}
      </div>
      </SkeletonTheme>
    </ThemeProvider>
  )
}
