import Image from 'next/image'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import PlaySound from './PlaySound'

export default function WordSound({word, phonetic, audio}:{word:string, phonetic:string, audio:string}) {

  return (
    <div className='flex justify-between '>
      <div className='flex flex-col space-y-[.5rem]'>
        <h2 className='text-[2rem] sm:text-[4rem] font-bold text-[#2D2D2D] dark:text-white'> {word || <Skeleton />}</h2>
        <p className='font-[400] text-[1.125rem] sm:text-[1.5rem] text-[#A445ED] '>{phonetic || ''}</p>
      </div>
      <PlaySound audio={audio} />
    </div>
  )
}
