import Image from "next/image";

interface CardPostProps {
  title: string;
  date: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  slug: string;
}

const CardPost: React.FC<CardPostProps> = ({ 
  title, 
  date, 
  summary, 
  imageSrc, 
  imageAlt, 
  category 
}) => (
  <div className="cardPost w-full md:max-w-[442px] w-full flex flex-col gap-6">
    <div className="imagemPost max-md:max-h-[140px] w-full rounded-md overflow-hidden">
      <Image 
        className="max-md:max-h-[140px] max-h-[200px] min-h-[200px] w-full h-auto object-cover" 
        src={imageSrc} 
        alt={imageAlt} 
        width={1920} 
        height={1080} 
        loading="lazy" 
      />
    </div>
    <div className="contentPost flex flex-col gap-4">
      <div className="categoriaPost w-fit bg-primary rounded-sm py-1 px-2">
        <span className="text-xs">{category}</span>
      </div>
      <h4 className="tituloPost text-primary text-2xl font-semibold">{title}</h4>
      <div className="infosPost flex items-center gap-2">
        <div className="dataPost flex items-center gap-1">
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 12" fill="none">
            <path d="M2.4 5.4H3.6V6.6H2.4V5.4ZM10.8 2.4V10.8C10.8 11.46 10.26 12 9.6 12H1.2C0.88 12 0.58 11.87 0.35 11.65C0.13 11.42 0 11.12 0 10.8L0.006 2.4C0.006 1.74 0.534 1.2 1.2 1.2H1.8V0H3V1.2H7.8V0H9V1.2H9.6C10.26 1.2 10.8 1.74 10.8 2.4ZM1.2 3.6H9.6V2.4H1.2V3.6ZM9.6 10.8V4.8H1.2V10.8H9.6ZM7.2 6.6H8.4V5.4H7.2V6.6ZM4.8 6.6H6V5.4H4.8V6.6Z" fill="#234B64"/>
          </svg>
          <p className="text-xs text-secondary">{date}</p>
        </div>
      </div>
      <p className="resumoPost text-base text-secondary">{summary}</p>
    </div>
  </div>
);

export default CardPost;
