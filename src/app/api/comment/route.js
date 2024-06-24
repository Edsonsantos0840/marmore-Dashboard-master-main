import { NextResponse } from 'next/server';
import { db as prisma} from '../../../../libs/db';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const produtoId = searchParams.get('produtoId');

  if (!produtoId) {
    return new Response('Produto ID é necessário', { status: 400 });
  }

  const comments = await prisma.comments.findMany({
    where: {
      produtoCommentsId: produtoId,
    },
    include: {
      ProdutoComments: {
        include: {
          produto: true,
        },
      },
      UserComments: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              tipo: true,
              userImage: true
            }
          },
        },
      },
    },

  });

  return NextResponse.json(comments);
}


export async function POST(request) {
  try {
    const { comment, produtoId, userId } = await request.json();

    if (!produtoId || !userId) {
      return new Response('Produto ID e Usuário ID são necessários', { status: 400 });
    }

    // Primeiro, criar ProdutoComments e UserComments
    const produtoComments = await prisma.produtoComments.create({
      data: {
        produtoId,
      },
    });

    const userComments = await prisma.userComments.create({
      data: {
        userId,
      },
    });

    // Depois, criar o comentário usando os IDs criados
    const newComment = await prisma.comments.create({
      data: {
        comment,
        produtoCommentsId: produtoComments.id,
        userCommentsId: userComments.id,
      },
    });

    return NextResponse.json(newComment);
  } catch (error) {
    console.error('Erro ao salvar o comentário:', error);
    return new Response('Erro ao salvar o comentário', { status: 500 });
  }
}
