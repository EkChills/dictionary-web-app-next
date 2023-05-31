export async function getSearchTerm(searchTerm:string):Promise<WordData | undefined>{
  const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`, {next:{revalidate:1000}})
  const data = await resp.json()

  if(!data) return undefined
  if(!resp.ok) {
    throw new Error('there was an error')
  }
  return data
}