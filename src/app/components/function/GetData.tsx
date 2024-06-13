export default async function getData(url: any){
    const res = await fetch(url)
     
    if(!res.ok){
      throw new Error('falha ao buscar os produtos')
    }
      const data = await res.json()
  
      return data
  }