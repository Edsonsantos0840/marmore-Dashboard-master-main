
import CardProdutoUnico from '../../components/cards/CardProdutoUnico';
import getData from '../../components/function/GetData';

export default async function Cozinhas() {
    const url = `http://localhost:3000/api/produtos`
    const data = await getData(url)
  
    const produtoCozinhas = data.filter((e:any) => {
       if(e?.category.includes('cozinhas')){
        return e
       }
    } )

  return (
    <section>
    <h1 className="pt-16">Cozinhas</h1>
    { produtoCozinhas &&
      produtoCozinhas.map((produto: any) => (
      <div key={produto.id}>
        <CardProdutoUnico data={produto} />
      </div>
    ))}
  </section>
  )
}