import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsHandThumbsDown } from "react-icons/bs";
import UseHttp from "../../hooks/UseHttp";

export default  function CardDelLike({ data }) {
  const urlMl: string = `http://localhost:3000/api/like/${data.id}`;
  const urlD: string = `http://localhost:3000/api/like/${data.likes[0]?.id}`;
  const [err, setErr] = useState("");

  const {like} = UseHttp(urlMl)
  const router = useRouter();

  // const lik = await prisma.likes.findMany()

  // useEffect(() => {
  //   console.log(lik)
  // },[lik] )

  async function delUser(): Promise<void> {
    try {
        await fetch(urlD, {
        method: "DELETE",
      });

    } catch (error) {
      setErr("Erro ao deletar");
      console.log(error);
    }
    router.refresh()
    router.push(`http://localhost:3000/verProdutoUnico/${data.id}`)
  }

  return (
    <>
      {err && <p>{err}</p>}
      <button onClick={delUser}>
        <BsHandThumbsDown className="text-2xl" />
      </button>
      <p className=" font-bold bg-[var(--corPrincipal)]  text-xl text-center rounded-full shadow-md text-white w-10 h-10 " >{like?.length}</p>
    </>
  );
}
