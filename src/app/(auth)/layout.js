import { SessionContext } from "next-auth/react";
import { getCurrentUser } from "../../../libs/session";
import { redirect } from "next/navigation";
import { AuthProvider } from "../../../providers/nextProvider";

export const metadata = {
 
  title: "M&A Marmores e Granitos.",
  description: "M&A Marmores e Granitos Tem o Melhor Desing e o Melhor Acabamento Para Você.",
  keywords: "Marmores e Granitos, Desing ambiente, Acabamento construção, marmore, granito, pedra onix, pedras ornamentais, pia de marmore, mesa de marmore, escada de marmore, balcao de marmore, soleira de marmore, porcelanato, construtora, construção civil, alvenaria, piso, pisos e revestimentos"
};

export default async  function RootLayout({
  children,
}) {
  const user = await getCurrentUser()

  if(user){
    redirect('/inicio')
  }
  return (
    <html lang="pt-br">
      <body>
     <AuthProvider>

        {children}
     </AuthProvider>
        </body>
    </html>
  )
}
