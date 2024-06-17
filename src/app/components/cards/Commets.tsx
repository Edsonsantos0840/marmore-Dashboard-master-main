

function Comments({ produtoId, userId }) {

  const handleCommentSubmit = async (form: FormData) => {
   'use server'
  const newComment = form.get('newComment')
 
    if (!newComment) return;

    try {
      const response = await fetch('/api/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment: newComment, produtoId, userId }),
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar comentário');
      }

    } catch (error) {
      console.error('Erro ao adicionar comentário:', error);
    }
  };
 

  return (
    <div>
      <h2>Comentários</h2>
      <form action={handleCommentSubmit} method='POST' >
        <textarea
          name='newComment'
          placeholder="Adicione um comentário"
        ></textarea>
        <button type="submit">Enviar</button>
      </form>

    </div>
  );
}

export default Comments;
