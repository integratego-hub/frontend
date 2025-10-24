import img1 from "@/assests/am1.svg";
import img2 from "@/assests/am2.svg";
import img3 from "@/assests/am3.svg";
import img4 from "@/assests/am4.svg";

import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col md:flex md:items-center md:justify-center md:flex-row gap-5">
          <div className="mission-main">
            <Image src={img1} alt="Our Mission" width="auto" height="auto" />
            <div className="o-m-h">Our Mission</div>
            <div className="o-m-p">
              At IntegrateGo, our mission is to empower aspiring developers
              through industry-focused training in modern technologies like IBM
              Integration Bus, App Connect, DevOps, Linux, and Oracle.
            </div>
            <Image src={img3} alt="Our Mission" width="auto" height="auto" />
          </div>
          <div className="mission-main">
            <Image src={img2} alt="Our Mission" width="auto" height="auto" />
            <div className="o-m-h">Our Vision</div>
            <div className="o-m-p">
              Through expert mentorship, practical learning, and dedicated
              career support, we prepare learners to excel in the modern tech
              world and achieve lasting professional success.
            </div>
            <Image src={img4} alt="Our Mission" width="auto" height="auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
