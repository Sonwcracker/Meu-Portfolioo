export default function Projects() {

  const projects = [
    {
      name: "Jogo Da Velha",
      description: "Jogo da Velha clássico, desenvolvido com HTML, CSS e JavaScript. Permite jogar contra outro jogador no mesmo dispositivo, com interface simples e intuitiva.",
      gitUrl: "https://github.com/Sonwcracker/Jogo-Da-Velha",
    },
    {
      name: "Ecommerc Pizzaria",
      description: "E-commerce de Pizzaria, desenvolvido com HTML e CSS avançado. Oferece uma interface visualmente atraente, permitindo que os usuários escolham, personalizem e façam seus pedidos.",
      gitUrl: "https://github.com/Sonwcracker/Novais",
    },
    {
      name: "Ecommerce Jogos",
      description: "Desenvolvido com HTML, CSS, Laravel e JavaScript. A plataforma permite a navegação e compra de jogos de forma rápida e segura, oferecendo uma experiência de usuário moderna e responsiva.",
      gitUrl: "https://github.com/Sonwcracker/Pagina-De-Games",
    },
    {
      name: "Login/Cadastro",
      description: "Desenvolvido com HTML, CSS, JavaScript e integração com banco de dados. Permite aos usuários criar contas, fazer login e acessar suas informações de forma segura, com validação de dados e gerenciamento de sessões.",
      gitUrl: "https://github.com/Sonwcracker/login-cadastro",
    },
  ];

  return (
    <section id="projects" className="relative h-screen bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/background-dark.jpg)' }}
      />

      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold leading-tight mb-8 mt-16 text-blue-600">
            Meus Projetos
          </h1> 
          <p className="text-xl text-gray-300 mb-8">
            Aqui estão alguns dos projetos que desenvolvi. Clique nos links para ver mais detalhes.
          </p>

          {/* Lista de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 border-4 border-blue-600 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4 hover:text-blue-700 transition duration-300">
                  {project.name}
                </h2>
                <p className="text-gray-300 text-center mb-6">{project.description}</p>

                <div className="text-center">
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Ver no GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
