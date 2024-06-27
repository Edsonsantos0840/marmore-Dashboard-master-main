"use client";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import { apiProduçao } from "../../../../libs/utils";
const url: string = `${apiProduçao}/api/comentarios`;
const urlC: string = `${apiProduçao}/api/comment`;

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Commentarios = (props: any) => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  const [comment, setComment] = useState("");

  if (error) return <div>Erro ao buscar comentários</div>;
  if (!data) return <div>Loading...</div>;

  async function handleSubmit(e: any) {
    e.preventDefault();
    const comenta: object = {
      comment,
      produtoId: props.produtoId,
      userId: props.userId,
    };
    
    try {
      await fetch(urlC, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comenta),
      });
    } catch (error) {
      console.log(error);
    }
    setComment("");
    mutate(url);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full p-4  ">
      { error && <p>Erro ao buscar comentários;
      </p> }
      {isLoading &&  <h2>Carregando Comentários</h2> } 
      <div className="flex w-full justify-around ">
        <label className="w-[100%] flex flex-col">
          Comentários:
          <textarea
            className="w-[95%] h-10"
            placeholder="Deixe seu Comentário"
            value={comment}
            onChange={(e: any) => setComment(e.target.value)}
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-[20%] bg-[var(--corPrincipal)] text-white py-2 px-3 mb-0"
        >
          Comentar
        </button>
      </div>
    </form>
  );
};

export default Commentarios;
