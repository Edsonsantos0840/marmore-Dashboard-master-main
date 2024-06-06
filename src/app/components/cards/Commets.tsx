import { useState, useEffect } from 'react';

function Comments({ produtoId, userId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const url = 'http://localhost:3000/api/comment'

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/${url}?produtoId=${produtoId}`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Erro ao buscar comentários:', error);
    }
  };

  const handleCommentChange = (event:any) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event: any) => {
    event.preventDefault();
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

      setNewComment('');
      fetchComments();
    } catch (error) {
      console.error('Erro ao adicionar comentário:', error);
    }
  };

  return (
    <div>
      <h2>Comentários</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Adicione um comentário"
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p><strong>{comment.UserComments?.User?.name}</strong></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
