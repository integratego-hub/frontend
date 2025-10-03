import sm1 from "@/assests/sm1.svg";
import sm2 from "@/assests/sm2.svg";
import sm3 from "@/assests/sm3.svg";
import sm4 from "@/assests/sm4.svg";
import sm5 from "@/assests/sm5.svg";
import sm6 from "@/assests/sm6.svg";
import sm7 from "@/assests/sm7.svg";
import sm8 from "@/assests/sm8.svg";
import sm9 from "@/assests/sm9.svg";
import sm10 from "@/assests/sm10.svg";
import sm11 from "@/assests/sm11.svg";


import Image from "next/image";

export default function SkillsMaster() {
  return (
    <section className="py-10 sm-container">
      <div className="container">
        <div className="s-m-con">
          <div className="s-m-h">Skills You'll Master</div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="s-ss-1"
              viewBox="0 0 795 237"
              fill="none"
            >
              <path
                d="M398 236.67C617.533 236.67 795 183.84 795 118.67C795 53.5003 617.533 0.669922 398 0.669922C178.467 0.669922 0 53.5003 0 118.67C0 183.84 178.467 236.67 398 236.67Z"
                fill="url(#fillGradient)"
                stroke="url(#strokeGradient)"
              />
              <defs>
                <linearGradient
                  id="fillGradient"
                  x1="397.5"
                  y1="79.1699"
                  x2="397.5"
                  y2="279.17"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7A51DE" stopOpacity="0" />
                  <stop offset="1" stopColor="#8E88FF" stopOpacity="0.08" />
                </linearGradient>

                <linearGradient
                  id="strokeGradient"
                  x1="398"
                  y1="0.169922"
                  x2="398"
                  y2="236.17"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.15" stopColor="#FAFAF3" stopOpacity="0" />
                  <stop offset="1" stopColor="#8E88FF" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute top-[130%] left-[0%]">
              <Image src={sm1} alt="ibm" width="auto" height="auto" />
              <div>IBM IIB</div>
            </div>
            <div className="absolute top-[230%] left-[33%] flex items-center flex-col">
              <Image src={sm2} alt="ibm" width="auto" height="auto" />
              <div>
                ACE Advanced <br /> Development
              </div>
            </div>
            <div className="absolute top-[220%] left-[66%] flex items-center flex-col">
              <Image src={sm3} alt="ibm" width="auto" height="auto" />
              <div>App Connect</div>
            </div>
            <div className="absolute top-[130%] left-[96%]  flex items-center flex-col">
              <Image src={sm4} alt="ibm" width="auto" height="auto" />
              <div>Linux</div>
            </div>
          </div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="s-ss-2"
              viewBox="0 0 1154 343"
              fill="none"
            >
              <path
                d="M1153 171.67C1153 195.035 1137.12 217.245 1108 237.67C1078.89 258.084 1037.14 276.205 985 291.67C880.74 322.598 736.162 341.67 577 341.67C417.838 341.67 273.268 322.598 169 291.67C116.863 276.205 75.111 258.084 46 237.67C16.876 217.245 1 195.035 1 171.67C1 148.305 16.876 125.095 46 104.67C75.111 84.2559 116.863 66.1347 169 50.6699C273.268 19.7421 417.838 0.669922 577 0.669922C736.162 0.669922 880.74 19.7421 985 50.6699C1037.14 66.1347 1078.89 84.2559 1108 104.67C1137.12 125.095 1153 148.305 1153 171.67Z"
                fill="url(#fillGradient)"
                stroke="url(#strokeGradient)"
              />
              <defs>
                <linearGradient
                  id="fillGradient"
                  x1="576.5"
                  y1="114.428"
                  x2="576.5"
                  y2="404.259"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7A51DE" stopOpacity="0" />
                  <stop offset="1" stopColor="#8E88FF" stopOpacity="0.08" />
                </linearGradient>

                <linearGradient
                  id="strokeGradient"
                  x1="577"
                  y1="0.169922"
                  x2="577"
                  y2="342.17"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.149299" stopColor="#FAFAF3" stopOpacity="0" />
                  <stop offset="1" stopColor="#8E88FF" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute top-[200%] left-[0%]  flex items-center flex-col">
              <Image src={sm5} alt="ibm" width="auto" height="auto" />
              <div>Devops</div>
            </div>
            <div className="absolute top-[330%] left-[33%]  flex items-center flex-col">
              <Image src={sm6} alt="ibm" width="auto" height="auto" />
              <div>ESQL</div>
            </div>
            <div className="absolute top-[310%] left-[66%]  flex items-center flex-col">
              <Image src={sm7} alt="ibm" width="auto" height="auto" />
              <div>Integration Best Practices</div>
            </div>
            <div className="absolute top-[210%] left-[92%]  flex items-center flex-col">
              <Image src={sm8} alt="ibm" width="auto" height="auto" />
              <div>Troubleshooting</div>
            </div>
          </div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="s-ss-3"
              viewBox="0 0 1437 427"
              fill="none"
            >
              <path
                d="M1436 213.67C1436 242.834 1416.39 270.221 1380 295.67C1343.63 321.11 1290.12 344.405 1225 363.67C1094.76 402.199 915.788 425.67 717 425.67C518.212 425.67 338.237 402.199 208 363.67C142.878 344.405 89.372 321.11 53 295.67C16.6139 270.221 -3 242.834 -3 213.67C-3 184.506 16.6139 156.119 53 130.67C89.372 105.23 142.878 81.9349 208 62.6699C338.237 24.1413 518.212 0.669922 717 0.669922C915.788 0.669922 1094.76 24.1413 1225 62.6699C1290.12 81.9349 1343.63 105.23 1380 130.67C1416.39 156.119 1436 184.506 1436 213.67Z"
                stroke="url(#paint0_linear_3_1065)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3_1065"
                  x1="716.5"
                  y1="0.169922"
                  x2="716.5"
                  y2="426.17"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0.149299"
                    stop-color="#FAFAF3"
                    stop-opacity="0"
                  />
                  <stop offset="1" stop-color="#8E88FF" />
                </linearGradient>
              </defs>
            </svg>
             <div className="absolute top-[63%] left-[0%]  flex items-center flex-col">
              <Image src={sm9} alt="ibm" width="auto" height="auto" />
              <div>Fast-Track Learning</div>
            </div>
            <div className="absolute top-[90%] left-[50%]  flex items-center flex-col">
              <Image src={sm10} alt="ibm" width="auto" height="auto" />
              <div>Portfolio</div>
            </div>
            <div className="absolute top-[65%] left-[90%]  flex items-center flex-col">
              <Image src={sm11} alt="ibm" width="auto" height="auto" />
              <div>Certification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
