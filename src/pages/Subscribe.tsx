import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated"
import codeMockup from '../assets/code-mockup.png'

export default function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { data, loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center px-4 lg:px-6">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row items-center gap-10 lg:gap-0 justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-3xl md:text-[2.5rem] leading-tight">
            Recriando o <strong className="text-orange-800">Microsoft Teams</strong>, do zero, com <strong className="text-orange-800">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas quatro aulas você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-[#191321] border border-gray-500 rounded w-full max-w-[640px] lg:w-fit">
          <strong className="text-2xl mb-6 block">Increva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input 
              className="bg-[#0E0711] rounded px-5 h-14"
              type="text" 
              placeholder="Seu nome completo"
              onChange={e => setName(e.target.value)}
            />
            <input 
              className="bg-[#0E0711] rounded px-5 h-14"
              type="email" 
              placeholder="Digite seu e-mail"
              onChange={e => setEmail(e.target.value)}
            />

            <button
              type="submit"
              className="mt-4 bg-orange-800 text-gray-700 uppercase py-4 rounded font-bold text-sm hover:bg-orange-900 hover:text-white transition-colors disabled:opacity-50"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={codeMockup} alt="Imagem ilustrativa VSCode" className="mt-4 lg:mt-10" />
    </div>
  )
}