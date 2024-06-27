"use client";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { delData } from "./FetchD";
import { apiProduçao } from "../../../../libs/utils";

export default function DelUser({ data }: any) {
  const url: string = `/api/users/${data}`;

  const router = useRouter();

  async function delUser(): Promise<void> {
    const confirmar: boolean = confirm("Voce realmente quer deletar?");
    if (confirmar) {
      delData(url)
    }

    router.push("/usuarios");
  }
  return (
    <>
      <FaTrash onClick={delUser} className="cursor-pointer" />
    </>
  );
}
