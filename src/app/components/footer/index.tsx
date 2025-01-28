import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-primary py-16">
            <div className="innerWidth max-w-8xl flex flex-col gap-8 px-4 mx-auto">
                <div className="max-md:flex-col w-full flex justify-between gap-8">
                    <div className="max-md:max-w-full max-md:items-center max-w-[332px] flex flex-col gap-4">
                        <Image src="/assets/icons/repenseLogoAzul.svg" alt="Logo Repense" width={222} height={50} loading="lazy" />
                        <p className="max-md:text-center text-base">Transformando vidas por meio da educação e oportunidades. Junte-se a nós nessa missão!</p>
                    </div>
                    <div className="max-md:justify-center flex gap-8">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-base text-secondary font-bold">Redes sociais</h4>
                            <div className="flex flex-col gap-2">
                                <Link href="#">
                                    <span className="text-sm">LinkedIn</span>
                                </Link>
                                <Link href="#">
                                    <span className="text-sm">Instagram</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-base text-secondary font-bold">Links importantes</h4>
                            <div className="flex flex-col gap-2">
                                <Link href="/">
                                    <span className="text-sm">Home</span>
                                </Link>
                                <Link href="/sobre">
                                    <span className="text-sm">Sobre nós</span>
                                </Link>
                                <Link href="/blog">
                                    <span className="text-sm">Blog</span>
                                </Link>
                                <Link href="/aplicativo">
                                    <span className="text-sm">App</span>
                                </Link>
                                <Link href="/contato">
                                    <span className="text-sm">Contato</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="bg-tertiary w-full h-[1px]"/>
                <p className="text-center text-sm">Repense 2025 © Todos os direitos reservados</p>
            </div>
        </footer>
    );
}
