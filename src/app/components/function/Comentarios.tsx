'use client'
import { useSession } from 'next-auth/react';
import { useState } from 'react';
// components/LitaComment.js
import useSWR, { mutate } from 'swr';
const url: string = "http://localhost:3000/api/comentarios";
const urlC: string = "http://localhost:3000/api/comment";


const fetcher = (url: any) => fetch(url).then((res) => res.json());

const Commentarios = (props: any) => {
  const { data, error } = useSWR(url, fetcher);
  const [comment, setComment] = useState('')

  if (error) return <div>Failed to load Comments</div>;
  if (!data) return <div>Loading...</div>;

  const handleUpdateComment = async (updatedComment: any) => {
    // Mutate the local data
    mutate(url, async (Comments: any) => {
      const updatedComments = Comments.map((Comment: any) =>
        Comment.id === updatedComment.id ? updatedComment : Comment
      );
      return updatedComments;
    }, false);

  };
  async function handleSubmit(e: any){
    e.preventDefault()
    const comenta: object = {
        comment,
        produtoId: props.produtoId,
        userId: props.userId,
      };
  
      try {
        await fetch(urlC, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(comenta),
        });
  
      
      } catch (error) {
        console.log(error);
      }
     setComment('')
    mutate(url);
  }

  return (
            <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full p-4  "
      >
        <div className="flex w-full justify-around ">
          <label className="w-[100%] flex flex-col">
            Comentários:
            <textarea
              className="w-[95%] h-10"
              placeholder="Deixe seu Comentário"
            value = {comment}
            onChange={(e: any) => setComment(e.target.value) }
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-[20%] bg-[var(--corPrincipal)] text-white py-2 px-3 mb-0"
          >
            Comentar
          </button>
        </div>
      </form>
  );
};

export default Commentarios;
