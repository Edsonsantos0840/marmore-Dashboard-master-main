'use client'
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

export default function DelUser({ data }: any) {
  const url: string = `http://localhost:3000/api/users/${data.id}`;

  const router = useRouter()

  async function delUser(): Promise<void> {
    const confirmar: boolean = confirm("Voce realmente quer deletar?");
    if (confirmar) {
      try {
        await fetch(url, {
          method: "DELETE",
        });
      } catch (error) {
        console.log(error);
      }
    }

    router.push("/usuarios");
  }
  return (
    <>
      <FaTrash onClick={delUser} className="cursor-pointer" />
    </>
  );
}
