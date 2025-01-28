import { Metadata } from "next";
import Image from 'next/image';
import Link from "next/link";

export default function Aplicativo() {
  return (
    <div>
      <section className="max-md:pb-16 py-32">
        <div className="innerWidth max-md:flex-col-reverse max-md:gap-8 max-w-8xl flex items-center justify-between px-4 mx-auto">
          <div className="max-w-xl flex flex-col gap-4">
            <h2 className="text-primary max-md:text-3xl max-md:text-center font-caveat text-6xl font-bold">Leve oportunidades no bolso <span className="text-tertiary">com nosso app!</span></h2>
            <p className="max-md:text-sm max-md:text-center text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div className="max-md:items-center max-md:justify-center flex gap-8">
              <Link href="#" className="max-w-[132px] w-full">
                <Image src="/assets/icons/googlePlayButton.svg" alt="Google Play Download App Repense" width={132} height={40} loading="lazy" />
              </Link>
              <Link href="#" className="max-w-[132px] w-full">
                <Image src="/assets/icons/appleButton.svg" alt="Apple Store Download App Repense" width={132} height={40} loading="lazy" />
              </Link>
            </div>
          </div>
          <div className="max-md:max-w-[210px] max-w-[600px] w-full flex items-center justify-center">
            <Image src="/assets/images/appImage.png" alt="Aplicativo Repense" width={430} height={600} loading="lazy" />
          </div>
        </div>
      </section>
      <section className="max-md:py-16 py-32">
        <div className="innerWidth max-w-8xl flex flex-col items-center justify-center gap-16 px-4 mx-auto">
          <h2 className="text-tertiary max-md:text-3xl max-md:text-center font-caveat text-6xl  font-bold">O que o App oferece?</h2>
          <div className="max-md:flex-col w-full flex gap-8">
            <div className="projeto w-full flex max-md:flex-col md:gap-8">
              <div className="projetoCard min-h-[300px] max-md:rounded-lg w-full flex flex-col gap-8 md:rounded-3xl bg-primary overflow-hidden max-md:p-4 p-8 relative">
                <div className="flex flex-col gap-4">
                  <h3 className="max-md:text-2xl text-3xl font-bold font-caveat">Inscreva-se para a nossa banca comunitária!</h3>
                  <p className="max-md:text-xs text-base">Oferecemos um espaço acolhedor onde as crianças podem passar o tempo com atividades educativas, recreativas e de integração social. Um ambiente seguro e divertido para aprender e crescer.</p>
                </div>
                <Image className="absolute max-md:w-[166px] bottom-[-62px] right-[-10px]" src="/assets/images/phone01.png" alt="Aplicativo Repense" width={430} height={600} loading="lazy" />
              </div>
            </div>
            <div className="projetosHome w-full flex flex-col gap-8">
              <div className="projeto w-full flex max-md:flex-col-reverse md:gap-8">
                <div className="projetoCard min-h-[300px] max-md:rounded-lg w-full flex flex-col gap-8 md:rounded-3xl bg-tertiary overflow-hidden max-md:p-4 p-8 relative">
                  <div className="max-md:max-w-full max-w-[60%] flex flex-col gap-4">
                    <h3 className="max-md:text-2xl text-3xl font-bold font-caveat text-secondary">Vagas de emprego</h3>
                    <p className="max-md:text-xs text-base text-secondary">Acesse diversas oportunidades de trabalho em um só lugar. Estamos conectando você às vagas mais recentes para facilitar sua busca por emprego.</p>
                  </div>
                  <Image className="absolute max-md:bottom-[-90px] max-md:right-0 max-md:left-0 max-md:m-auto bottom-[0px] right-[42px]" src="/assets/images/phone02.png" alt="Aplicativo Repense" width={210} height={420} loading="lazy" />
                </div>
              </div>
              <div className="projeto w-full flex max-md:flex-col md:gap-8">
                <div className="projetoCard min-h-[300px] max-md:rounded-lg w-full flex flex-col gap-8 md:rounded-3xl bg-quaternary overflow-hidden max-md:p-4 p-8 relative">
                  <div className="max-md:max-w-full max-w-[60%] flex flex-col gap-4">
                    <h3 className="max-md:text-2xl text-3xl font-bold font-caveat">Gerador de curriculo Repense</h3>
                    <p className="max-md:text-xs text-base">Tenha tudo na palma da sua mão! Acompanhe vagas de emprego, crie seu currículo profissional e fique por dentro de dicas e novidades com o nosso blog.</p>
                  </div>
                  <Image className="absolute max-md:bottom-[-90px] max-md:right-0 max-md:left-0 max-md:m-auto bottom-[0px] right-[42px]" src="/assets/images/phone02.png" alt="Aplicativo Repense" width={210} height={420} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bannerHome pb-32">
        <div className="innerWidth max-md:flex-col-reverse max-md:gap-8 max-w-8xl flex items-center justify-between px-4 mx-auto">
          <div className="max-md:max-w-[210px] max-w-[600px] w-full flex items-center justify-center">
            <Image src="/assets/icons/mascoteBanner.svg" alt="Mascote da Repense" width={430} height={600} loading="lazy" />
          </div>
          <div className="max-w-xl flex flex-col items-center gap-4">
            <h2 className="text-primary max-md:text-3xl text-center font-caveat text-6xl font-bold">Baixe já e aproveite as <span className="text-tertiary">oportunidades!</span></h2>
            <Image src="/assets/icons/qrcode.svg" alt="QRCode Aplicativo Repense" width={224} height={224} loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
}
