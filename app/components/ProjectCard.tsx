// src/app/components/ProjectCard.tsx
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, description, image, link }: ProjectProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Image src={image} alt={title} width={500} height={300} className="rounded-md" />
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        className="inline-block bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700"
      >
        Ver Projeto
      </a>
    </div>
  );
};

export default ProjectCard;
