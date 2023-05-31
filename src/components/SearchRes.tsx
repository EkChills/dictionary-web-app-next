import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useMainContext } from './context/mainContext'
import { PacmanLoader } from 'react-spinners'
import WordSound from './WordSound'
import Meanings from './Meanings'

const LoadingSpinner = () => {
  return <div className='flex  w-full pt-12 items-center justify-center'>
    <PacmanLoader size={25} color='#A445ED' />
  </div>
}

export default async function SearchRes({promise}:{promise:Promise<WordData | undefined>}) {
  const wordData:WordData | undefined = await promise


  if(wordData!.length > 0) {
    const word = wordData![0].word
    const phonetic = wordData![0].phonetics.filter((phonetic) => phonetic.text !== '')[0] ? wordData![0].phonetics.filter((phonetic) => phonetic.text !== '')[0] ?.text : ''
    const meanings = wordData![wordData![1] === undefined ? 0 : 0].meanings
    const audio = wordData![0].phonetics.filter((phonetic) => phonetic.audio !== '')[0] === undefined ? '' : wordData![0].phonetics.filter((phonetic) => phonetic.audio!== '')[0].audio
    console.log(wordData);
    
    console.log(audio);

    const displayedResult = (
      wordData ? <div className='pt-6 sm:max-w-[46.1rem] sm:mx-auto '>
      <WordSound word={word} phonetic={phonetic} audio={audio!}/>
      <Meanings meanings={meanings} />
    </div> : <div>word not found</div>
    )

    
    return displayedResult

    }
}
