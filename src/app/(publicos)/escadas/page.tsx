import React from "react";
import CardProdutoUnico from "../../components/cards/CardProdutoUnico";
import getData from "../../components/function/GetData";
import { apiProduçao } from "../../../../libs/utils";

export default async function Escadas() {
  const url = `/api/produtos`;
  const data: any  = await getData(url);

  const produtoEscadas = data.filter((e: any) => {
    if (e?.category.includes("escadas")) {
      return e;
    }
  });

  return (
    <section>
      <h1 className="pt-16">Escadas</h1>
      {produtoEscadas &&
        produtoEscadas.map((produto: any) => (
          <div key={produto.id}>
            <CardProdutoUnico data={produto} />
          </div>
        ))}
    </section>
  );
}
