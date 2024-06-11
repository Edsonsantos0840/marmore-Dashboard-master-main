import { NextResponse } from "next/server";
import { db as prisma } from "../../../../libs/db"
import { revalidatePath } from "next/cache";

export async function GET({ params }) {
  const like = await prisma.likes.findMany(
    {
    select: {
      like: true,
      produtoId: true,
      userId: true
    }
  }
);

revalidatePath(`/verProdutoUnico/${params.id}`)
  return NextResponse.json(like);
}

export async function POST(request, { params }) {
  try {
    const { like, produtoId, userId } = await request.json();

    const newlike = await prisma.likes.create({
      data: {
        like,
        produto: {
          connect: {
            id: produtoId
          }
        },
        User: {
          connect: {
            email: userId // Assumindo que userId é o email do usuário
          }
        }
      },
    });
 
    revalidatePath(`/verProdutoUnico/${params.id}`)
    return new Response(JSON.stringify(newlike), { status: 200 });
  } catch (error) {
    console.error('Erro ao salvar o like:', error);
    return new Response("Erro ao salvar o like", { status: 500 });
  }
}
