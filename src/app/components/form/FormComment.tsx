"use client";
import React, { useState } from "react";
import UseHttp from "../../hooks/UseHttp";
import { useRouter } from "next/navigation";
import Input from "./Input";
import CardProdutoCliente from "../cards/CardProdutoCliente";

export default function FormComment(props: { dat: any; userId: any }) {
  const urlp = `/api/produtos/${props.dat}`;
  const url: string = "/api/comment";
  // const urls: string = "/api/comentarios";
  const [comentario, setComentario] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);

  const router = useRouter();
  const { product: data } = UseHttp(urlp);


  async function handleSubmit(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();
    const comenta: object = {
      comment: comentario,
      produtoId: props.dat,
      userId: props.userId,
    };
    setLoading(true);
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comenta),
      });

      router.push(`/verProdutoUnico/${props.dat}`);
    } catch (error) {
      setErr(error);
      console.log(error);
    }
    setLoading(false);
  }
  return (
    <div>
      <CardProdutoCliente loading={loading} err={err} data={data} />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full p-4 shadow-lg rounded-md "
      >
        {err && <p>{err}</p>}
        <div className="flex w-full justify-center items-end gap-1">
          <label className="w-[90%]">
            Comentário:
            <textarea
              className="w-[90%] h-10"
              placeholder="Deixe seu Comentário"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            ></textarea>
          </label>
          {loading ? (
            <Input type="submit" value="Aguarde" disabled />
          ) : (
            <button
              className="w-[10%] bg-[var(--corPrincipal)] text-white py-2 px-3"
              type="submit"
            >
              Comentar
            </button>
          )}
        </div>
      </form>
 
    </div>
  );
}
