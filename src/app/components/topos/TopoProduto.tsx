
import Link from "next/link";

export default function TopoAdd() {

  return (
    <>
      <div className="flex justify-around pt-6">
        <h1>Produtos</h1>
        <Link href={"/cadastroProduto"}>Adicionar Produto</Link>
      </div>
    </>
  );
}
