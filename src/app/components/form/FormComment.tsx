import CardProdutoCliente from "../cards/CardProdutoCliente";
import getData from "../function/GetData";
import { apiProduçao } from "../../../../libs/utils";

export default async function FormComment(props: { dat: any; userId: any }) {
  const urlp = `/api/produtos/${props.dat}`;
  const data: any = await getData(urlp);

  return (
    <div className="relative">
      <CardProdutoCliente data={data} userId={props.userId} />
    </div>
  );
}
