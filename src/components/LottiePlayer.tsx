"use client"

import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

export default function LottiePlayer() {
  return (
    <>
    <Player src="/not-found-lottie.json" className='w-[20rem] h-[20rem]' loop autoplay  />
    </>
  )
}
