import { NextResponse } from "next/server";
import { db as prisma } from "../../../../libs/db"

export async function GET() {
  const comment = await prisma.comments.findMany({
    select:{
      comment: true,
      id: true,
      ProdutoComments: {
        select: {
          produtoId: true
        }
      },
      UserComments:{
        select:{
          userId: true,
          user:{
            select:{
              name: true,
              userImage: true,
              email: true
            }
          }
        }
      }
    }
  });

  return NextResponse.json(comment);
}

export async function POST(request) {
  try {
    const { comment, produtoId, userId} = await request.json();
   
    if (isNaN(produtoId)) {
      return new Response("O ID do produto não é válido", { status: 400 });
    }
    if (isNaN(userId)) {
      return new Response("O ID do usuaário não é válido", { status: 400 });
    }

    const newComment = await prisma.comments.create({
      data: {
        comment,
        ProdutoComments:{
           connect:{
            produtoId
           }
        },
        UserComments:{
            connect:{
              userId
            }
        }
      },
    });

    return NextResponse.json(newComment);
  } catch (error) {
    console.error("Erro ao salvar o comentário:", error);
    return new Response("Erro ao salvar o comentário", { status: 500 });
  }
}
