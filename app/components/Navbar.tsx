// src/app/components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Meu Portfólio
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/about" className="text-white">Sobre</Link>
          <Link href="/projects" className="text-white">Projetos</Link>
          <Link href="/skills" className="text-white">Habilidades</Link>
          <Link href="/contact" className="text-white">Contato</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
