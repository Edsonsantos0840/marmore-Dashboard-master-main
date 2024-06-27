"use client";
import UseConvert from "../../hooks/UseConvert";
import ConvertImage from "../function/ConvertImage";
import { redirect } from "next/navigation";
import { postData } from "../function/FetchD";
import { apiProduçao } from "../../../../libs/utils";

export default function FormUsuario() {
  const url: string = `/api/users`;

  const { userImage, convertToBase64 } = UseConvert();

  async function handleSubmit(form: FormData): Promise<void> {
    const usuario: object = {
      name: form.get("name"),
      email: form.get("email"),
      password: form.get("password"),
      fone: form.get("fone"),
      userImage,
      tipo: form.get("tipo"),
      status: form.get("status"),
    };

    postData(url, usuario);
    alert("Usuário cadastrado com sucesso");
    redirect("/usuarios");
  }

  return (
    <form
      action={handleSubmit}
      className="flex flex-col justify-center items-center w-3/4 p-8 shadow-lg rounded-md "
    >
      <h1 className="text-3xl text-center mb-8 font-bold ">
        Cadastro de Usuário
      </h1>
      <input type="text" placeholder="Digite seu Nome" name="name" />
      <input type="email" placeholder="Digite seu E-mail" name="email" />
      <input type="password" placeholder="Digite seu Senha" name="password" />
      <input type="tel" placeholder="Digite seu Telefone" name="fone" />
      <div className=" flex justify-between w-full gap-2 ml-4">
        <label className=" text-center py-2 w-full rounded-md border border-[#4e1d1d87] my-2">
          <select id="tipo" name="tipo">
            <option value="">Escolha o tipo</option>
            <option value="adimin">Administrador</option>
            <option value="colaborador">Colaborador</option>
          </select>
        </label>

        <label className=" text-center py-2 w-full rounded-md border border-[#4e1d1d87] my-2">
          <select id="status" name="status">
            <option value="">Escolha o status</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </label>
      </div>
      <ConvertImage func={convertToBase64} img={userImage} />

      <button>Enviar</button>
    </form>
  );
}
