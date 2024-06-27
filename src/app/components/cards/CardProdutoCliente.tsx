"use client";
import useSWR from "swr";
import CardUnico from "../../components/cards/CardUnico";
import { BsReplyAllFill } from "react-icons/bs";
import Modal from "../modal/Modal";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Commentarios from "../function/Comentarios";
import { delData } from "../function/FetchD";
import { apiProduçao } from "../../../../libs/utils";

export default function CardProdutoCliente(props: any) {
  const [id, setId] = useState("");
  const urlp = `/api/produtos/${props.data.id}`;
  const urlD = `/api/comentarios/${id}`;
  const urlC = `/api/comentarios`;
  const [abre, setAbre] = useState(false);

  const { data: session } = useSession();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data } = useSWR(urlp, fetcher);
  const { data: comment, mutate } = useSWR(urlC, fetcher);

  const filtraComment = comment?.filter((e: any) => {
    if (e?.ProdutoComments?.produtoId === data?.id) {
      return e;
    }
  });

  async function delComment(): Promise<void> {
    const confirmar: boolean = confirm("Voce realmente quer deletar?");
    if (confirmar) {
      delData(urlD);
      mutate(comment);
    }
  }
  mutate();

  return (
    <section className="pt-12">
      {abre && (
        <div className="relative">
          <Modal id={id} />
          <span
            className=" fixed top-40 right-20 bg-red-600 rounded-md text-xl text-white py-1 px-2 shadow-md cursor-pointer hover:scale-110 z-20 "
            onClick={() => setAbre(false)}
          >
            X
          </span>
        </div>
      )}
      <div className="flex p-1 justify-between items-center">
        {props.data && (
          <>
            <h1 className="text-xl" >{props.data.category}</h1>
            <div className="flex gap-2  items-center">
              <Link href={`/${props.data.category}`}>
                <BsReplyAllFill className="text-2xl cursor-pointer" />
              </Link>

              <h2>Voltar </h2>
            </div>
          </>
        )}
      </div>
      {props.data && <CardUnico data={props.data} />}
      <div className=" w-full m-auto mt-4 py-2 px-8  font-semibold bg-slate-100 rounded-md shadow-lg  ">
        <div className="flex gap-5 p-3 items-center ">
          <p className="  bg-[var(--corPrincipal)] py-1 px-3  rounded-full shadow-md text-white ">
            {filtraComment?.length}
          </p>
          <h4>Comentários</h4>
        </div>
        <Commentarios produtoId={props.data.id} userId={session?.user.email} />
        {filtraComment &&
          filtraComment.map((e: any, i: any) => (
            <div key={i} className="relative" onMouseOver={() => setId(e.id)}>
              <div
                className=" flex justify-between items-center "
                onMouseOver={() => setAbre(false)}
              >
                <div className="flex gap-10 p-3 items-center ">
                  <Image
                    className="rounded-full"
                    src={e?.UserComments?.user?.userImage || ""}
                    alt={e?.UserComments?.user?.name || ""}
                    width={40}
                    height={40}
                  />
                  <h4>{e?.UserComments?.user?.name}</h4>
                </div>
                <div>
                  {e?.UserComments?.user?.email === session?.user?.email && (
                    <div className="flex gap-3 ">
                      <FaRegEdit
                        className="cursor-pointer"
                        onClick={() => setAbre(true)}
                      />
                      <FaTrash
                        className="cursor-pointer"
                        onClick={delComment}
                      />
                    </div>
                  )}
                </div>
              </div>
              <p className="bg-slate-50 text-center text-blue-400">
                {e.comment}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
