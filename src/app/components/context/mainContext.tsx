"use client"

import {useContext, createContext, useState, Dispatch, SetStateAction} from 'react'

type WordData = Array<{
  word: string;
  phonetics: Array<{
    text: string;
    audio?: string;
  }>;
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
      example?: string;
      synonyms?: Array<string>;
      antonyms?: Array<string>;
    }>;
  }>;
  sourceUrls:Array<string>;
}>;

interface InitialState{
  fonts: string[];
  currentFont: string;
  onFontChange?:(font:string)=>void;
  wordData?:WordData 
  isLoading:boolean; 	// set to true while word data is being loaded from server.  Used for animation.  Only set to true while word data
  error:boolean;			// set if word data load failed.  Used for animation.  Only set to true if word data load failed.
  setWordData?:Dispatch<SetStateAction<WordData>>
  setIsLoading?:Dispatch<SetStateAction<boolean>>
  setError?:Dispatch<SetStateAction<boolean>>
  // modifiedData:
}

const initialState:InitialState = {
  fonts:["Sans Serif", "Serif", "Mono"],
  currentFont:'Sans Serif',
  isLoading:false,
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

  const onFontChange = (font:string) => {
    setCurrentFont(font)
  }

  return <MainContext.Provider value={{currentFont, fonts:fonts!, onFontChange, setWordData, isLoading, error, wordData, setIsLoading, setError}} >
    {children}
  </MainContext.Provider>
}

export const useMainContext = () => {
  return useContext(MainContext)
}  