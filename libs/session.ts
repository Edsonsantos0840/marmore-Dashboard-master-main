import { getServerSession } from "next-auth"
import { authOptions } from "./auth"
import { db as Prisma } from "./db"


export async function getCurrentUser(){

    const use =await Prisma.user.findMany()

    const session = await getServerSession(authOptions)


    return session?.user
    // {
    //     ...session,
    //     user: {
    //       id: use[0]?.id,
    //       name: use[0]?.name,
    //       email: use[0]?.email,
    //       image: use[0]?.userImage,
    //       tipo: use[0]?.tipo
    //     }
    // }
}