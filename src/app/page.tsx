"use client";

import Image from 'next/image';
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div>
      <section className="bannerHome max-md:pb-16 py-32">
        <div className="innerWidth max-md:flex-col-reverse max-md:gap-8 max-w-8xl flex items-center justify-between px-4 mx-auto">
          <div className="conteudoBanner max-w-xl flex flex-col gap-4">
            <h2 className="text-primary max-md:text-3xl max-md:text-center font-caveat text-6xl font-bold">Um novo jeito de encontrar oportunidades!</h2>
            <p className="max-md:text-sm max-md:text-center text-xl">Nós da ONG Repense acreditamos que a Educação e o acesso à Informação de qualidade são fatores de extrema importância para que possamos mudar de vida.</p>
          </div>
          <div className="imagemBanner max-md:max-w-[210px] max-w-[600px] w-full flex items-center justify-center">
            <Image src="/assets/icons/mascoteBanner.svg" alt="Mascote da Repense" width={430} height={600} loading="lazy" />
          </div>
        </div>
      </section>
      <section className="sobreHome max-md:py-16 py-32">
        <div className="innerWidth max-md:flex-col max-md:gap-8 max-w-8xl flex items-center justify-between px-4 mx-auto">
          <div className="sobreNumerosHome flex gap-4">
            <div className="sobreNumero max-md:rounded-lg max-w-[332px] max-h-[332px] w-full flex flex-col items-center justify-center rounded-3xl bg-primary overflow-hidden md:p-8">
              <h3 className="max-md:text-2xl text-center text-8xl font-bold">+5</h3>
              <p className="max-md:text-xs text-center text-2xl">Anos transformando experiências em resultados</p>
            </div>
            <div className="mascoteSobre max-md:rounded-lg max-w-[332px] max-h-[332px] w-full flex items-center justify-center rounded-3xl bg-tertiary overflow-hidden">
              <Image className="w-full h-full" src="/assets/icons/mascoteComPasta.svg" alt="Mascote da Repense" width={430} height={600} loading="lazy" />
            </div>
          </div>
          <div className="sobreConteudoHome max-md:items-center max-w-xl flex flex-col gap-8">
            <div className="max-md:items-center max-w-xl flex flex-col gap-4">
              <h2 className="text-primary max-md:text-3xl max-md:text-center font-caveat text-6xl font-bold">Sobre nós</h2>
              <p className="max-md:text-sm max-md:text-center text-xl">Nosso objetivo é bem simples: FAZER A DIFERENÇA NA VIDA DAS PESSOAS. Por isso decidimos constituir a Repense, uma ONG que visa capacitar pessoas, conectando pessoas.</p>
            </div>
            <Link href="/sobre" className="group w-fit border-2 border-primary flex items-center justify-center gap-4 text-primary font-bold rounded hover:bg-primary hover:text-tertiary duration-300 ease-in-out py-3 px-6">
              <span>Saiba mais</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path className="group-hover:fill-tertiary group-hover:stroke-tertiary" d="M4.66699 11.3337L11.3337 4.66699M11.3337 4.66699H4.66699M11.3337 4.66699V11.3337" stroke="#F07D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section className="blogHome max-md:py-16 bg-tertiary py-32">
        <div className="innerWidth max-w-8xl flex flex-col items-center justify-center gap-8 px-4 mx-auto">
          <div className="sobreConteudoHome max-w-3xl flex flex-col items-center gap-4">
            <h2 className="text-primary max-md:text-3xl max-md:text-center font-caveat text-6xl text-secondary font-bold">Confira nosso blog</h2>
            <p className="max-md:text-sm text-center text-xl text-secondary">Explore conteúdos inspiradores e dicas práticas para transformar sua vida profissional. Descubra histórias, tendências e muito mais!</p>
          </div>
          <Link href="/blog" className="w-fit bg-primary flex items-center justify-center gap-4 rounded hover:bg-opacity-85 duration-300 ease-in-out py-3 px-6">
            <span>Saiba mais</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M4.66699 11.3337L11.3337 4.66699M11.3337 4.66699H4.66699M11.3337 4.66699V11.3337" stroke="#FFF1C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
      <section className="oqueFazemosHome max-md:py-16 py-32">
        <div className="innerWidth max-w-8xl flex flex-col items-center justify-center gap-16 px-4 mx-auto">
          <h2 className="text-tertiary max-md:text-3xl max-md:text-center font-caveat text-6xl  font-bold">O que fazemos?</h2>
          <div className="projetosHome w-full flex flex-col gap-8">
            <div className="projeto w-full flex max-md:flex-col md:gap-8">
              <div className="projetoImagem max-md:rounded-t-lg w-full md:rounded-3xl overflow-hidden bg-custom-gradient-primary-02 md:bg-custom-gradient-primary">
                <Image className="min-h-[132px] w-full h-full object-cover relative z-[-1]" src="/assets/images/bancaComunitariaBanner.png" alt="Mascote da Repense" width={974} height={344} loading="lazy" />
              </div>
              <div className="projetoCard max-md:rounded-b-lg md:max-w-[384px] w-full flex flex-col gap-8 md:rounded-3xl bg-primary overflow-hidden max-md:p-4 p-8">
                <div className="flex flex-col gap-4">
                  <h3 className="max-md:text-2xl text-3xl font-bold font-caveat">Reforço escolar comunitário</h3>
                  <p className="max-md:text-xs text-base">Oferecemos um espaço acolhedor onde as crianças podem passar o tempo com atividades educativas, recreativas e de integração social. Um ambiente seguro e divertido para aprender e crescer.</p>
                </div>
                <Link href="#" className="flex items-center gap-2">
                  <span className="font-medium">Saiba mais</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path d="M4.66699 11.3337L11.3337 4.66699M11.3337 4.66699H4.66699M11.3337 4.66699V11.3337" stroke="#FFF1C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>  
                </Link>
              </div>
            </div>
            <div className="projeto w-full flex max-md:flex-col-reverse md:gap-8">
              <div className="projetoCard max-md:rounded-b-lg md:max-w-[384px] w-full flex flex-col gap-8 md:rounded-3xl bg-tertiary overflow-hidden max-md:p-4 p-8">
                <div className="flex flex-col gap-4">
                  <h3 className="max-md:text-2xl text-3xl font-bold font-caveat text-secondary">Vagas de emprego</h3>
                  <p className="max-md:text-xs text-base text-secondary">Acesse diversas oportunidades de trabalho em um só lugar. Estamos conectando você às vagas mais recentes para facilitar sua busca por emprego.</p>
                </div>
                <Link href="#" className="flex items-center gap-2">
                  <span className="font-medium text-secondary">Saiba mais</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path d="M4.66699 11.3337L11.3337 4.66699M11.3337 4.66699H4.66699M11.3337 4.66699V11.3337" stroke="#234B64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>  
                </Link>
              </div>
              <div className="projetoImagem max-md:rounded-t-lg w-full md:rounded-3xl overflow-hidden bg-custom-gradient-tertiary-02 md:bg-custom-gradient-tertiary">
                <Image className="min-h-[132px] w-full h-full object-cover relative z-[-1]" src="/assets/images/vagasBanner.png" alt="Mascote da Repense" width={974} height={344} loading="lazy" />
              </div>
            </div>
            <div className="projeto w-full flex max-md:flex-col md:gap-8">
              <div className="projetoImagem max-md:rounded-t-lg w-full md:rounded-3xl overflow-hidden bg-custom-gradient-quaternary-02 md:bg-custom-gradient-quaternary">
                <Image className="min-h-[132px] w-full h-full object-cover relative z-[-1]" src="/assets/images/geradorCurriculoBanner.png" alt="Mascote da Repense" width={974} height={344} loading="lazy" />
              </div>
              <div className="projetoCard max-md:rounded-b-lg md:max-w-[384px] w-full flex flex-col gap-8 md:rounded-3xl bg-quaternary overflow-hidden max-md:p-4 p-8">
                <div className="flex flex-col gap-4">
                  <h3 className="max-md:text-2xl text-3xl font-bold font-caveat">Gerador de curriculo Repense</h3>
                  <p className="max-md:text-xs text-base">Tenha tudo na palma da sua mão! Acompanhe vagas de emprego, crie seu currículo profissional e fique por dentro de dicas e novidades com o nosso blog.</p>
                </div>
                <Link href="#" className="flex items-center gap-2">
                  <span className="font-medium">Saiba mais</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path d="M4.66699 11.3337L11.3337 4.66699M11.3337 4.66699H4.66699M11.3337 4.66699V11.3337" stroke="#FFF1C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="depoimentosHome py-16">
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
      <section className="parceriasHome max-md:py-16 py-32">
        <div className="innerWidth max-w-8xl flex flex-col items-center justify-center gap-16 px-4 mx-auto">
          <h2 className="text-tertiary max-md:text-3xl max-md:text-center font-caveat text-6xl font-bold">Parcerias que nos orgulhamos</h2>
          <div className="parceriasContainer w-full">
            <Carousel opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className='max-md:rounded-lg md:rounded-3xl overflow-hidden'
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="parceriaItem w-full bg-[rgba(240,125,0,0.50)] flex items-center justify-center max-md:rounded-lg md:rounded-3xl py-20 px-8">
                    <Image className="max-w-[100px] max-h-[100px] w-full" src="/assets/images/googleIcon.png" alt="Parceria" width={100} height={100} loading="lazy" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="parceriaItem w-full bg-[rgba(240,125,0,0.50)] flex items-center justify-center max-md:rounded-lg md:rounded-3xl py-20 px-8">
                    <Image className="max-w-[100px] max-h-[100px] w-full" src="/assets/images/itauLogo.png" alt="Parceria" width={100} height={100} loading="lazy" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="parceriaItem w-full bg-[rgba(240,125,0,0.50)] flex items-center justify-center max-md:rounded-lg md:rounded-3xl py-20 px-8">
                    <Image className="max-w-[100px] max-h-[100px] w-full" src="/assets/images/santanderLogo.png" alt="Parceria" width={100} height={100} loading="lazy" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="parceriaItem w-full bg-[rgba(240,125,0,0.50)] flex items-center justify-center max-md:rounded-lg md:rounded-3xl py-20 px-8">
                    <Image className="max-w-[100px] max-h-[100px] w-full" src="/assets/images/santanderLogo.png" alt="Parceria" width={100} height={100} loading="lazy" />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="contatoHome py-16">
        <div className="innerWidth max-w-8xl flex flex-col items-center justify-center gap-16 px-4 mx-auto">
          <h2 className="text-tertiary max-md:text-3xl max-md:text-center font-caveat text-6xl font-bold">Que tal falar conosco?</h2>
          <Link href="/contato" className="w-fit bg-primary flex items-center justify-center gap-4 rounded hover:bg-opacity-85 duration-300 ease-in-out py-3 px-6">
            <span>Entre em contato</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M4.66699 11.3337L11.3337 4.66699M11.3337 4.66699H4.66699M11.3337 4.66699V11.3337" stroke="#FFF1C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
