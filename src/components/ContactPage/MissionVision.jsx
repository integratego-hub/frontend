import img1 from "@/assests/am1.svg";
import img2 from "@/assests/am2.svg";
import img3 from "@/assests/am3.svg";
import img4 from "@/assests/am4.svg";

import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex items-center justify-center gap-5">
          <div className="mission-main">
            <Image src={img1} alt="Our Mission" width="auto" height="auto" />
            <div className="o-m-h">Our Mission</div>
            <div className="o-m-p">
              To empower learners with industry-standard integration training,<br />
              bridging academics and real-world careers.
            </div>
            <Image src={img3} alt="Our Mission" width="auto" height="auto" />
          </div>
            <div className="mission-main">
            <Image src={img2} alt="Our Mission" width="auto" height="auto" />
            <div className="o-m-h">Our Vision</div>
            <div className="o-m-p">
              To be the most trusted platform for integration technologies<br />
worldwide.
            </div>
            <Image src={img4} alt="Our Mission" width="auto" height="auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
