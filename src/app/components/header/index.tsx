import Link from "next/link";

export function Header() {
    return (
        <header className="bg-secondary py-8">
            <div className="innerWidth max-w-8xl flex items-center justify-between px-4 mx-auto">
                {/* Logo e Nome */}
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="223" height="50" viewBox="0 0 223 50" fill="none">
                        <g clip-path="url(#clip0_262_120)">
                            <path d="M0.242529 6.625C2.12893 7.08119 3.97013 7.49217 5.78667 7.97302C12.7405 9.81832 19.4148 12.3952 25.7974 15.7241C26.3111 15.9913 26.7015 15.9954 27.2235 15.7241C35.1061 11.6266 43.3956 8.66347 52.0837 6.81405C52.3015 6.76884 52.5235 6.74007 52.8481 6.69076C52.8481 7.93192 52.844 9.10322 52.8481 10.2745C52.8975 20.0271 52.9386 29.7838 53.0249 39.5364C53.0331 40.3501 52.7577 40.5926 52.0221 40.7488C43.3545 42.5818 35.1225 45.6189 27.2974 49.7698C26.7221 50.074 26.3029 50.0822 25.7234 49.7698C17.8736 45.6107 9.6129 42.5571 0.916538 40.7282C0.246638 40.5885 -0.00406018 40.3748 4.96296e-05 39.6309C0.0863557 28.9002 0.131564 18.1736 0.189101 7.44285C0.189101 7.21681 0.21787 6.99077 0.242529 6.625ZM13.1679 15.0871C7.8087 15.0953 3.47695 19.4353 3.50161 24.7822C3.52216 30.0879 7.8539 34.4073 13.1597 34.4156C18.5107 34.4238 22.8712 30.0838 22.8671 24.7493C22.8671 19.3942 18.5312 15.0789 13.1679 15.083V15.0871ZM39.8159 15.083C34.4732 15.083 30.1291 19.4476 30.1496 24.7863C30.1702 30.0879 34.4978 34.4073 39.8077 34.4197C45.1546 34.432 49.5233 30.0838 49.5151 24.7534C49.5069 19.4024 45.171 15.0789 39.8159 15.083ZM21.4451 36.4746C23.2205 38.4062 24.9179 40.2515 26.6604 42.1461C28.4482 40.1981 30.1455 38.3487 31.8717 36.4705C30.1127 34.5594 28.4112 32.71 26.6563 30.7989C24.8932 32.7182 23.1958 34.5635 21.4451 36.4746Z" fill="#F07D00"/>
                            <path d="M52.8441 2.94238C52.8441 3.85065 52.8359 4.59042 52.8441 5.33018C52.8564 5.97132 52.318 5.85624 51.981 5.92611C46.7533 7.04398 41.6284 8.50707 36.6761 10.5127C33.4663 11.8155 30.3346 13.3156 27.1824 14.7663C26.6851 14.9965 26.3193 15.0088 25.8344 14.7581C17.9888 10.714 9.74446 7.78785 1.10975 5.97132C0.390529 5.81925 0.0740731 5.56444 0.164489 4.80413C0.230246 4.24519 0.176818 3.67393 0.176818 2.96293C1.50018 3.28761 2.69613 3.55064 3.87565 3.8712C11.3391 5.88912 18.3093 9.1071 25.1111 12.7155C26.1426 13.2621 26.8906 13.2539 27.9181 12.7073C34.3335 9.30437 40.9092 6.24667 47.9123 4.22054C49.4987 3.76024 51.1139 3.39035 52.84 2.94649L52.8441 2.94238Z" fill="#F07D00"/>
                            <path d="M52.6553 2.16553C43.6877 4.07249 35.4516 7.85352 27.2607 11.8647C27.7662 11.4907 28.2635 11.1003 28.7855 10.7468C33.7584 7.36034 39.1052 4.66019 44.5877 2.22307C46.3138 1.45454 48.1098 0.838063 49.8565 0.114736C50.4278 -0.123633 50.7935 0.0161003 51.2045 0.443521C51.6977 0.957248 52.2772 1.38878 52.8197 1.85319C52.7663 1.95593 52.7087 2.05868 52.6553 2.16142V2.16553Z" fill="#F07D00"/>
                            <path d="M0.267578 1.9229C0.90049 1.34342 1.49641 0.726945 2.17864 0.217328C2.40057 0.0488258 2.88964 0.0529356 3.17322 0.17623C6.27613 1.52014 9.43657 2.75719 12.4367 4.30659C16.4849 6.39438 20.4098 8.72053 24.3799 10.9563C24.8237 11.207 25.2265 11.5316 25.6087 11.9015C17.5206 7.8287 9.3215 4.07233 0.399092 2.17771C0.353884 2.0914 0.308676 2.00921 0.267578 1.9229Z" fill="#F07D00"/>
                            <path d="M12.0624 19.0979C11.1624 21.5391 11.709 23.257 13.5995 23.931C15.4489 24.5927 17.0024 23.6269 17.8162 21.3131C19.3574 22.9241 19.4642 25.8955 18.0546 28.0038C16.5216 30.3053 13.5666 31.2177 10.998 30.182C8.43348 29.1505 6.96216 26.4914 7.41835 23.7132C7.81289 21.3336 9.94178 19.217 12.0666 19.0938L12.0624 19.0979Z" fill="#F07D00"/>
                            <path d="M38.7392 19.094C37.7816 21.3544 38.2953 23.1134 40.0872 23.8696C41.9366 24.6504 43.5189 23.7298 44.4847 21.3091C46.0259 23.0312 46.0957 26.0108 44.645 28.0903C43.0873 30.3179 40.2392 31.1891 37.7076 30.2069C35.1595 29.2164 33.6512 26.6067 34.054 23.8654C34.4115 21.4078 36.4623 19.283 38.7392 19.0898V19.094Z" fill="#F07D00"/>
                            <path d="M81.1815 16.1475C81.5514 16.279 81.7939 16.4229 81.9131 16.5831C82.0322 16.7434 82.0898 16.99 82.0898 17.3311V21.0752C82.0898 21.7081 81.8268 22.0204 81.3007 22.0204C81.1158 22.0204 80.787 21.9876 80.3143 21.9218C79.8417 21.856 79.3814 21.8232 78.9334 21.8232C77.4334 21.8232 76.2908 22.3081 75.5018 23.2821C74.7127 24.2562 74.3181 25.6741 74.3181 27.5399V34.6376C74.3181 35.402 74.1537 35.9404 73.8249 36.2527C73.4962 36.5692 72.9619 36.7253 72.2303 36.7253H70.1015C69.337 36.7253 68.7986 36.561 68.4863 36.2322C68.1698 35.9034 68.0137 35.3732 68.0137 34.6376V17.6435C68.0137 16.6982 68.4205 16.2256 69.2343 16.2256C69.8384 16.2256 70.5001 16.4886 71.2234 17.0147C71.9468 17.5407 72.5715 18.2517 73.0975 19.1436C74.3839 16.9366 76.3566 15.8311 79.0115 15.8311C79.9321 15.8311 80.6555 15.9379 81.1815 16.1475Z" fill="#F07D00"/>
                            <path d="M104.131 26.599C104.131 27.31 103.987 27.8155 103.699 28.1155C103.407 28.4196 102.885 28.5676 102.121 28.5676H89.8984C90.1861 29.5663 90.8314 30.3882 91.8301 31.0335C92.8287 31.6787 94.1316 31.9993 95.7344 31.9993C97.1523 31.9993 98.4674 31.8267 99.6757 31.4855C100.884 31.1444 101.505 30.9718 101.529 30.9718C102.24 30.9718 102.594 31.354 102.594 32.1143V34.3994C102.594 35.2666 102.318 35.8707 101.768 36.2118C100.374 37.079 98.1551 37.5146 95.1056 37.5146C91.8177 37.5146 89.0929 36.5406 86.9229 34.5967C84.753 32.6527 83.668 30.0101 83.668 26.6729C83.668 23.6522 84.6461 21.0877 86.6065 18.9835C88.5628 16.8793 91.0163 15.8271 93.9589 15.8271C97.218 15.8271 99.7291 16.793 101.488 18.7246C103.247 20.6562 104.131 23.2782 104.131 26.5908V26.599ZM94.037 21.1165C92.8781 21.1165 91.941 21.4247 91.2177 22.0412C90.4944 22.6577 90.0423 23.4796 89.8573 24.5071H98.0194C97.8879 23.4837 97.4852 22.6618 96.8153 22.0412C96.1454 21.4247 95.2207 21.1165 94.037 21.1165Z" fill="#F07D00"/>
                            <path d="M119.9 15.8311C122.975 15.8311 125.486 16.8503 127.43 18.8888C129.374 20.9272 130.348 23.5205 130.348 26.6769C130.348 29.8332 129.341 32.3278 127.331 34.4033C125.321 36.4788 122.818 37.5185 119.818 37.5185C117.636 37.5185 115.745 36.9267 114.143 35.7431V45.1669C114.143 46.1122 113.748 46.5848 112.959 46.5848C111.673 46.5848 110.493 45.8574 109.429 44.3984C108.364 42.9394 107.834 41.0407 107.834 38.7022V17.6476C107.834 16.7023 108.241 16.2297 109.055 16.2297C109.605 16.2297 110.226 16.4599 110.908 16.9202C111.59 17.3805 112.194 18.0051 112.721 18.7942C113.432 17.9517 114.43 17.2489 115.717 16.6859C117.003 16.1229 118.396 15.8393 119.896 15.8393L119.9 15.8311ZM119.033 31.8388C120.426 31.8388 121.598 31.3662 122.543 30.4209C123.488 29.4756 123.961 28.2263 123.961 26.6769C123.961 25.1275 123.488 23.9109 122.543 22.9493C121.598 21.9917 120.426 21.5108 119.033 21.5108C117.64 21.5108 116.477 21.9917 115.544 22.9493C114.611 23.9109 114.143 25.1521 114.143 26.6769C114.143 28.2016 114.615 29.4756 115.56 30.4209C116.506 31.3662 117.665 31.8388 119.029 31.8388H119.033Z" fill="#F07D00"/>
                            <path d="M153.178 26.599C153.178 27.31 153.034 27.8155 152.742 28.1155C152.454 28.4196 151.928 28.5676 151.164 28.5676H138.941C139.229 29.5663 139.874 30.3882 140.873 31.0335C141.872 31.6787 143.174 31.9993 144.777 31.9993C146.195 31.9993 147.51 31.8267 148.718 31.4855C149.927 31.1444 150.543 30.9718 150.572 30.9718C151.283 30.9718 151.636 31.354 151.636 32.1143V34.3994C151.636 35.2666 151.361 35.8707 150.81 36.2118C149.417 37.079 147.198 37.5146 144.148 37.5146C140.86 37.5146 138.136 36.5406 135.966 34.5967C133.796 32.6527 132.715 30.0101 132.715 26.6729C132.715 23.6522 133.693 21.0877 135.653 18.9835C137.614 16.8793 140.063 15.8271 143.006 15.8271C146.265 15.8271 148.776 16.793 150.535 18.7246C152.294 20.6562 153.178 23.2782 153.178 26.5908V26.599ZM143.084 21.1165C141.925 21.1165 140.988 21.4247 140.265 22.0412C139.541 22.6577 139.089 23.4796 138.904 24.5071H147.066C146.935 23.4837 146.536 22.6618 145.862 22.0412C145.192 21.4247 144.263 21.1165 143.084 21.1165Z" fill="#F07D00"/>
                            <path d="M175.769 18.7488C177.372 20.6147 178.174 23.3888 178.174 27.0671V34.6374C178.174 35.4018 178.009 35.9402 177.68 36.2525C177.352 36.569 176.817 36.7251 176.086 36.7251H173.957C173.221 36.7251 172.687 36.569 172.358 36.2525C172.029 35.9361 171.865 35.3977 171.865 34.6374V27.2644C171.865 25.3985 171.536 24.0464 170.879 23.2039C170.168 22.2833 169.103 21.823 167.685 21.823C166.267 21.823 165.162 22.2833 164.373 23.2039C163.584 24.1245 163.189 25.4643 163.189 27.2274V34.6415C163.189 35.3771 163.033 35.9114 162.717 36.2361C162.4 36.5649 161.862 36.7293 161.101 36.7293H158.973C158.208 36.7293 157.67 36.5649 157.357 36.2361C157.041 35.9073 156.885 35.3771 156.885 34.6415V17.6474C156.885 16.7021 157.292 16.2295 158.105 16.2295C158.685 16.2295 159.314 16.4597 159.996 16.92C160.678 17.3803 161.282 18.0296 161.808 18.8721C162.622 17.8981 163.641 17.1501 164.862 16.624C166.083 16.098 167.34 15.835 168.626 15.835C171.676 15.835 174.056 16.809 175.761 18.7529L175.769 18.7488Z" fill="#F07D00"/>
                            <path d="M190.12 37.3995C188.727 37.3995 187.346 37.268 185.981 37.005C184.613 36.7419 183.643 36.4543 183.063 36.1378C182.352 35.7433 181.999 35.1515 181.999 34.3624V32.4308C181.999 31.4567 182.418 30.9718 183.261 30.9718C183.417 30.9718 184.247 31.2019 185.743 31.6622C187.243 32.1225 188.883 32.3527 190.671 32.3527C192.22 32.3527 192.997 31.8389 192.997 30.8156C192.997 30.3183 192.787 29.9608 192.368 29.7512C191.949 29.5416 191.119 29.3196 189.886 29.0813L188.624 28.8429C186.466 28.4483 184.818 27.8031 183.676 26.9113C182.533 26.0194 181.962 24.6509 181.962 22.8097C181.962 20.3643 182.784 18.6094 184.428 17.545C186.072 16.4806 188.18 15.9463 190.757 15.9463C193.621 15.9463 195.882 16.3408 197.538 17.1299C198.249 17.471 198.603 18.0628 198.603 18.9054V20.837C198.603 21.7576 198.183 22.2179 197.341 22.2179C197.053 22.2179 196.165 22.0124 194.678 21.6055C193.194 21.1986 191.858 20.9931 190.675 20.9931C189.125 20.9931 188.349 21.4411 188.349 22.3329C188.349 22.7809 188.546 23.1015 188.94 23.2987C189.335 23.496 190.124 23.7015 191.308 23.9111L192.413 24.1084C194.674 24.5029 196.4 25.1605 197.6 26.0811C198.796 27.0017 199.396 28.5264 199.396 30.6553C199.396 32.9938 198.541 34.7035 196.831 35.7803C195.122 36.857 192.89 37.3954 190.128 37.3954L190.12 37.3995Z" fill="#F07D00"/>
                            <path d="M222.251 26.599C222.251 27.31 222.107 27.8155 221.815 28.1155C221.528 28.4196 221.001 28.5676 220.237 28.5676H208.014C208.302 29.5663 208.947 30.3882 209.946 31.0335C210.945 31.6787 212.248 31.9993 213.85 31.9993C215.268 31.9993 216.583 31.8267 217.792 31.4855C219 31.1444 219.616 30.9718 219.645 30.9718C220.356 30.9718 220.71 31.354 220.71 32.1143V34.3994C220.71 35.2666 220.434 35.8707 219.884 36.2118C218.49 37.079 216.271 37.5146 213.222 37.5146C209.934 37.5146 207.209 36.5406 205.039 34.5967C202.869 32.6527 201.788 30.0101 201.788 26.6729C201.788 23.6522 202.766 21.0877 204.727 18.9835C206.687 16.8793 209.136 15.8271 212.079 15.8271C215.338 15.8271 217.849 16.793 219.608 18.7246C221.367 20.6562 222.251 23.2782 222.251 26.5908V26.599ZM212.161 21.1165C211.002 21.1165 210.065 21.4247 209.342 22.0412C208.619 22.6577 208.167 23.4796 207.982 24.5071H216.144C216.012 23.4837 215.613 22.6618 214.939 22.0412C214.27 21.4247 213.341 21.1165 212.161 21.1165Z" fill="#F07D00"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_262_120">
                            <rect width="222.251" height="50" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
        
                {/* Navegação */}
                <nav className="flex space-x-6 text-tertiary font-medium">
                    <Link className="hover:text-primary" href="/">Home</Link>
                    <Link className="hover:text-primary" href="/sobre">Sobre nós</Link>
                    <Link className="hover:text-primary" href="/blog">Blog</Link>
                    <Link className="hover:text-primary" href="/aplicativo">App</Link>
                    <Link className="hover:text-primary" href="/contato">Contato</Link>
                </nav>
        
                {/* Botão de Login */}
                <button className="bg-primary flex items-center text-tertiary rounded hover:bg-opacity-90 py-3 px-6">
                    <span>Login</span>
                </button>
            </div>
        </header>
    );
  }
  