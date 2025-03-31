// src/app/layout.tsx
import Navbar from "./components/Navbar";
  
import "./globals.css";

export const metadata = { 
  title: "Meu Portfólio",
  description: "Formado em Desenvolvedor Mobile",
};

// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}