
import CardProdutoUnico from '../../components/cards/CardProdutoUnico';
import getData from '../../components/function/GetData';

export default async function Exteriores() {
    const url = `http://localhost:3000/api/produtos`
    const data = await getData(url)
  
    const produtoExteriores = data.filter((e:any) => {
       if(e?.category.includes('exteriores')){
        return e
       }
    } )

  return (
    <section>
    <h1 className="pt-16">Exteriores</h1>
    { produtoExteriores&&
      produtoExteriores.map((produto: any) => (
      <div key={produto.id}>
        <CardProdutoUnico data={produto} />
      </div>
    ))}
  </section>
  )
}