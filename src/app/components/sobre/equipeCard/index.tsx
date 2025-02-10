import Image from "next/image";

interface EquipeCardProps {
  nome: string;
  cargo: string;
  imageSrc: string;
  altText: string;
}

const EquipeCard: React.FC<EquipeCardProps> = ({ nome, cargo, imageSrc, altText }) => (
  <div className="equipeCard sm:max-w-[440px] w-full bg-softBlue rounded-2xl p-8">
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <Image
        className="max-w-[120px] max-h-[120px] w-full h-full object-cover border-[5px] border-[rgba(36,75,100,0.32)] rounded-full"
        src={imageSrc}
        alt={altText}
        width={120}
        height={120}
        loading="lazy"
      />
      <div className="flex flex-col items-center justify-center">
        <p className="nomePessoa text-primary font-bold max-md:text-base text-lg">{nome}</p>
        <p className="cargo max-md:text-sm text-base">{cargo}</p>
      </div>
    </div>
  </div>
);

const EquipeGrid: React.FC = () => {
  const equipe = [
    {
      nome: "Dmeval Neto",
      cargo: "Presidente",
      imageSrc: "/assets/images/equipe/dmevalEquipe.png",
      altText: "Dmeval Neto - Presidente - Ong Repense",
    },
    {
      nome: "Juliana Santos",
      cargo: "Vice Presidente",
      imageSrc: "/assets/images/equipe/julianaSantos.png",
      altText: "Juliana Santos - Vice Presidente - Ong Repense",
    },
    {
      nome: "Sini Chaves",
      cargo: "Assessoria de Imprensa",
      imageSrc: "/assets/images/equipe/siniChaves.png",
      altText: "Sini Chaves - Assessoria de Imprensa - Ong Repense",
    },
    {
      nome: "Viktor Santos",
      cargo: "Desenvolvedor Mobile",
      imageSrc: "/assets/images/equipe/viktorSantos.png",
      altText: "Viktor Santos - Desenvolvedor Mobile - Ong Repense",
    },
    {
      nome: "Ricardo Mascarenhas",
      cargo: "Conselho Fiscal",
      imageSrc: "/assets/images/equipe/ricardoMascarenhas.png",
      altText: "Ricardo Mascarenhas - Conselho Fiscal - Ong Repense",
    },
    {
      nome: "Roberta Alcântara",
      cargo: "Diretoria Administrativa",
      imageSrc: "/assets/images/equipe/robertaAlcantara.png",
      altText: "Roberta Alcântara - Diretoria Administrativa - Ong Repense",
    },
    {
      nome: "Flávio Neves",
      cargo: "Advogado",
      imageSrc: "/assets/images/equipe/flavioNeves.png",
      altText: "Flávio Neves - Advogado - Ong Repense",
    },
    {
      nome: "Hayrana",
      cargo: "Gerente de marketing - Identidade Visual",
      imageSrc: "/assets/images/equipe/hayrana.jpg",
      altText: "Hayrana - Gerente de marketing - Identidade Visual - Ong Repense",
    },
    {
      nome: "Elane",
      cargo: "Coordenação Pedagogica",
      imageSrc: "/assets/images/equipe/hayrana.jpg",
      altText: "Elane - Coordenação Pedagogica",
    },
  ];

  return (
    <div className="equipeGrid w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {equipe.map((pessoa, index) => (
        <EquipeCard
          key={index}
          nome={pessoa.nome}
          cargo={pessoa.cargo}
          imageSrc={pessoa.imageSrc}
          altText={pessoa.altText}
        />
      ))}
    </div>
  );
};

export default EquipeGrid;
