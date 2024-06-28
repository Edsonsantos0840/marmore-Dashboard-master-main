'use client'
import { revalidateTag } from "next/cache";
import { useRef } from "react";


export default function Modal() {
  const url: string = "http://localhost:3000//api/comment";
  const fecha: React.MutableRefObject<any> = useRef();


  // async function handleSubmit(form: FormData): Promise<void> {
  
  //   const comment = form.get("comentario");

  //   const comenta: object = {
  //     comment,
  //   };

  //   try {
  //     await fetch(url, {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(comenta),
  //     });

  //     revalidateTag("comm");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
   
  function fechar(): void {
    fecha.current.style.display = "none";
  }
  function mostrar(): void {
    fecha.current.style.display = "flex";
  }

  return (
    <>
      <div className={" fixed bg-[#0000009c] h-[100%] w-full flex justify-center items-center z-10 " }  >
        <div className="bg-white h-[55%] w-[59%] flex flex-col justify-center items-center rounded-lg shadow-lg ">
          <form
            action={''}
            className="flex flex-col w-full p-4 rounded-md "
          >
            <h2 > Editar Comentário:</h2>
            <div>
              <textarea
                id="tes"
                className="w-[100%] h-13 "
                placeholder="Deixe seu Comentário"
                name="comentario"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[20%] bg-[var(--corPrincipal)] text-white py-2 px-3 m-0 "
            >
              Editar
            </button>
          </form>
        </div>
        <span className=" absolute right-5 top-5 bg-red-600 rounded-md text-xl text-white py-1 px-2 shadow-md cursor-pointer hover:scale-110"  >
          X
        </span>
      </div>
    </>
  );
}
