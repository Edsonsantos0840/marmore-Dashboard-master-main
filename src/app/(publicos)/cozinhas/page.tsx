// import CardProdutoUnico from "../../components/cards/CardProdutoUnico";
// import getData from "../../components/function/GetData";
// import { apiProduçao } from "../../../../libs/utils";

export default async function Cozinhas() {
//   const url = `${apiProduçao}/api/produtos`;
//   const data: any  = await getData(url);

//   const produtoCozinhas = data.filter((e: any) => {
//     if (e?.category.includes("cozinhas")) {
//       return e;
//     }
//   });

  return (
    <section>
      <h1 className="pt-16">Cozinhas</h1>
      {/* {produtoCozinhas &&
        produtoCozinhas.map((produto: any) => (
          <div key={produto.id}>
            <CardProdutoUnico data={produto} />
          </div>
        ))} */}
    </section>
  );
}
