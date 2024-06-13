"use client";
import React, { useEffect, useState } from "react";
import UseHttp from "../../hooks/UseHttp";
import { useRouter } from "next/navigation";
import Input from "./Input";
import CardProdutoCliente from "../cards/CardProdutoCliente";
import Image from "next/image";
import { revalidateTag } from "next/cache";

export default function FormComment(props: { dat: any; userId: any }) {
  const urlp = `/api/produtos/${props.dat}`;
  const url: string = "/api/comment";
  const urlMc: string = `/api/comentarios/${props.dat}`;
  const [comentario, setComentario] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);

  const { comment } = UseHttp(urlMc);

  const router = useRouter();
  const { product: data } = UseHttp(urlp);

  // useEffect(() => {
  //   if(comment) {
  //     console.log(comment)
  //   }
  // },[comment] )

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
       revalidateTag('comm')
      // router.push(`/verProdutoUnico/${props.dat}`);
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
        <div className="flex w-full justify-around place-items-center">
          <label className="w-[100%] flex flex-col">
            Comentários:
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
              className="w-[20%] bg-[var(--corPrincipal)] text-white py-2 px-3 mb-0"
              type="submit"
            >
              Comentar
            </button>
          )}
        </div>
      </form>

      <div className=" w-full m-auto mt-4 py-2 px-8  font-semibold bg-slate-100 rounded-md shadow-lg ">
        <div className="flex gap-5 p-3 items-center ">
          <p className="  bg-[var(--corPrincipal)] py-1 px-3  rounded-full shadow-md text-white ">
            {comment?.length}
          </p>
          <h4>Comentários</h4>
        </div>
        {comment &&
          comment.map((e: any, i: any) => (
            <div key={i}>
              <div className="flex gap-5 p-3 items-center ">
                <Image
                  className="rounded-full"
                  src={e?.UserComments?.user?.userImage || ""}
                  alt={e?.UserComments?.user?.name || ""}
                  width={40}
                  height={40}
                />

                <h4>{e?.UserComments?.user?.name}</h4>
              </div>
              <p className="bg-slate-50 text-center text-blue-400">
                {e.comment}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
