// icones
'use client'
import { BsHandThumbsUp} from "react-icons/bs";

export default function FormLike(data: any) {
  const url: string = "http://localhost:3000/api/like";
 
  //funçao para criar like
  async function handleSubmit(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();

   const count = 1
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
    } catch (error) {

      console.log(error);
    }

  }

  return (
    <>
        <button onClick={handleSubmit}>
          <BsHandThumbsUp className="text-2xl" />
        </button> 
        <p className=" font-bold bg-[var(--corPrincipal)]  text-xl text-center rounded-full shadow-md text-white w-10 h-10 " >{data?.dat?.likes?.length}</p>
    </>
  );
}
