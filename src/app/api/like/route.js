import { NextResponse } from "next/server";
import { db as prisma } from "../../../../libs/db"

export async function GET() {
  const like = await prisma.likes.findMany(
    {
    select: {
      like: true,
      produtoId: true,
      userId: true
    }
  }
);

  return NextResponse.json(like);
}

export async function POST(request) {
  try {
    const { like, produtoId, userId } = await request.json();
    
    // Verificação e logs
    console.log('Received data:', { like, produtoId, userId });

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
    return new Response(JSON.stringify(newlike), { status: 200 });
  } catch (error) {
    console.error('Erro ao salvar o like:', error);
    return new Response("Erro ao salvar o like", { status: 500 });
  }
}
