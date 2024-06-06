import { NextResponse } from "next/server";
import { db as prisma } from "../../../../../libs/db"


export async function DELETE(request, { params }) {
  
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
