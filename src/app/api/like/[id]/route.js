import { NextResponse } from "next/server";
import { db as prisma } from "../../../../../libs/db"

export async function GET(request, { params }) {
  const comment = await prisma.comments.findUnique({
    where: {
      id: params.id,
    },
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
    const commentRemove = await prisma.comment.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(commentRemove);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
