import { NextResponse } from "next/server";
import { db as prisma } from "../../../../../libs/db"

export async function GET(req,{ params }) {
  const comment = await prisma.comments.findMany({
    where: {
      ProdutoComments:{
        produtoId: params.id
      }
    },
    select:{
      id: true,
      comment: true,
      UserComments:{
        select:{
          user:{
            select: {
              id: true,
              name: true,
              email: true,
              tipo: true,
              userImage: true
            }
          }
        }
      }
    }
  });

  return NextResponse.json(comment);
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
