"use client"

import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useMainContext } from './context/mainContext'
import WordSound from './WordSound'
import Meanings from './Meanings'

export default function SearchResults() {
  const {isLoading, wordData} = useMainContext()
  
  if(isLoading) return <><Skeleton count={20} /></>

  if(wordData!.length > 0) {
    const word = wordData![0].word
    const phonetic = wordData![0].phonetics.filter((phonetic) => phonetic.text !== '')[0].text
    const meanings = wordData![wordData![1] === undefined ? 0 : 0].meanings
    const audio = wordData![0].phonetics.filter((phonetic) => phonetic.audio !== '')[0] === undefined ? '' : wordData![0].phonetics.filter((phonetic) => phonetic.audio!== '')[0].audio
    console.log(wordData);
    
    console.log(audio);
    
    return (
      <div className='pt-6'>
        <WordSound word={word} phonetic={phonetic} audio={audio!} loading={isLoading}/>
        <Meanings meanings={meanings} />
      </div>
    )  }

    return <><h1>No results found </h1></>


}
