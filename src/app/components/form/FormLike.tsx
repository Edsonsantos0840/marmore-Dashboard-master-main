// icones
"use client";
import { AiOutlineLike } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/navigation";
import UseHttp from "../../hooks/UseHttp";

export default function FormLike(props: { dat: string; userId: string; }) {
  const url: string = "http://localhost:3000/api/like";
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  const router = useRouter();
 
  const {like}: {   
    user: Array<object>;
    product: Array<object>;
    comment: object[];
    like: Array<object>;
    loading: boolean;
    err: boolean;
} = UseHttp(url)

  //funçao para criar like
  async function handleSubmit(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();
    setCount(count);
    const curtir: object = {
      like: count,
      produtoId: props.dat,
      userId: props.userId,
    };
    setLoading(true);
    try {
        await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(curtir),
      });

      router.refresh();
    } catch (error) {
      setErr(error);
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <>
    {loading && <h1>Carregando..</h1>}
    { err && <p>{err}</p> }
    
    <button onClick={handleSubmit}>
        <AiOutlineLike className="text-3xl" />
      </button>
      <p className=" font-bold bg-[var(--corPrincipal)]  text-xl px-3 py-1 rounded-full shadow-md text-white " > {like?.length}</p>
    </>
  );
}
