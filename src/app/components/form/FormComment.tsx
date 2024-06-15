
import CardProdutoCliente from "../cards/CardProdutoCliente";
import Image from "next/image";
import PostComment from "../function/PostComment";
import getData from "../function/GetData";


export default async function FormComment(props: { dat: any; userId: any  }) {
  const urlp = `http://localhost:3000/api/produtos/${props.dat}`;
  const urlC = `http://localhost:3000/api/comentarios`;
  const data: any = await getData(urlp)
  const comment: any = await getData(urlC)

  const filtraComment = comment.filter((e: any) => {
      if(e?.ProdutoComments?.produtoId === data.id){
        return e
      }
  } )

  return (
    <div>
      <CardProdutoCliente data={data} userId={props.userId} />
      <PostComment produtoId={props.dat} userId={props.userId}/>

      <div className=" w-full m-auto mt-4 py-2 px-8  font-semibold bg-slate-100 rounded-md shadow-lg ">
        <div className="flex gap-5 p-3 items-center ">
          <p className="  bg-[var(--corPrincipal)] py-1 px-3  rounded-full shadow-md text-white ">
            {filtraComment?.length}
          </p>
          <h4>Comentários</h4>
        </div>
        {filtraComment &&
          filtraComment.map((e: any, i: any) => (
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
