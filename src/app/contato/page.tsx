
export default function Contato() {
  return (
    <div>
      <section className="contatoPagina max-md:pb-16 py-32">
        <div className="innerWidth max-w-8xl max-md:flex-col flex items-center justify-between gap-8 px-4 mx-auto">
          <div className="contatoConteudo w-full flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-primary max-md:text-3xl max-md:text-center font-caveat text-5xl font-bold">Entre em contato com nossa equipe</h2>
              <p className="max-md:text-sm max-md:text-center text-xl">Se você gostou do nosso trabalho ou quer fazer parte da nossa equipe, entre em contato!</p>
            </div>
            <div className="infosContato flex flex-col gap-8">
              <div className="contatoItem w-full flex gap-6">
                <div className="h-fit bg-tertiary rounded-lg p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.9777 21.4805C17.8369 21.4805 15.7218 21.0146 13.6325 20.0828C11.5431 19.1508 9.63679 17.8255 7.91345 16.107C6.19029 14.3885 4.86279 12.483 3.93095 10.3905C2.99912 8.29803 2.5332 6.17978 2.5332 4.03578C2.5332 3.60261 2.6762 3.24161 2.9622 2.95278C3.24837 2.66395 3.60604 2.51953 4.0352 2.51953H8.0712C8.5212 2.51953 8.89437 2.63878 9.1907 2.87728C9.4872 3.11561 9.68037 3.44203 9.7702 3.85653L10.406 7.05978C10.477 7.46778 10.471 7.81528 10.388 8.10228C10.3051 8.38911 10.1405 8.64161 9.89395 8.85978L7.3842 11.1968C7.67987 11.7098 8.02862 12.2161 8.43045 12.7158C8.83229 13.2154 9.28937 13.7131 9.8017 14.2088C10.2712 14.6783 10.7422 15.1009 11.2147 15.4765C11.6872 15.8524 12.1741 16.1859 12.6755 16.4773L15.1245 14.0705C15.3781 13.8264 15.6729 13.6574 16.0087 13.5635C16.3445 13.4697 16.6998 13.4583 17.0745 13.5293L20.143 14.187C20.5741 14.3102 20.9047 14.5087 21.1347 14.7825C21.3649 15.0565 21.48 15.4008 21.48 15.8153V19.9643C21.48 20.3974 21.3352 20.7584 21.0457 21.0473C20.7562 21.3361 20.4002 21.4805 19.9777 21.4805ZM6.1092 8.77403L7.7452 7.25103L7.34845 5.16953H5.2222C5.2867 5.78703 5.3867 6.39586 5.5222 6.99603C5.6577 7.5962 5.85337 8.18886 6.1092 8.77403ZM15.1157 17.7945C15.7092 18.0497 16.3175 18.2559 16.9407 18.413C17.5639 18.5704 18.1936 18.6834 18.83 18.7523V16.6228L16.7625 16.176L15.1157 17.7945Z" fill="#234B64"/>
                  </svg>
                </div>
                <div>
                  <h3 className="max-md:text-base text-primary text-2xl font-bold">Telefone</h3>
                  <p className="max-md:text-sm text-base">+55 (00) 0 0000-0000</p>
                </div>
              </div>
              <div className="contatoItem w-full flex gap-6">
                <div className="h-fit bg-tertiary rounded-lg p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4.16953 20.4805C3.4312 20.4805 2.80495 20.2234 2.29078 19.7093C1.77661 19.1951 1.51953 18.5689 1.51953 17.8305V6.16953C1.51953 5.4312 1.77661 4.80495 2.29078 4.29078C2.80495 3.77661 3.4312 3.51953 4.16953 3.51953H19.8305C20.5689 3.51953 21.1951 3.77661 21.7093 4.29078C22.2234 4.80495 22.4805 5.4312 22.4805 6.16953V17.8305C22.4805 18.5689 22.2234 19.1951 21.7093 19.7093C21.1951 20.2234 20.5689 20.4805 19.8305 20.4805H4.16953ZM19.8305 8.60778L12.7088 13.1555C12.5989 13.2244 12.4836 13.2759 12.3628 13.3103C12.2419 13.3448 12.121 13.362 12 13.362C11.879 13.362 11.7581 13.3448 11.6373 13.3103C11.5164 13.2759 11.4011 13.2244 11.2913 13.1555L4.16953 8.60778V17.8305H19.8305V8.60778ZM12 11.1695L19.8305 6.16953H4.16953L12 11.1695ZM4.16953 8.91428V7.14753V7.17928V6.16953V7.18153V7.14778V8.91428Z" fill="#234B64"/>
                  </svg>
                </div>
                <div>
                  <h3 className="max-md:text-base text-primary text-2xl font-bold">E-mail</h3>
                  <p className="max-md:text-sm text-base">contato@repense.com.br</p>
                </div>
              </div>
              <div className="contatoItem w-full flex gap-6">
                <div className="h-fit bg-tertiary rounded-lg p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 18.9685C13.9674 17.1772 15.4309 15.5779 16.3908 14.1708C17.3506 12.7634 17.8305 11.421 17.8305 10.1435C17.8305 8.39303 17.2677 6.95978 16.142 5.84378C15.0162 4.72761 13.6354 4.16953 11.9995 4.16953C10.3637 4.16953 8.98303 4.72761 7.85753 5.84378C6.7322 6.95978 6.16953 8.39303 6.16953 10.1435C6.16953 11.421 6.64945 12.761 7.60928 14.1635C8.56911 15.5662 10.0327 17.1679 12 18.9685ZM11.9968 21.7208C11.7279 21.7208 11.4599 21.6744 11.1928 21.5815C10.9256 21.4889 10.6871 21.3498 10.4773 21.1643C9.33745 20.1359 8.33195 19.142 7.46078 18.1825C6.58978 17.2232 5.86336 16.2883 5.28153 15.3778C4.6997 14.4673 4.26053 13.5784 3.96403 12.711C3.6677 11.8435 3.51953 10.9877 3.51953 10.1435C3.51953 7.5142 4.37203 5.41953 6.07703 3.85953C7.78186 2.29953 9.7562 1.51953 12 1.51953C14.2439 1.51953 16.2182 2.29953 17.923 3.85953C19.628 5.41953 20.4805 7.5142 20.4805 10.1435C20.4805 10.9877 20.3324 11.8435 20.036 12.711C19.7395 13.5784 19.3004 14.4673 18.7185 15.3778C18.1367 16.2883 17.4103 17.2232 16.5393 18.1825C15.6681 19.142 14.6626 20.1359 13.5228 21.1643C13.3116 21.3498 13.0717 21.4889 12.803 21.5815C12.5342 21.6744 12.2654 21.7208 11.9968 21.7208ZM12 12.1413C12.5972 12.1413 13.1034 11.9337 13.5185 11.5185C13.9337 11.1034 14.1413 10.5972 14.1413 10C14.1413 9.40286 13.9337 8.8967 13.5185 8.48153C13.1034 8.06636 12.5972 7.85878 12 7.85878C11.4029 7.85878 10.8967 8.06636 10.4815 8.48153C10.0664 8.8967 9.85878 9.40286 9.85878 10C9.85878 10.5972 10.0664 11.1034 10.4815 11.5185C10.8967 11.9337 11.4029 12.1413 12 12.1413Z" fill="#234B64"/>
                  </svg>
                </div>
                <div>
                  <h3 className="max-md:text-base text-primary text-2xl font-bold">Localização</h3>
                  <p className="max-md:text-sm text-base">Av Luís Viana, 13223, Hangar Business Park, Torre 01 sala 313</p>
                </div>
              </div>
            </div>
            <div className="socialContato flex gap-8">
              <a href="#">
                <div className="socialItem bg-tertiary rounded-lg p-4 hover:bg-primary duration-700 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.47541 2.00008H20.5246C20.9103 1.99699 21.2817 2.14628 21.558 2.41549C21.8342 2.6847 21.9931 3.05208 22 3.43777V20.5557C21.9948 20.9425 21.8367 21.3116 21.5603 21.5822C21.2838 21.8528 20.9114 22.003 20.5246 21.9999H3.47541C3.08914 22.0039 2.71703 21.8546 2.44052 21.5849C2.16401 21.3151 2.00562 20.9468 2 20.5606V3.44269C2.00476 3.05587 2.16277 2.68673 2.43938 2.41627C2.71598 2.14582 3.08858 1.99614 3.47541 2.00008ZM7.61711 5.28399C7.34043 5.09883 7.0151 5 6.68231 5C6.23641 5 5.80875 5.17725 5.4933 5.49279C5.17786 5.80833 5.00043 6.23636 5 6.68282C4.99968 7.01604 5.09808 7.34186 5.28274 7.61908C5.4674 7.89629 5.73003 8.11244 6.03741 8.24017C6.34478 8.36791 6.68309 8.4015 7.00953 8.33668C7.33597 8.27187 7.63588 8.11157 7.87131 7.87606C8.10675 7.64056 8.26713 7.34042 8.33217 7.01363C8.39721 6.68684 8.36399 6.34808 8.23671 6.0402C8.10943 5.73231 7.8938 5.46915 7.61711 5.28399ZM5.23072 9.65223H8.1323V19H5.23072V9.65223ZM12.7338 9.65223H9.95239V19H12.8492V14.3815C12.8492 13.1558 13.1023 11.9751 14.5908 11.9751C16.0792 11.9751 16.0984 13.3692 16.0984 14.452V19H19V13.8665C19 11.3559 18.4553 9.41962 15.5168 9.42603C14.1053 9.42603 13.16 10.2009 12.7723 10.9356H12.7338V9.65223Z" fill="#234B64"/>
                  </svg>
                </div>
              </a>
              <a href="#">
                <div className="socialItem bg-tertiary rounded-lg p-4 hover:bg-primary duration-700 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="#234B64"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full">
            <form className="w-full bg-tertiary shadow-lg rounded-lg p-8">
              <div className="mb-4">
                <label htmlFor="nome" className="block text-secondary font-medium mb-2">Nome</label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Digite o seu nome"
                  className="w-full border border-secondary rounded-lg bg-transparent text-secondary placeholder-secondary px-4 py-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-secondary font-medium mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite o seu e-mail"
                  className="w-full border border-secondary rounded-lg bg-transparent text-secondary placeholder-secondary px-4 py-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="assunto" className="block text-secondary font-medium mb-2">Assunto</label>
                <input
                  type="text"
                  id="assunto"
                  placeholder="Qual seria o assunto?"
                  className="w-full border border-secondary rounded-lg bg-transparent text-secondary placeholder-secondary px-4 py-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mensagem" className="block text-secondary font-medium mb-2">Mensagem</label>
                <textarea
                  id="mensagem"
                  placeholder="Digite uma mensagem para nós!"
                  className="w-full border border-secondary rounded-lg bg-transparent text-secondary placeholder-secondary px-4 py-3 min-h-[104px]"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full bg-primary text-tertiary rounded-lg px-6 py-3 font-medium hover:opacity-90"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
