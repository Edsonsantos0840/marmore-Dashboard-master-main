
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsHandThumbsDown } from "react-icons/bs";

export default function CardDelLike({ data }) {
  const urlD: string = `http://localhost:3000/api/like/${data.likes[0]?.id}`;
  const [troca, setTroca] = useState(false)
 const [err, setErr] = useState('')

  const router = useRouter()
  
 
  async function delUser(): Promise<void> {
    setTroca(!troca)

      try {
        await fetch(urlD, {
          method: "DELETE",
        });
      } catch (error) {
        setErr('Erro ao deletar');
        console.log(error);
      }
      router.push(`http://localhost:3000/verProdutoUnico/${data.id}`)
    router.refresh();
  
  }

  return (
    <>
    {err && <p>{err}</p> }
      <button onClick={delUser} ><BsHandThumbsDown className="text-2xl"/></button>
    </>
  );
}
