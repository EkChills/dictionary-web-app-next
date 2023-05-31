"use client"

import React, { useEffect, useState } from 'react'
import {SunIcon, Moon} from 'lucide-react'
import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {
  const {theme,setTheme,systemTheme} = useTheme()
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setIsMounted(true)
  },[])
  
  const changeThemeLight = () => {
    setTheme('light')
  }
  const changeThemeDark = () => {
    setTheme('dark')
  }

  return (
    <div className='cursor-pointer' >
      {isMounted && currentTheme === 'dark'  ?  <SunIcon onClick={changeThemeLight}  /> : <Moon onClick={changeThemeDark} /> }
    </div>
  )
}
