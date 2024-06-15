"use client";
import { FaTrash } from "react-icons/fa";

export default function DelProduct({ data }: any) {
  const url: string = `http://localhost:3000/api/produtos/${data.id}`;

  async function delProduct(): Promise<void> {
    try {
      await fetch(url, {
        method: "DELETE",
      });
      alert("Produto deletado com sucesso");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <FaTrash onClick={delProduct} className="cursor-pointer" />
    </>
  );
}
