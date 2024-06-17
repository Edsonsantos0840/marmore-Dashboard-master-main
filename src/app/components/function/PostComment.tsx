"use server";
import { revalidateTag } from "next/cache";

export default async function PostComment(props: any) {
  const url: string = "http://localhost:3000//api/comment";

  async function handleSubmit(form: FormData): Promise<void> {
    "use server";
    const comment = form.get("comentario");

    const comenta: object = {
      comment,
      produtoId: props.produtoId,
      userId: props.userId,
    };

    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comenta),
      });

      revalidateTag("comm");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        action={handleSubmit}
        className="flex flex-col w-full p-4 shadow-lg rounded-md "
      >
        <div className="flex w-full justify-around place-items-center">
          <label className="w-[100%] flex flex-col">
            Comentários:
            <textarea
              id="com"
              className="w-[90%] h-10"
              placeholder="Deixe seu Comentário"
              name="comentario"
            ></textarea>
          </label>
          {/* {loading ? (
            <button type="submit" disabled className="w-[20%] bg-[var(--corPrincipal)] text-white py-2 px-3 mb-0">Aguarde</button>
          ) : ( */}
          <button
            type="submit"
            className="w-[20%] bg-[var(--corPrincipal)] text-white py-2 px-3 mb-0"
          >
            Comentar
          </button>
          {/* )} */}
        </div>
      </form>
    </>
  );
}
