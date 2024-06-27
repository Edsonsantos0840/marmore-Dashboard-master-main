import CardProdutoUnico from "../../components/cards/CardProdutoUnico";
import getData from "../../components/function/GetData";
import { apiProduçao } from "../../../../libs/utils";

export default async function Banheiros() {
  const url = `/api/produtos`;
  const data: any  = await getData(url);

  const produtoBanheiro = data.filter((e: any) => {
    if (e?.category.includes("banheiros")) {
      return e;
    }
  });

  return (
    <section>
      <h1 className="pt-16">Banheiros</h1>
      {produtoBanheiro &&
        produtoBanheiro.map((produto: any) => (
          <div key={produto.id}>
            <CardProdutoUnico data={produto} />
          </div>
        ))}
    </section>
  );
}
