"use client"

import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useMainContext } from './context/mainContext'
import WordSound from './WordSound'
import Meanings from './Meanings'

export default function SearchResults() {
  const {isLoading, wordData} = useMainContext()
  wordData && console.log(wordData);
  
  if(isLoading) return <div>loading...</div>

  if(wordData!.length > 0) {
    const word = wordData![0].word
    const phonetic = wordData![0].phonetics.filter((phonetic) => phonetic.text !== '')[0].text
    const audio = wordData![0].phonetics.filter((phonetic) => phonetic.audio !== '')[0].audio

    console.log(phonetic);
    
    return (
      <div className='pt-6'>
        <WordSound word={word} phonetic={phonetic} audio={audio!} />
        <Meanings />
      </div>
    )  }

}
