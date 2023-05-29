import Image from 'next/image'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function WordSound({word, phonetic, audio, loading}:{word:string, phonetic:string, audio:string, loading:boolean;}) {
  return (
    <div className='flex justify-between '>
      <div className='flex flex-col space-y-[.5rem]'>
        <h2 className='text-[2rem] sm:text-[4rem] font-bold text-[#2D2D2D] dark:text-white'> {word || <Skeleton />}</h2>
        <p className='font-[400] text-[1.125rem] sm:text-[1.5rem] text-[#A445ED] '>{phonetic || ''}</p>
      </div>
        <Image className='sm:w-[75px] sm:h-[75px] cursor-pointer ' src="/assets/images/icon-play.svg" width={48} height={48} alt="play"/>
    </div>
  )
}
