
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsHandThumbsDown } from "react-icons/bs";

export default function CardDelLike({ data }) {
  const url: string = `http://localhost:3000/api/like/${data}`;
const [err, setErr] = useState(null)

  const router = useRouter()
 

  async function delUser(): Promise<void> {

      try {
        await fetch(url, {
          method: "DELETE",
        });
      } catch (error) {
        setErr('Erro ao deletar');
        console.log(error);
      }
  
    router.refresh();
  }

  return (
    <>
    {err && <p>{err}</p> }
      <button onClick={delUser} ><BsHandThumbsDown /></button>
    </>
  );
}
