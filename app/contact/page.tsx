// src/app/contact/page.tsx
"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const schema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" }),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Aqui você pode adicionar o envio do formulário para um servidor ou serviço de email
  };

  return (
    <section className="max-w-3xl mx-auto text-center py-20">
      <h1 className="text-4xl font-bold mb-8">Entre em Contato</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-left font-medium">
            Nome
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full p-2 mt-2 border rounded-md"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-left font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full p-2 mt-2 border rounded-md"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-left font-medium">
            Mensagem
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            className="w-full p-2 mt-2 border rounded-md"
          />
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>

      <div className="flex justify-center space-x-6 mt-8">
        <a href="https://www.linkedin.com" target="_blank" className="text-blue-600">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com" target="_blank" className="text-gray-800">
          <FaGithub size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" className="text-blue-500">
          <FaTwitter size={30} />
        </a>
      </div>
    </section>
  );
}
