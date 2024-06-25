
import { FaTrash } from "react-icons/fa";
import { delData } from "./FetchD";
import useSWR, { mutate } from "swr"; 

export default function DelProduct({ data }: any) {
  const url: string = `http://localhost:3000//api/produtos/${data}`;

  async function delProduct(): Promise<void> {
    delData(url)
    mutate(url)
  }
  return (
    <>
      <FaTrash onClick={delProduct} className="cursor-pointer" />
    </>
  );
}
