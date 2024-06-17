import Link from "next/link";
import CardUnico from "../../components/cards/CardUnico";
import { BsReplyAllFill } from "react-icons/bs";

export default function CardProdutoCliente(props: any) {
 
  return (
    <section className="pt-16">
      <div className="flex p-3 justify-between items-center">

        {props.data && (
          <>
            <h1>{props.data.category}</h1>
            <div className="flex gap-3  items-center">
              <Link href={`/${props.data.category}`}>
                <BsReplyAllFill className="text-3xl cursor-pointer" />
              </Link>

              <h2>Voltar </h2>
            </div>
          </>
        )}
      </div>
      {props.data && <CardUnico data={props.data} />}
    </section>
  );
}
