import React from 'react'


type Meanings = {
  partOfSpeech: string;
  definitions: {
      definition: string;
  }[];
  example?: string | undefined;
  synonyms?: string[] | undefined;
  antonyms?: string[] | undefined;
}[]
export default function Meanings({meanings}:{meanings:Meanings}) {
  
  return (
    <>
      <div className='flex flex-col'>
        {meanings.map((meaning, index) => (
          <div className='flex flex-col' key={index}>
            <div className='flex my-8 items-center space-x-4 sm:space-x-8'>
              <h3 className='font-bold text-[1.125rem] sm:text-[1.5rem]'>{meaning.partOfSpeech || ''}</h3>
              <div className='h-[1px] w-full bg-[#E9E9E9] dark:bg-[#3A3A3A] ' />
            </div>
            <h4 className='font-[400] text-[1.125rem] sm:text-[1.25rem] text-[#757575] mb-4'>Meaning</h4>
            <div className='sm:pl-[1.38rem] flex flex-col space-y-[13px]'>
              {meaning.definitions.map((definition) => (
                <div key={definition.definition} >
                  <div className='flex items-center space-x-[1.25rem] sm:space-x-[1.5rem]'>
                    <span className='w-[5px] h-[5px] rounded-full bg-[#8F19E8]' />
                    <p className='text-[.95rem] sm:text-[1.125rem] text-[#2D2D2D] dark:text-white'>{definition.definition }</p>
                  </div>
                </div>
                
              ))}
            </div>
            {meaning.synonyms?.length! > 0 && <div className='flex items-center space-x-10 mt-6 truncate' >
              <h4 className='font-[400] text-[1.125rem] sm:text-[1.25rem] text-[#757575]'>Synonyms</h4>
              <div className='flex items-center space-x-4'>
                {meaning.synonyms!.map((synonym, index) => (
                  <p className='font-bold text-[1.125rem] sm:text-[1.25rem] text-[#A445ED]' key={index}>{synonym}</p>
                  )) }
              </div>
             </div>}
          </div>
        ))}
      </div>
    </>
  )
}
