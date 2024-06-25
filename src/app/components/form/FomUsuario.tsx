import Input from "./Input";
import { redirect } from "next/navigation";

export default function FormUsuario() {
  const url = "http://localhost:3000/api/users";
  const tipo = "usuario";

  async function handleSubmit(form: FormData): Promise<void> {
    'use server'
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    const user: object = {
      name,
      email,
      password,
      tipo,
    };
   
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    } catch (error) {
    
      console.log(error);
    }
   
    redirect("/login");
  }

  return (
    <form
      action={handleSubmit}
      className="flex flex-col justify-center items-center w-2/4 p-5 m-auto shadow-lg rounded-md"
    >
      <Input
        texto="Nome"
        type="text"
        placeholder="Digite seu Nome"
        name="name"
      />
      <Input
        texto="E-mail"
        type="email"
        placeholder="Digite seu E-mail"
        name="email"
      />
      <Input
        texto="Senha"
        type="password"
        placeholder="Digite seu Senha"
        password="password"
      />
      <Input
        texto="Confirmar Senha"
        type="password"
        placeholder="Confirme a Senha"
        confirmPass="confirmPass"
      />

        <Input type="submit" value="Enviar" />
    </form>
  );
}
