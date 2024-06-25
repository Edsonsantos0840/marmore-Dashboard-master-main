
import Link from "next/link";

export default function TopoAdd() {

  return (
    <>
      <div className="flex justify-around pt-6">
        <h1 className="text-lg" >Produtos</h1>
        <Link href={"/cadastroProduto"}>Adicionar Produto</Link>
      </div>
    </>
  );
}
