// import { BsReplyAllFill } from "react-icons/bs";
// import CardUnico from "../../../components/cards/CardUnico";
// import getData from "../../../components/function/GetData";
// import Link from "next/link";
// import { apiProduçao } from "../../../../../libs/utils";

export default async function VerProduto({ params }: any) {
//   const url: string = `${apiProduçao}/api/produtos/${params.id}`;
//   const data: any = await getData(url);

  return (
    <section className=" w-full md:absolute md:top-0 md:left-[18%]  md:w-10/12 m-auto p-1 ">
      {/* <div className="flex p-3 justify-around items-center">
        <h1>Produto</h1>
        <div className="flex gap-3  items-center">
          <Link href={"/produtos"}>
            <BsReplyAllFill className="text-3xl cursor-pointer" />
          </Link>
          <h2>Voltar </h2>
        </div>
      </div>
      {data && <CardUnico data={data} />} */}
    </section>
  );
}
