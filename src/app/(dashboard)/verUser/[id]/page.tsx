
import { BsReplyAllFill } from "react-icons/bs";
import UserCardUnico from "../../../components/cards/CardUserUnico";
import getData from "../../../components/function/GetData";
import Link from "next/link";
import { apiProduçao } from "../../../../../libs/utils";

export default async function VerUsuario({ params }: any) {
  const url: string = `${apiProduçao}/api/users/${params.id}`;

  const data: any = await getData(url);

  return (
    <section className="w-full md:absolute md:top-0 md:left-[20%]  md:w-10/12 m-auto p-1 ">
      <div className="flex p-3 justify-around items-center">
        <h1>Usuário</h1>
        <div className="flex gap-3  items-center">
          <Link href={"/usuarios"}>
          <BsReplyAllFill className="text-3xl cursor-pointer" />
          </Link>

          <h2>Voltar </h2>
        </div>
      </div>
      {data && <UserCardUnico data={data} />}
    </section>
  );
}
