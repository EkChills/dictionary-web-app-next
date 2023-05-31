import SearchRes from '@/components/SearchRes'
import { getSearchTerm } from '@/lib/getSearchTerm'
import React from 'react'

type Props = {
  params:{searchTerm:string}
}

export default async function page({params}:Props) {
  const promise = getSearchTerm(params.searchTerm)

  const searchRes = (
    <>
      {/* @ts-expect-error Async Server Component */}
      <SearchRes promise={promise} />
    </>
  )

  return searchRes

}
