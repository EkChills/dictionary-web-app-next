"use client"

import {useContext, createContext, useState, Dispatch, SetStateAction} from 'react'


const initialState:InitialState = {
  fonts:["Sans Serif", "Serif", "Mono"],
  currentFont:'Sans Serif',
  isLoading:false,
  selectedFont:'Mono',
  error:false,
  wordData:[],
}

const MainContext = createContext<InitialState>(initialState || null)

export function ContextProvider ({children}:{children:React.ReactNode}) {
  const [fonts, setFonts] = useState<string[]>(initialState.fonts)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentFont, setCurrentFont] = useState<string>('Sans Serif')
  const [error, setError] = useState<boolean >(false)
  const [wordData, setWordData] = useState<WordData>([])
  const [selectedFont, setSelectedFont] = useState<string>(initialState.selectedFont!)

  const onFontChange = (font:string) => {
    setCurrentFont(font)
  }

  return <MainContext.Provider value={{currentFont, fonts:fonts!, onFontChange, setWordData, isLoading, error, wordData, setIsLoading, setError,selectedFont, setSelectedFont}} >
    {children}
  </MainContext.Provider>
}

export const useMainContext = () => {
  return useContext(MainContext)
}  