"use client";
import React, { useState } from "react";
import Input from "./Input";
import UseConvert from "../../hooks/UseConvert";
import ConvertImage from "../function/ConvertImage";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { UpdateData } from "../function/FetchD";
import { apiProduçao } from "../../../../libs/utils";

export default function FormEditaProduto({ params }: any) {
  const url = `${apiProduçao}/api/produtos/${params.id}`;
  const [category, setCategory] = useState<string>("");
  const [Title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: product, error, isLoading, mutate } = useSWR(url, fetcher);

  const router = useRouter();

  const {
    image1,
    image2,
    image3,
    image4,
    setImage1,
    setImage2,
    setImage3,
    setImage4,
    convert642,
    convert643,
    convert644,
    convert645,
  } = UseConvert();

  setTitle(product.Title);
  setImage1(product.image1);
  setImage2(product.image2);
  setImage3(product.image3);
  setImage4(product.image4);
  setCategory(product.category);
  setDescription(product.description);

  async function handleSubmit(form: FormData): Promise<void> {
    "use server";
    const produto: object = {
      Title: form.get("Title"),
      image1,
      image2,
      image3,
      image4,
      category: form.get("category"),
      description: form.get("description"),
    };

    UpdateData(url, produto);
    mutate(product);
    alert("Produto editado com sucesso");
    router.push("/produtos");
  }

  return (
    <form
      action={handleSubmit}
      className="flex flex-col items-center w-3/4  shadow-lg rounded-md p-10 "
    >
      <h1 className="text-3xl text-center font-bold ">Cadastro de Usuário</h1>
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
          name="Title"
          placeholder="Digite o Título"
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

      {isLoading ? (
        <Input type="submit" value="Aguarde" disabled />
      ) : (
        <Input type="submit" value="Enviar" />
      )}
      {error && <p>Houve um erro</p>}
    </form>
  );
}
