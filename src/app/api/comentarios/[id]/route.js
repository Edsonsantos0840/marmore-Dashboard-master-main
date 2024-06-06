import { NextResponse } from "next/server";
import { db as prisma } from "../../../../../libs/db"

export async function GET(req,{ params }) {
  const comment = await prisma.comments.findUnique({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(comment);
  // const { productId } = params.id;

  // if (req.method !== 'GET') {
  //   res.setHeader('Allow', ['GET']);
  //   return res.status(405).end(`Method ${req.method} Not Allowed`);
  // }

  // try {
  //   const productWithComments = await prisma.produto.findUnique({
  //     where: { id: productId },
  //     include: {
  //       ProdutoComments: {
  //         include: {
  //           comments: true
  //         }
  //       }
  //     }
  //   });

  //   if (!productWithComments) {
  //     return res.status(404).json({ error: 'Produto não encontrado' });
  //   }

  //   const comments = productWithComments.ProdutoComments.flatMap(pc => pc.comments);

  //   res.status(200).json(comments);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: 'Erro ao buscar os comentários' });
  // } finally {
  //   await prisma.$disconnect();
  // }

  // return NextResponse.json(comments);
}

export async function PUT(request, { params }) {
  const data = await request.json();

  const commentAtualiza = await prisma.comments.update({
    where: {
      id: params.id,
    },
    data: data,
  });

  return NextResponse.json(commentAtualiza);
}
// export async function PATCHT(request, { params }) {
//   const data = await request.json();

//   const commentAtualiza = await prisma.comments.update({
//     where: {
//       id: params.id,
//     },
//     data: data,
//   });

//   return NextResponse.json(commentAtualiza);
// }

export async function DELETE(request, { params }) {
  try {
    const commentRemove = await prisma.comments.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(commentRemove);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
