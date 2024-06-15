
import getData from "../../components/function/GetData"
import PostComment from "../../components/function/PostComment"

export default async function Teste() {
  // const url = 'http://localhost:3000/api/produtos'
  const url: string = "http://localhost:3000//api/comentarios";

  const data: any = await getData(url)
  
    
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center " >
        {/* {
            data &&
             data.map((e: any) => (
                <div key={e.id} >
                    <p className="text-3xl " >{e.category}</p>
                    <p>{e.Title}</p>
                </div>
             ))
        } */}
        {/* <PostComment/> */}
    </div>
  )
}
