import TopoAdd from "../../components/topos/TopoProduto";
import ProdutoCard from "../../components/cards/ProdutoCard";
import getData from "../../components/function/GetData";

export default async function Produtos() {
  const url: string = `http://localhost:3000/api/produtos `;

  const product: any = await getData(url);

  return (
    <section className="w-full md:absolute md:top-0 md:left-[19%]  md:w-10/12 m-auto pr-1 p-1">
      <TopoAdd />
      {product &&
        product.map((produto: any) => (
          <div key={produto.id}>
            <ProdutoCard data={produto} />
          </div>
        ))}
    </section>
  );
}
