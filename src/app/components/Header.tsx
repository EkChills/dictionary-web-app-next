import React from 'react'
import Image from 'next/image'
import FontDropDown from './FontDropDown'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className='py-6 flex justify-between items-center sm:max-w-[46.1rem] sm:mx-auto '>
      <Image src="/assets/images/logo.svg" alt='logo' width="29" height="32" />
      <div className='flex items-center space-x-4 '>
        <FontDropDown />
        <div className='w-[1px] h-[2rem] bg-[#E9E9E9] dark:bg-[white] ' />
        <DarkModeSwitch />
      </div>
    </div>
  )
}
