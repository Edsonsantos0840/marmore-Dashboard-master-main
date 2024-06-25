// icones
"use client";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import useSWR from "swr";
import { useSession } from "next-auth/react";

export default function FormLike(data: any) {
  const url: string = "http://localhost:3000/api/like";
  const urlD: string = `http://localhost:3000/api/like/${data?.dat?.likes[0]?.id}`;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: like, mutate } = useSWR(url, fetcher);
  const { data: session } = useSession();

  const filtraLike = like?.filter((e: any) => {
    if (e?.produtoId === data?.dat?.id) {
      return e;
    }
  });

  const deuLike = filtraLike?.map((e: any) => {
    return e.userId;
  });

  async function handleSubmit(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();

    const count = 1;
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

      mutate();
    } catch (error) {
      console.log(error);
    }
  }

  // função para deletar like
  async function delLike(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();
    try {
      await fetch(urlD, {
        method: "DELETE",
      });

      mutate();
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao deletar");
    }
  }

  return (
    <>
      {deuLike && !deuLike.includes(session?.user?.email) ? (
        <form onSubmit={handleSubmit} className="flex">
          <button type="submit" name="like">
            <BsHandThumbsUp className="text-2xl" />
          </button>
          <p className=" font-bold bg-[var(--corPrincipal)]  text-xl text-center rounded-full shadow-md text-white w-10 h-10 ">
            {filtraLike?.length}
          </p>
        </form>
      ) : (
        <form onSubmit={delLike} className="flex">
          <button type="submit" name="lik">
            <BsHandThumbsDown className="text-2xl" />
          </button>
          <p className=" font-bold bg-[var(--corPrincipal)]  text-xl text-center rounded-full shadow-md text-white w-10 h-10 ">
            {filtraLike?.length}
          </p>
        </form>
      )}
    </>
  );
}
