import Image from "next/image";

interface DestaquePostProps {
  title: string;
  date: string;
  readingTime: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
}

const DestaquePost: React.FC<DestaquePostProps> = ({
  title,
  date,
  readingTime,
  summary,
  imageSrc,
  imageAlt,
}) => {
    return (
        <div className="cardPostDestaque w-full flex max-md:flex-col max-md:gap-4 gap-6 bg-tertiary rounded-lg p-6">
            <div className="imagemPost max-md:max-w-full max-md:max-h-[100px] max-w-[256px] w-full h-auto rounded-md overflow-hidden">
                <Image
                    className="max-md:max-w-full max-md:max-h-[100px] max-w-[256px] w-full h-full object-cover"
                    src={imageSrc}
                    alt={imageAlt}
                    width={256}
                    height={156}
                    loading="lazy"
                />
            </div>
            <div className="contentPost flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <h4 className="tituloPost text-primary max-md:text-base text-2xl font-semibold">{title}</h4>
                    <div className="infosPost flex items-center gap-2">
                        <div className="dataPost flex items-center gap-1">
                            <div className="w-[12px] h-[12px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                    <path d="M2.4 5.4H3.6V6.6H2.4V5.4ZM10.8 2.4V10.8C10.8 11.46 10.26 12 9.6 12H1.2C0.88174 12 0.576515 11.8736 0.351472 11.6485C0.126428 11.4235 0 11.1183 0 10.8L0.00599999 2.4C0.00599999 1.74 0.534 1.2 1.2 1.2H1.8V0H3V1.2H7.8V0H9V1.2H9.6C10.26 1.2 10.8 1.74 10.8 2.4ZM1.2 3.6H9.6V2.4H1.2V3.6ZM9.6 10.8V4.8H1.2V10.8H9.6ZM7.2 6.6H8.4V5.4H7.2V6.6ZM4.8 6.6H6V5.4H4.8V6.6Z" fill="#234B64"/>
                                </svg>
                            </div>
                            <p className="text-xs text-secondary">{date}</p>
                        </div>
                        <div className="tempoLeituraPost flex items-center gap-1">
                            <div className="w-[12px] h-[12px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                    <path d="M6.7998 0C3.4914 0 0.799805 2.6916 0.799805 6C0.799805 9.3084 3.4914 12 6.7998 12C10.1082 12 12.7998 9.3084 12.7998 6C12.7998 2.6916 10.1082 0 6.7998 0ZM6.7998 10.8C4.1532 10.8 1.9998 8.6466 1.9998 6C1.9998 3.3534 4.1532 1.2 6.7998 1.2C9.4464 1.2 11.5998 3.3534 11.5998 6C11.5998 8.6466 9.4464 10.8 6.7998 10.8Z" fill="#234B64"/>
                                    <path d="M7.4002 3H6.2002V6.2484L8.176 8.2242L9.0244 7.3758L7.4002 5.7516V3Z" fill="#234B64"/>
                                </svg>
                            </div>
                            <p className="text-xs text-secondary">{readingTime}</p>
                        </div>
                    </div>
                </div>
                <p className="resumoPost max-md:text-sm text-base text-secondary">{summary}</p>
            </div>
        </div>
    );
};

export default DestaquePost;
