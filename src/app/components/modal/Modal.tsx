"use client";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { UpdateData } from "../function/FetchD";
import { apiProduçao } from "../../../../libs/utils";

export default function Modal(props: any) {
  
  const urlC: string = `${apiProduçao}/api/comentarios/${props.id}`;
  const fecha: React.MutableRefObject<any> = useRef();
  const [comment, setComment] = useState("");

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(urlC, fetcher);

  useEffect(() => {
    setComment(data?.comment);
  }, [data?.comment]);

  if (error) return <div>Erro ao buscar comentários</div>;
  if (!data) return <div>Loading...</div>;

  async function handleSubmit(e: any): Promise<void> {
    e.preventDefault();

    UpdateData(urlC, { comment });
    mutate();
    fechar();
  }

  function fechar(): void {
    fecha.current.style.display = "none";
  }

  return (
    <>
      <div
        className={
          " fixed bg-[#0000009c] h-[100%] w-full flex justify-center items-center z-10 "
        }
        ref={fecha}
      >
        <div className="bg-white h-[55%] w-[59%] flex flex-col justify-center items-center rounded-lg shadow-lg ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full p-4 rounded-md "
          >
            <h2> Editar Comentário:</h2>
            <div>
              <textarea
                className="w-[100%] h-13 p-3 "
                placeholder="Deixe seu Comentário"
                value={comment}
                onChange={(e: any) => setComment(e.target.value)}
              ></textarea>
            </div>
            {isLoading ? (
              <button
                type="submit"
                className="w-[20%] bg-[var(--corPrincipal)] text-white py-2 px-3 m-0 "
                disabled
              >
                Aguarde
              </button>
            ) : (
              <button
                type="submit"
                className="w-[20%] bg-[var(--corPrincipal)] text-white py-2 px-3 m-0 "
              >
                Editar
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
