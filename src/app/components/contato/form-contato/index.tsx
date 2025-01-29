'use client';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from "@/utils/send-mail";

export type ContatoFormData = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

const FormContato: FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContatoFormData>();
  const [feedback, setFeedback] = useState<string | null>(null);

  async function onSubmit(data: ContatoFormData) {
    try {
      const formData = new FormData();
      formData.append("nome", data.nome);
      formData.append("email", data.email);
      formData.append("assunto", data.assunto);
      formData.append("mensagem", data.mensagem);
  
      await sendEmail(formData);
      setFeedback("Email enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setFeedback("Ocorreu um erro ao enviar o email. Tente novamente.");
    }
  }
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-tertiary shadow-lg rounded-lg p-8">
      <div className="mb-4">
        <label htmlFor="nome" className="block text-secondary font-medium mb-2">
          Nome
        </label>
        <input
          type="text"
          id="nome"
          placeholder="Digite o seu nome"
          className={`w-full border ${errors.nome ? 'border-red-500' : 'border-secondary'} rounded-lg bg-transparent text-secondary placeholder-secondary px-4 py-3`}
          aria-invalid={errors.nome ? "true" : "false"}
          {...register('nome', { required: "O nome é obrigatório" })}
        />
        {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-secondary font-medium mb-2">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="Digite o seu e-mail"
          className={`w-full border ${errors.email ? 'border-red-500' : 'border-secondary'} rounded-lg bg-transparent text-secondary placeholder-secondary px-4 py-3`}
          aria-invalid={errors.email ? "true" : "false"}
          {...register('email', {
            required: "O e-mail é obrigatório",
            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "E-mail inválido" }
          })}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="assunto" className="block text-secondary font-medium mb-2">
          Assunto
        </label>
        <input
          type="text"
          id="assunto"
          placeholder="Qual seria o assunto?"
          className={`w-full border ${errors.assunto ? 'border-red-500' : 'border-secondary'} rounded-lg bg-transparent text-secondary placeholder-secondary px-4 py-3`}
          aria-invalid={errors.assunto ? "true" : "false"}
          {...register('assunto', { required: "O assunto é obrigatório" })}
        />
        {errors.assunto && <p className="text-red-500 text-sm mt-1">{errors.assunto.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="mensagem" className="block text-secondary font-medium mb-2">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          placeholder="Digite uma mensagem para nós!"
          className={`w-full border ${errors.mensagem ? 'border-red-500' : 'border-secondary'} rounded-lg bg-transparent text-secondary placeholder-secondary px-4 py-3 min-h-[104px]`}
          aria-invalid={errors.mensagem ? "true" : "false"}
          {...register('mensagem', { required: "A mensagem é obrigatória" })}
        ></textarea>
        {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>}
      </div>
      {feedback && (
        <p className={`text-sm mt-4 ${feedback.includes("sucesso") ? "text-green-500" : "text-red-500"}`}>
          {feedback}
        </p>
      )}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-primary'} text-tertiary rounded-lg px-6 py-3 font-medium hover:opacity-90`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </form>
  );
};

export default FormContato;