
import "../globals.css";
import NavPublicos from '../components/navBar/NavPublicos'
import { AuthProvider } from "../../../providers/nextProvider";

export const metadata = {
 
  title: "M&A Marmores e Granitos.",
  description: "M&A Marmores e Granitos Tem o Melhor Desing e o Melhor Acabamento Para Você.",
  keywords: "Marmores e Granitos, Desing ambiente, Acabamento construção, marmore, granito, pedra onix, pedras ornamentais, pia de marmore, mesa de marmore, escada de marmore, balcao de marmore, soleira de marmore, porcelanato, construtora, construção civil, alvenaria, piso, pisos e revestimentos"
};

export default async function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <body >
        <AuthProvider>

          <NavPublicos/>
          {children}
        </AuthProvider>
      
      </body>
    </html>
  );
}
