import Image from "next/image";
import dp1 from "@/assests/dp1.svg";
import dp2 from "@/assests/dp2.svg";
import dp3 from "@/assests/dp3.svg";
import dp4 from "@/assests/dp4.svg";
import dpl from "@/assests/dpl.png";

export default function ProcessSection() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col gap-2">
          <div className="p-m-h">What’s our process</div>
          <div className="p-m-p">
            From learning to placement — a proven process that builds skills, confidence, and career success.
          </div>
        </div>
        <div className="d-p-m-box">
          <div className="flex justify-between items-center">
            <div className="d-p-card">
              <Image src={dp1} alt="foundation" width="auto" height="auto" />
              <div className="flex flex-col gap-2 items-start">
                <div className="d-p-f-h">Foundation Building</div>
                <div className="d-p-f-p">
                  Build a strong integration foundation by mastering EAI, IBM
                  IIB/ACE <br /> architecture,and hands-on data transformation
                  skills.
                </div>
              </div>
            </div>
            <div className="d-p-m-h">Month 1 - 2</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="d-p-m-h">Month 2 - 3</div>
            <div className="d-p-card">
              <Image src={dp1} alt="foundation" width="auto" height="auto" />
              <div className="flex flex-col gap-2 items-start">
                <div className="d-p-f-h">IBM IIB Core Development</div>
                <div className="d-p-f-p">
                  Master IBM IIB core development — from message flows and ESQL
                  <br />
                  to connectivity, debugging, and real-world integration
                  projects.
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="d-p-card">
              <Image src={dp1} alt="foundation" width="auto" height="auto" />
              <div className="flex flex-col gap-2 items-start">
                <div className="d-p-f-h">ACE Advanced Concepts</div>
                <div className="d-p-f-p">
                  Master advanced IBM ACE concepts — from APIs and integration{" "}
                  <br />
                  patterns to deployment, monitoring, and real-world enterprise
                  projects.
                </div>
              </div>
            </div>
            <div className="d-p-m-h">Month 3 - 4</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="d-p-m-h">Month 4 - 6</div>
            <div className="d-p-card">
              <Image src={dp1} alt="foundation" width="auto" height="auto" />
              <div className="flex flex-col gap-2 items-start">
                <div className="d-p-f-h">Real Projects, Career Prep & Job support</div>
                <div className="d-p-f-p">
                  Gain real-world integration experience through IBM IIB/ACE <br />
                  projects and career prep with resume, interview, and job
                  support.
                </div>
              </div>
            </div>
          </div>
          <div className="dpl">
            <Image src={dpl} alt="line" width="auto" height="auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
