export default function Skills() {
  const skills = [
    { name: "Kotlin", level: "Avançado", progress: 85 },
    { name: "Android Studio", level: "Avançado", progress: 80 },
    { name: "HTML", level: "Intermediário", progress: 70 },
    { name: "Tailwind CSS", level: "Básico", progress: 40 },
    { name: "Firebase", level: "Básico", progress: 35 },
    { name: "JavaScript", level: "Intermediário", progress: 67 },
  ];

  return (
    <section className="max-w-4xl mx-auto text-center py-20 bg-blue-950 text-white"> 
      <h1 className="text-5xl font-extrabold leading-tight mb-8 text-blue-600">
        Minhas Habilidades
      </h1>
      <div className="space-y-10"> 
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 border-4 border-blue-600 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
          >

            <h2 className="text-2xl font-semibold mb-2 text-blue-600 hover:text-blue-700 transition duration-300">
              {skill.name}
            </h2>
       
            <p className="text-gray-300 mb-4">{skill.level}</p>


            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">

                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  {skill.level}
                </span>
                <span className="text-sm font-semibold">{skill.progress}%</span>
              </div>


              <div className="w-full bg-gray-200 rounded-full">
                <div
                  className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
