import { NextResponse } from "next/server";
import { db as prisma } from "../../../../../libs/db"


export async function GET(req,{ params }) {

  const like = await prisma.likes.findMany({
    where: {
       produtoId: params.id
    },
  });

  
  return NextResponse.json(like);
}

export async function DELETE(req, { params }) {

  try {
    const likeRemove = await prisma.likes.delete({
      
      where: {
        id: params.id,
      },
    });

    
    return NextResponse.json(likeRemove);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
