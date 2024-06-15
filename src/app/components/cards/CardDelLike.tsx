'use clinte'
import { BsHandThumbsDown } from "react-icons/bs";

export default function CardDelLike({ dat }) {
  const urlD: string = `http://localhost:3000/api/like/${dat?.likes[0]?.id}`;

  async function delLike(): Promise<void> {
    try {
      await fetch(urlD, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao deletar");
    }
  }

  return (
    <>
      <button onClick={delLike}>
        <BsHandThumbsDown className="text-2xl" />
      </button>
      <p className=" font-bold bg-[var(--corPrincipal)]  text-xl text-center rounded-full shadow-md text-white w-10 h-10 ">
        {dat?.likes?.length}
      </p>
    </>
  );
}
