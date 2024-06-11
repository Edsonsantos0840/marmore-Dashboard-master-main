import { useEffect} from "react";
import { useState } from "react";

import { revalidatePath } from 'next/cache';

export default async function UseNovoFetch(params, url, req, res) {
  const [dados, setdados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (req.method === 'GET') {
      // GET no banco de dados
      async function getFetch(){
        setLoading(true)
        try {
          const res = await fetch(url, {
            method: 'GET'
          });
          const json = await res.json()
          setdados(json)
        } catch (error) {
          setErr('Houve um erro ao criar o Post!')
          console.log(error)
        } finally {
          setLoading(false)
        }

      }

      // Revalide a página do post
       revalidatePath(`/verProdutoUnico/${params}`);
       getFetch()
  
      return res.status(200).json({ message: 'Post updated' });
    }
  },[params, req.method, res, url] )

  if (req.method === 'POST') {
    // Criao post no banco de dados
    setLoading(true)
    try {
        await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      });
    } catch (error) {
      setErr('Houve um erro ao criar o Post!')
      console.log(error)
    } finally {
      setLoading(false)
    }

    // Revalide a página do post
     revalidatePath(`/verProdutoUnico/${params}`);

    return res.status(200).json({ message: 'Post ' });
  }

  if (req.method === 'PUT') {
    // Atualize o post no banco de dados
    setLoading(true)
    try {
        await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      });
    } catch (error) {
      setErr('Houve um erro ao atualizar o Post!')
      console.log(error)
    } finally {
      setLoading(false)
    }


    // Revalide a página do post
     revalidatePath(`/verProdutoUnico/${params}`);

    return res.status(200).json({ message: 'Post updated' });
  }

  if (req.method === 'DELETE') {
    // Delete o post do banco de dados
    await fetch(url, {
      method: 'DELETE',
    });

    // Revalide a página do post
     revalidatePath(`/verProdutoUnico/${params}`);

    return res.status(200).json({ message: 'Post deleted' });
  }


  return {dados, setdados, loading, err }
}
