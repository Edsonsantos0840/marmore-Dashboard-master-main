import { NextResponse } from "next/server";
import { db as prisma } from "../../../../../libs/db"


export async function GET(request, { params }) {
  const produto = await prisma.produto.findUnique({
    where: {
      id: params.id,
    },
    select:{
      category: true,
      createAt: true,
      description: true,
      id: true,
      image1: true,
      image2: true,
      image3: true,
      image4: true,
      likes: true,
      ProdutoComments:{
          select:{
            comments: true,
            id: true,
          },
      },
      Title: true,
    }
  });

  return NextResponse.json(produto);
}

export async function PUT(request, { params }) {
  const data = await request.json();

  const produtoAtualiza = await prisma.produto.update({
    where: {
      id: params.id,
    },
    data: data,
  });

  return NextResponse.json(produtoAtualiza);
}

// export async function PATCH(request, { params }) {
//   const data = await request.json();

//   const produtoAtualiza = await prisma.produto.update({
//     where: {
//       id: params.id,
//     },
//     data: data,
//   });

//   return NextResponse.json(produtoAtualiza);
// }

export async function DELETE(request, { params }) {
  try {
    const produtoRemove = await prisma.produto.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(produtoRemove);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
