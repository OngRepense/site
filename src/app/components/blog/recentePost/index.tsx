import Image from "next/image";

interface RecentePostProps {
  title: string;
  date: string;
  readingTime: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
}

const RecentePost: React.FC<RecentePostProps> = ({ title, date, readingTime, summary, imageSrc, imageAlt }) => (
    <div className="cardPostRecente w-full h-full flex max-md:flex-col gap-6 bg-tertiary rounded-lg p-4">
      <div className="imagemPost max-md:max-w-[100%] max-md:max-h-[80px] max-w-[128px] w-full h-auto rounded-md overflow-hidden">
        <Image className="max-md:max-w-[100%] max-md:max-h-[80px] max-w-[128px] w-full h-full object-cover" src={imageSrc} alt={imageAlt} width={1920} height={1080} loading="lazy" />
      </div>
      <div className="contentPost flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h4 className="tituloPost text-primary max-md:text-sm text-base font-semibold">{title}</h4>
          <div className="infosPost flex items-center gap-2">
            <div className="dataPost flex items-center gap-1">
              <div className="w-[12px] h-[12px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                  <path d="M2.4 5.4H3.6V6.6H2.4V5.4ZM10.8 2.4V10.8C10.8 11.46 10.26 12 9.6 12H1.2C0.88174 12 0.576515 11.8736 0.351472 11.6485C0.126428 11.4235 0 11.1183 0 10.8L0.00599999 2.4C0.00599999 1.74 0.534 1.2 1.2 1.2H1.8V0H3V1.2H7.8V0H9V1.2H9.6C10.26 1.2 10.8 1.74 10.8 2.4ZM1.2 3.6H9.6V2.4H1.2V3.6ZM9.6 10.8V4.8H1.2V10.8H9.6ZM7.2 6.6H8.4V5.4H7.2V6.6ZM4.8 6.6H6V5.4H4.8V6.6Z" fill="#234B64" />
                </svg>
              </div>
              <p className="text-xs text-secondary">{date}</p>
            </div>
          </div>
        </div>
        <p className="resumoPost text-xs text-secondary">
          {summary && summary.length > 100 ? `${summary.slice(0, 100)}...` : summary}
        </p>
      </div>
    </div>
  );
  
  export default RecentePost;
  