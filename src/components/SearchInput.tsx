"use client"

import Image from 'next/image'
import React, {FormEvent, useState} from 'react'
import useSwr  from 'swr'
import { useMainContext } from './context/mainContext'
import { useRouter } from 'next/navigation'

export default function SearchInput() {
  const [searchText, setSearchText] = useState<string>('')
  const {setWordData, wordData, setIsLoading, setError, isLoading} = useMainContext()
  const router = useRouter()
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }
  

  const fetchSearch = async(e:FormEvent) => {
      e.preventDefault()
      if(!searchText) return
      router.push(`/${searchText}`)
      setTimeout(() => {
        setSearchText('')
      }, 1000)
  }
  return (
    <form className='relative sm:max-w-[46.1rem] sm:mx-auto ' onSubmit={fetchSearch}>
      <input type="text" value={searchText} placeholder='Search for any word' onChange={handleChange}  className='h-[4rem] bg-[#F4F4F4] rounded-xl w-full indent-4  placeholder:font-bold placeholder:text-[1rem] focus:outline-[#A445ED] caret-[#A445ED] focus:outline-double dark:bg-[#1F1F1F] font-bold text-[1rem] sm:text-[1.25rem] '/>
      <button type='submit'><Image  src="/assets/images/icon-search.svg" className='absolute right-[1.5rem] top-[1.5rem] cursor-pointer bottom-[1.5rem] ' width={15.55} height={15.55} alt='search' /></button>
    </form>
  )
}
