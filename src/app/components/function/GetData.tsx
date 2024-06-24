
export default async function getData(url: any){
  
    const res = await fetch(url)
     
    if(!res.ok){
      throw new Error('falha ao buscar os dados')
    }
      const data = await res.json()
      // console.log('Data fetched from API:', data)
       
      return data
  }

 