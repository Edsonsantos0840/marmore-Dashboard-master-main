'use client'
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import Link from "next/link";
import DelProduct from "../function/DelProduct";

export default function ProdutoCard({ data }: any) {

  return (

    <>
      <div
        key={data?.id}
        className="max-w-sm:flex-col content-center p-3 gap-2  bg-[#00000026]  rounded-xl shadow-lg mt-5 mb-5 "
      >
        <div className=" gap-3  ">
          <h2 className=" text-red-700 font-bold text-center text-xl p-6">
            {data?.Title}
          </h2>

          <div className="flex gap-5 flex-wrap justify-center">
            <Image
              src={data?.image1 || ""}
              alt={data?.title || ""}
              width={180}
              height={70}
              className="rounded-md shadow-lg border-2 border-[#00000047]"
            />

            {data.image2 ? (
              <Image
                src={data?.image2 || ""}
                alt={data?.title || ""}
                width={180}
                height={70}
                className="rounded-md shadow-lg border-2 border-[#00000047]"
              />
            ) : (
              <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047]">
                <h3>Não possui</h3>
              </div>
            )}

            {data.image3 ? (
              <Image
                src={data.image3 || ""}
                alt={data.title || ""}
                width={180}
                height={70}
                className="rounded-md shadow-lg border-2 border-[#00000047]"
              />
            ) : (
              <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047]">
                <h3>Não possui</h3>
              </div>
            )}

            {data.image4 ? (
              <Image
                src={data.image4 || ""}
                alt={data.title || ""}
                width={180}
                height={70}
                className="rounded-md shadow-lg border-2 border-[#00000047]"
              />
            ) : (
              <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047]">
                <h3>Não possui</h3>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center gap-5 text-red-700 p-4 bg-[#fecaca82] rounded-md shadow-md w-11/12 m-auto my-5"  >
            <p className="text-[#00a1bac7] ">
              {new Date(data?.createdAt).toLocaleDateString()}
            </p>
            <div className="flex justify-between items-center w-1/4 "  >
              <Link href={"/editarProdutos/" + data.id}>
              <FaRegEdit className="cursor-pointer" />
              </Link>
              <Link href={"/verProdutoUnico/" + data.id}>
              <BsFillSendFill
                className="cursor-pointer"/>
              </Link>
            </div>
              <DelProduct data={data.id} />
            <p className="text-[#00a1bac7] ">
              {new Date(data?.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <p className="  text-[#6b6b6b] text-center p-5 text-lg w-11/12 bg-white rounded-md m-auto my-5">
          {data?.description}
        </p>
      </div>
    </>
  );
}
