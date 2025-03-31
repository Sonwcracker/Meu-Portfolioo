// src/app/projects/page.tsx
export default function Projects() {
  return (
    <section id="projects" className="relative h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/background-dark.jpg)' }} />

      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="hidden md:block flex justify-center">
            <div className="overflow-hidden rounded-full border-4 border-blue-600 shadow-lg w-84 h-84 flex items-center justify-center">
              <img
                src="/image/iago.jpeg"
                alt="Foto de Iago Borges Santana"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              Olá, eu sou Iago
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Sou Desenvolvedor Frontend e aluno de Sistemas para Internet no Senac, onde estou ampliando meus conhecimentos 
              em desenvolvimento web e banco de dados. Também sou formado em Desenvolvimento Mobile pela BRASIL MOBILE SCHOOL, 
              com foco no desenvolvimento de aplicativos Android utilizando Kotlin. Meu objetivo é criar soluções digitais eficientes 
              e de alta qualidade para web e dispositivos móveis.
            </p>
            <a
              href="projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Ver meus projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
