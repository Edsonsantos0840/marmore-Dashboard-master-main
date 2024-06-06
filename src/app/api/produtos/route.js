import { NextResponse } from "next/server";
import { db as prisma } from "../../../../libs/db"


export async function GET() {
  const produto = await prisma.produto.findMany({
  select: {
    category: true,
    id: true,
    description: true,
    image1: true,
    image2: true,
    image3: true,
    image4: true,
    likes: true,
    Title: true,
    ProdutoComments:{
        select:{
          comments: true,
          id: true,
          produto: true,
          produtoId: true
        },

    }
    
  }
 }
)

  return NextResponse.json(produto);
}

export async function POST(request) {
  const { Title, image1, image2, image3, image4, category, description } =
    await request.json();
    
  const newProduto = await prisma.produto.create({
    data: {
      Title,
      image1,
      image2,
      image3,
      image4,
      category,
      description,
      }
    },
  );

  return NextResponse.json(newProduto);
}
