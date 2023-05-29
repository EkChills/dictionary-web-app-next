"use client"

import Image from 'next/image'
import React, {FormEvent, useState} from 'react'
import useSwr  from 'swr'
import { useMainContext } from './context/mainContext'

export default function SearchInput() {
  const [searchText, setSearchText] = useState<string>('')
  const {setWordData, wordData, setIsLoading, setError, isLoading} = useMainContext()
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  console.log(isLoading!);
  

  const fetchSearch = async(e:FormEvent) => {
    e.preventDefault()
    try {
      setIsLoading!(true)
      if(!searchText) return
      const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`, {next:{revalidate:1000}})
      const data:typeof wordData = await resp.json()
      setWordData!(data!)
      // let finalData = {
      //   word:wordData![0].word,
      //   phonetic:wordData![0].phonetics.filter(phonetic => phonetic.text !== '')[0].text,
      //   audio:wordData![0].phonetics.filter(phonetic => phonetic.audio !== '')[0].audio,
      //   meanings:wordData![0].meanings,
      //   sourceUrls:wordData![0].sourceUrls
      // }
      setSearchText('')      
    } catch (error) {
      setError!(true)
    } finally {
      setIsLoading!(false)
    }
  }
  return (
    <form className='relative' onSubmit={fetchSearch}>
      <input type="text" value={searchText} placeholder='Search for any word' onChange={handleChange}  className='h-[4rem] bg-[#F4F4F4] rounded-xl w-full indent-4  placeholder:font-bold placeholder:text-[1rem] focus:outline-[#A445ED] caret-[#A445ED] focus:outline-double dark:bg-[#1F1F1F] font-bold text-[1rem] sm:text-[1.25rem] '/>
      <Image  src="/assets/images/icon-search.svg" className='absolute right-[1.5rem] top-[1.5rem] cursor-pointer bottom-[1.5rem] ' width={15.55} height={15.55} alt='search' />
    </form>
  )
}
