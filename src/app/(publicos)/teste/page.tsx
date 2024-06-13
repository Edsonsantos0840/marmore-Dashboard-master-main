import getData from "../../components/function/GetData"

export default async function Teste() {
  const url = 'http://localhost:3000/api/produtos'

  const json = await getData(url)
    
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center " >
        {
            json &&
             json.map((e: any) => (
                <div key={e.id} >
                    <p className="text-3xl " >{e.category}</p>
                    <p>{e.Title}</p>
                </div>
             ))
        }
    </div>
  )
}
