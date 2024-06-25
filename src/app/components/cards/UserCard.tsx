"use client";
import Image from "next/image";
import { FaRegEdit, FaRegCircle } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

import Link from "next/link";
import DelUser from "../function/DelUser";
import { useEffect, useState } from "react";

export default function UserCard({ data }: any) {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(data?.id);
  }, [data?.id]);

  return (
    <>
      <div
        key={data?.id}
        className=" text-xs md:text-base bg-[#00000016]  rounded-sm shadow-lg mt-5 mb-5 "
      >
        <div className="flex justify-between items-center ">
          {data.userImage && (
            <div className=" w-[30px] h-[30px] md:w-[50px] md:h-[50px] ">
              <Image
                className=" rounded-full "
                src={data.userImage || ""}
                alt={data.name || ""}
                width={60}
                height={60}
                id="ima"
              />
            </div>
          )}
          <h2 className="text-sm md:text-base text-red-700 font-bold w-[25%]  md:w-[16.5%]">
            {data.name}
          </h2>

          <p className=" hidden md:flex text-sm md:text-base  text-[#6b6b6b]  w-[21%] ">
            {data.email}
          </p>

          <p className="text-sm md:text-base  text-[#6b6b6b]  w-[21%]">
            {data.fone ? data.fone : "Não possui"}
          </p>

          <p className="text-sm md:text-base  text-[#6b6b6b]  w-[16%] ">
            {data.tipo}
          </p>

          <div className="flex justify-between  items-center gap-1 md:gap-2 text-red-700 p-2 md:p-4 bg-[#fecaca82] w-[18%]">
            <Link href={"editarUsers/" + data.id}>
              <FaRegEdit className="cursor-pointer" />
            </Link>

            <Link href={"verUser/" + data.id}>
              <BsFillSendFill className="cursor-pointer" />
            </Link>

            <DelUser data={id} />

            {data.status === "ativo" ? (
              <FaRegCircle className="bg-green-400 rounded-full" />
            ) : (
              <FaRegCircle className="bg-red-600 rounded-full" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
