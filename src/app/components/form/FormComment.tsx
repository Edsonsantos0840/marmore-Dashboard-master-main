
import CardProdutoCliente from "../cards/CardProdutoCliente";
import PostComment from "../function/PostComment";
import getData from "../function/GetData";
import Commentarios from "../function/Comentarios";


export default async function FormComment(props: { dat: any; userId: any}) {
  const urlp = `http://localhost:3000/api/produtos/${props.dat}`;
  const data: any = await getData(urlp);

  return (
    <div className="relative" >

      <CardProdutoCliente data={data} userId={props.userId} />
      {/* <Commentarios produtoId={props.dat} userId={props.userId} /> */}

    </div>
  );
}
