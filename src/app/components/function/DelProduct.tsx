
import { FaTrash } from "react-icons/fa";
import { delData } from "./FetchD";
import useSWR, { mutate } from "swr"; 
import { apiProduçao } from "../../../../libs/utils";

export default function DelProduct({ data }: any) {
  const url: string = `/api/produtos/${data}`;

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
