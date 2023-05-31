"use client"

import React from 'react'
import useSound from 'use-sound'
import Image from 'next/image'

export default function PlaySound({audio}:{audio:string}) {
  const [playSound] = useSound(audio)


  console.log('rendered');
  
  return (
    <button onClick={() => playSound()
    }>

      <Image  className='sm:w-[75px] sm:h-[75px] cursor-pointer ' src="/assets/images/icon-play.svg" width={48} height={48} alt="play"/>
    </button>
    )
}
