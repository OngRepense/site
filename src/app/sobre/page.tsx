import { Metadata } from "next";
import Image from 'next/image';
import EquipeGrid from "@components/sobre/equipeCard";

export default function Sobre() {
  return (
    <div>
      <section className="max-md:pb-16 pt-40 pb-32">
        <div className="innerWidth max-md:flex-col max-md:gap-4 max-w-8xl flex justify-between md:gap-16 px-4 mx-auto">
          <div className="md:max-w-[800px]">
            <h2 className="text-tertiary max-md:text-3xl max-md:text-center font-caveat text-6xl font-bold"><span className="text-primary">Conectamos pessoas a</span> oportunidades que transformam vidas.</h2>
          </div>
          <div className="md:max-w-[500px]">
            <p className="md:mt-[110px] max-md:text-sm max-md:text-center text-xl">Nós da ONG Repense acreditamos que a Educação e o acesso à Informação de qualidade são fatores de extrema importância para que possamos mudar de vida.</p>
          </div>
        </div>
      </section>
      <section className="max-h-[524px] min-h-[200px] w-full h-full">
        <Image className="max-h-[524px] min-h-[200px] w-full h-full object-cover" src="/assets/images/sobreBanner.png" alt="Repense" width={1920} height={524} loading="lazy" />
      </section>
      <section className="py-16">
        <div className="innerWidth max-md:flex-col max-md:gap-4 max-w-8xl flex justify-between md:gap-16 px-4 mx-auto">
          <div className="w-full flex flex-col gap-8">
            <h2 className="max-md:text-3xl max-md:text-center font-caveat text-6xl text-primary font-bold">Juntos, transformamos vidas.</h2>
            <Image className="m-auto max-md:max-h-[200px]" src="/assets/icons/mascoteOla.svg" alt="Mascote da Repense" width={440} height={520} loading="lazy" />
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className="max-md:text-sm text-xl font-semibold">Acreditamos que a educação e o acesso às oportunidades são fundamentais para promover mudanças significativas na sociedade. Nosso compromisso é levar esperança e novas possibilidades para quem mais precisa.</p>
            <p className="max-md:text-sm text-xl">Por meio de cursos de capacitação, divulgação de vagas de emprego e conexões entre pessoas e empresas, buscamos empoderar indivíduos e comunidades, oferecendo ferramentas essenciais para o desenvolvimento profissional e pessoal. Acreditamos que, ao proporcionar acesso à educação e oportunidades de emprego, podemos criar um ciclo de transformação que beneficia não apenas os indivíduos, mas também as empresas e a sociedade como um todo.</p>
            <p className="max-md:text-sm text-xl">Trabalhamos todos os dias para criar um futuro mais inclusivo, onde cada pessoa, independentemente de sua origem ou contexto, possa descobrir e alcançar seu verdadeiro potencial. Nosso objetivo é derrubar barreiras e abrir portas para aqueles que mais precisam, criando um ambiente de igualdade de oportunidades. Venha fazer parte dessa jornada de transformação com a gente e ajude a construir um futuro melhor para todos!</p>
          </div>
        </div>
      </section>
      <section className="numeros max-md:py-16 bg-tertiary py-32">
        <div className="innerWidth max-sm:flex-col max-w-8xl flex items-start justify-between gap-8 px-4 mx-auto">
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <h2 className="max-md:text-3xl text-center font-caveat text-6xl text-primary font-bold">+05</h2>
            <p className="max-md:text-sm text-center text-xl text-secondary">Anos transformando experiências em resultados</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <h2 className="max-md:text-3xl text-center font-caveat text-6xl text-primary font-bold">150k</h2>
            <p className="max-md:text-sm text-center text-xl text-secondary">Pessoas impactadas e conectadas a novas oportunidades.</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <h2 className="max-md:text-3xl text-center font-caveat text-6xl text-primary font-bold">+300</h2>
            <p className="max-md:text-sm text-center text-xl text-secondary">Empresas parceiras confiando em nossa plataforma para divulgar vagas.</p>
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="innerWidth max-w-8xl flex flex-col items-center justify-center gap-16 px-4 mx-auto">
          <h2 className="max-md:text-3xl font-caveat text-6xl font-bold">Conheça a nossa equipe!</h2>
          <EquipeGrid />
        </div>
      </section>
      <section className="depoimento py-16">
        <div className="innerWidth max-w-8xl flex flex-col items-center justify-center gap-16 px-4 mx-auto">
          <div className="depoimentoContainer w-full bg-tertiary flex flex-col items-center justify-center gap-12 rounded-3xl max-md:gap-8 max-md:p-8 p-16">
            <p className="max-md:text-2xl font-caveat text-secondary text-3xl leading-[1.25]">“Como fundador da ONG Repense, me sinto bastante orgulhoso em trabalhar nesse projeto, pelos desafios superados para poder chegar até aqui, muito orgulho pelo projeto em si, que visa contribuir de forma positiva nas vidas das pessoas. Mas realmente acredito que os maiores beneficiados somos nós, que trabalhamos nele ou em qualquer coisa que visa o próximo como beneficiário. Para mim como pessoa foi e está sendo uma experiência maravilhosa, mais como profissional posso afirmar que me tornei um novo profissional. Ter que lidar não somente com o escopo técnico mas também com o insumo principal que são as pessoas.”</p>
            <div className="depoimentoDetalhes w-full flex items-center justify-center gap-4">
              <Image className="max-w-[64px] max-h-[64px] w-full h-full object-cover border-[5px] border-[rgba(36,75,100,0.32)] rounded-full" src="/assets/images/dmeval.png" alt="Dmeval Neto - Presidente - Ong Repense" width={56} height={56} loading="lazy" />
              <div className="depoimentoPessoa flex flex-col">
                <p className="nomePessoa text-secondary font-bold max-md:text-base text-lg">Dmeval Neto</p>
                <p className="cargo text-secondary max-md:text-sm text-base">Presidente - Ong Repense</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trabalheConosco py-16">
        <div className="innerWidth max-md:flex-col max-md:gap-4 max-w-8xl flex justify-between md:gap-16 px-4 mx-auto">
          <div className="w-full flex flex-col gap-8">
            <h2 className="max-md:text-3xl font-caveat text-6xl text-primary font-bold">Faça parte do nosso time!</h2>
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className="max-md:text-sm text-xl">Estamos sempre em busca de profissionais apaixonados e comprometidos com a transformação social. Se você acredita no poder da educação e das oportunidades para mudar vidas, junte-se a nós. Venha contribuir com suas habilidades e fazer a diferença na vida de muitas pessoas!</p>
            <button className="w-fit bg-primary flex items-center justify-center gap-4 rounded hover:bg-opacity-85 duration-300 ease-in-out py-3 px-6">
              <span>Entrar para o time</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M4.66699 11.3337L11.3337 4.66699M11.3337 4.66699H4.66699M11.3337 4.66699V11.3337" stroke="#FFF1C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
