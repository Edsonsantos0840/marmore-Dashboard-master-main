import { getCurrentUser } from "../../../../libs/session";
import Link from "next/link";
import BtnLogout from "../botões/btnLogout";
import MostraEsconde from "../MostraEsconde";

export default async function NavPublicos() {
  const user: any = await getCurrentUser();

  return (
    <nav className="flex  gap-4 justify-between px-5 shadow-xl mb-8 bg-red-700 text-white   fixed w-full ">
      <MostraEsconde />
      <div className="flex justify-between items-center gap-6">
        <Link
          href={"/"}
          className="hover:scale-110 hover:text-red-700 hover:bg-white p-2"
        >
          Início
        </Link>
        <Link
          href={"/contato"}
          className="hover:scale-110 hover:text-red-700 hover:bg-white p-2"
        >
          Contatos
        </Link>
        {!user ? (
          <Link
            href={"/login"}
            className="hover:scale-110 hover:text-red-700 hover:bg-white p-2"
          >
            Login
          </Link>
        ) : (
          <BtnLogout />
        )}
      </div>
    </nav>
  );
}
