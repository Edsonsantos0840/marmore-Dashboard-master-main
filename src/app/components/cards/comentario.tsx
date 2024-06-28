import Comments from "./Commets";

function ProdutoPage({ produtoId, userId }) {
  // Código para buscar os dados do produto

  return (
    <div>
      {/* Código para exibir os detalhes do produto */}
      <Comments produtoId={produtoId} userId={userId} />
    </div>
  );
}

export default ProdutoPage;
