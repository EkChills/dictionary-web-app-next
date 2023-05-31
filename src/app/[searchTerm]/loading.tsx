import ReactSpinner from '@/components/ReactSpinner'
import React from 'react'
import { CircleLoader} from 'react-spinners'

export default function loading() {
  return (
    <div className='sm:max-w-[46.1rem] sm:mx-auto flex justify-center pt-[10rem]'>
      {/* <LottiePlayer /> */}
      <ReactSpinner />
    </div>
  )
}
