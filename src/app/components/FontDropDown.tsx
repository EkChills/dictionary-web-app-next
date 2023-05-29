"use client"

import React, { useRef, useState } from 'react'
import { useMainContext } from './context/mainContext'
import Image from 'next/image'
import useOnclickOutside from '@/hooks/useOnClickOutside'

export default function FontDropDown() {
  const {fonts, currentFont, onFontChange} = useMainContext()
  const currentRef = useRef<HTMLDivElement | null>(null)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  useOnclickOutside(currentRef, () => {
    setShowDropdown(false)
  })
  
console.log(currentFont, fonts);

  return (
    <div className='font-[700] cursor-pointer text-[.875rem] sm:text-[1.125rem] flex items-center space-x-4 relative z-10' onClick={() => setShowDropdown(true)} >
      <p>{currentFont}</p>
      <Image src="/assets/images/icon-arrow-down.svg" width="12" height="6" alt='down arrow' />
      { showDropdown && <div ref={currentRef} className='w-[11.438rem] h-[9.5rem] absolute shadow-lg flex flex-col space-y-4 rounded-lg p-[1.5rem] top-[2.3rem] right-0 dark:bg-[#1F1F1F] bg-white ' >
        {
          fonts.map((font, index) => (
            <span key={index} >{font}</span>
          ))
        }
      </div>}
    </div>
  )
}
