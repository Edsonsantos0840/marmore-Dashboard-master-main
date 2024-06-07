// icones
"use client";
import { BsHandThumbsUp} from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormLike(data: any) {
  const url: string = "http://localhost:3000/api/like";

  const [err, setErr] = useState<string>("");
  const [count, setCount] = useState<number>(1);

  const router = useRouter();
  // console.log(usuarios[0]?.userId)
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
  }

  return (
    <>
      {err && <p>{err}</p>}
        <button onClick={handleSubmit}>
          <BsHandThumbsUp className="text-2xl" />
        </button> 
    </>
  );
}
