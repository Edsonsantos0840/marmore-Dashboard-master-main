"use client";
import UseConvert from "../../hooks/UseConvert";
import ConvertImage from "../function/ConvertImage";
import { redirect } from "next/navigation";
import { postData } from "../function/FetchD";
import { apiProduçao } from "../../../../libs/utils";

export default function FormProdutos(): React.JSX.Element {
  const url: string = `/api/produtos`;

  const {
    image1,
    image2,
    image3,
    image4,
    convert642,
    convert643,
    convert644,
    convert645,
  } = UseConvert();

  async function handleSubmit(form: FormData): Promise<void> {
    const produto: object = {
      Title: form.get("Title"),
      image1,
      image2,
      image3,
      image4,
      category: form.get("category"),
      description: form.get("description"),
    };

    postData(url, produto);

    redirect("/produtos");
  }

  return (
    <form
      action={handleSubmit}
      className="flex flex-col items-center w-3/4  shadow-lg rounded-md p-10 "
    >
      <h1 className="text-3xl text-center font-bold ">Cadastro de Produtos</h1>
      <label className=" text-center  w-full ">
        Categoria:
        <select
          className=" w-full text-center rounded-md border border-[#4e1d1d87] py-2 "
          id="category"
          name="category"
        >
          <option value="">------Selecione uma Categoria</option>
          <option value="banheiros">Banheiros</option>
          <option value="cozinhas">Cozinhas</option>
          <option value="escadas">Escadas</option>
          <option value="exteriores">Exteriores</option>
        </select>
      </label>

      <label className=" w-full text-center">
        Título:
        <input
          className="'py-4  h-12 rounded-md w-full border border-[#4e1d1d87] text-center my-2 '"
          type="text"
          placeholder="Digite o Título"
          name="Title"
        />
      </label>

      <div className="flex justify-between items-center gap-6 ">
        <ConvertImage func={convert642} img={image1} />
        <ConvertImage func={convert643} img={image2} />
        <ConvertImage func={convert644} img={image3} />
        <ConvertImage func={convert645} img={image4} />
      </div>

      <label className=" text-center  w-full">
        description:
        <textarea name="description" placeholder="Descrição"></textarea>
      </label>

      <button>Enviar</button>
    </form>
  );
}
