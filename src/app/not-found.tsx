import Link from "next/link";

export default function NotFound() {
    return(
        <div className="innerWidth max-w-8xl h-[calc(100vh-114px)] flex flex-col items-center justify-center gap-8 px-4 mx-auto">
            <h2 className="font-caveat text-8xl">ERRO 404</h2>
            <h1>Página não encontrada!</h1>
            <Link href="/" className="bg-primary flex items-center text-tertiary rounded hover:bg-opacity-90 py-3 px-6">Voltar para a Home</Link>
        </div>
    );
}