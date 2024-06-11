// icones
"use client";
import { BsHandThumbsUp} from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UseHttp from "../../hooks/UseHttp";

export default function FormLike(data: any) {
  const url: string = "http://localhost:3000/api/like";
  const urlMl: string = `http://localhost:3000/api/like/${data?.dat?.id}`;
  const [err, setErr] = useState<string>("");
  const [count, setCount] = useState<number>(1);

  const {like} = UseHttp(urlMl)
   
  const router = useRouter();
  
  //  useEffect(() => {
  //   if(data){
  //     console.log(data?.dat?.id)
  //   }
  //  },[] )

  //funçao para criar like

  async function handleSubmit(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();

    setCount(count);
    const curtir: object = {
      like: count,
      produtoId: data?.dat?.id,
      userId: data.userId,
    };

    try {
        await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(curtir),
      });


    } catch (error) {
      setErr("Houve um erro ao curtir");
      console.log(error);
    }
    router.refresh()
    router.push(`http://localhost:3000/verProdutoUnico/${data?.dat?.id}`)
  }

  return (
    <>
      {err && <p>{err}</p>}
        <button onClick={handleSubmit}>
          <BsHandThumbsUp className="text-2xl" />
        </button> 
        <p className=" font-bold bg-[var(--corPrincipal)]  text-xl text-center rounded-full shadow-md text-white w-10 h-10 " >{like?.length}</p>
    </>
  );
}
