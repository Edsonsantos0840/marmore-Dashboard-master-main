import Image from "next/image";
import Link from "next/link";
import UseHttp from "../../hooks/UseHttp";
import FormLike from "../form/FormLike";
import { useEffect } from "react";

export default function CardUnico({ params, data }: any) {
  const url: string = "/api/comentarios"

  const { comment } = UseHttp(url)

// useEffect(() => {
//   if(comment){
//     console.log(comment[0]?.UserComments?.user

//   )
//    }
//   if(data){
//     console.log(data
//   )
//    }
// },[comment, data] )

  return (
    <>
      <div
        key={data?.id}
        className="max-w-sm:flex-col content-center p-1 gap-2  bg-[#00000026]  rounded-xl shadow-lg mt-5 mb-5 "
      >
        <div className=" gap-3  ">
          <h2 className=" text-red-700 font-bold text-center text-2xl p-1 mb-6">
            {data?.Title}
          </h2>
          <div>
            <div>
              <iframe
                scrolling="no"
                src={data?.image1 || ""}
                width={610}
                height={510}
                name="frame"
                className=" m-auto rounded-md hover:scale-110 hover:mt-10  left-[19%] ease-in overflow-hidden duration-300"
              >
                <h1>Seu navegador não é compaível com a tecnologia.</h1>
              </iframe>
            </div>

            <div className="flex gap-3 flex-wrap justify-center mt-16">
              <Link href={data?.image1} target="frame">
                <Image
                  src={data?.image1 || ""}
                  alt={data?.title || ""}
                  width={140}
                  height={70}
                  className="rounded-md shadow-lg border-2 border-[#00000047] cursor-pointer "
                />
              </Link>

              {data?.image2 ? (
                <Link href={data.image2} target="frame">
                  <Image
                    src={data?.image2 || ""}
                    alt={data?.title || ""}
                    width={140}
                    height={70}
                    className="rounded-md shadow-lg border-2 border-[#00000047] cursor-pointer "
                  />
                </Link>
              ) : (
                <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047]">
                  <h3>Não possui</h3>
                </div>
              )}

              {data?.image3 ? (
                <Link href={data.image3} target="frame">
                  <Image
                    src={data?.image3 || ""}
                    alt={data?.title || ""}
                    width={140}
                    height={70}
                    className="rounded-md shadow-lg border-2 border-[#00000047] cursor-pointer "
                  />
                </Link>
              ) : (
                <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047] cursor-pointer">
                  <h3>Não possui</h3>
                </div>
              )}

              {data?.image4 ? (
                <Link href={data?.image4} target="frame">
                  <Image
                    src={data?.image4 || ""}
                    alt={data?.title || ""}
                    width={140}
                    height={70}
                    className="rounded-md shadow-lg border-2 border-[#00000047] cursor-pointer "
                  />
                </Link>
              ) : (
                <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047] cursor-pointer">
                  <h3>Não possui</h3>
                </div>
              )}
            </div>

            <p className="  text-[#6b6b6b] text-center p-2 text-lg w-11/12 bg-white rounded-md m-auto my-5">
              <span>Descrição:</span> <br />
              {data?.description}
            </p>

            <div className="flex items-center justify-between text-xs p-3">
              <p className="text-[#00a1bac7] ">
                {new Date(data?.createdAt).toLocaleDateString()}
              </p>
              <div className=" flex gap-2 m-auto justify-center items-center">
                <FormLike dat={data} userId={params?.id} />
              </div>
              <div className="text-2xl text-[#026f80c7]"></div>
              <p className="text-[#00a1bac7] ">
                {new Date(data?.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full m-auto mt-4 py-2 px-8  font-semibold bg-slate-100 rounded-md shadow-lg ">
        <div className="flex gap-5 p-3 items-center ">
          <p className="  bg-[var(--corPrincipal)] py-1 px-3  rounded-full shadow-md text-white ">
            {data?.ProdutoComments?.length}
          </p>
          <h4>Comentários</h4>
        </div>
       {comment &&
           data?.ProdutoComments &&
            data?.ProdutoComments.map((e) => (
              <div key={e.id}>
                        <div className="flex gap-5 p-3 items-center ">
            
             
              <Image
              className="rounded-full"
              src={comment[0]?.UserComments?.user?.userImage || ""}
              alt={comment[0]?.UserComments?.user?.name || ""}
              width={40}
              height={40}
            />
            
            <h4>{comment[0]?.UserComments?.user?.name}</h4>
  
          </div>
                <p className="bg-slate-50 text-center text-blue-400" >{e.comments[0]?.comment}</p>
              </div>
            ))}
      </div>
    </>
  );
}
