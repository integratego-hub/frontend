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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna,
            non nisl tincidunt ut elementum turpis.
          </div>
        </div>
        <div className="d-p-m-box">
          <div className="flex justify-between items-center">
            <div className="d-p-card">
              <Image src={dp1} alt="foundation" width="auto" height="auto" />
              <div className="flex flex-col gap-2 items-start">
                <div className="d-p-f-h">Foundation Building</div>
                <div className="d-p-f-p">
                  Linux fundamentals, Git version control, integration basics,
                  and<br /> development environment setup.
                </div>
              </div>
            </div>
            <div className="d-p-m-h">Month 1</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="d-p-m-h">Month 2</div>
            <div className="d-p-card">
              <Image src={dp1} alt="foundation" width="auto" height="auto" />
              <div className="flex flex-col gap-2 items-start">
                <div className="d-p-f-h">IBM IIB Core Development</div>
                <div className="d-p-f-p">
                  Message flows, ESQL programming, adapters,<br /> transformations,
                  and first hands-on project.
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
                  App Connect Enterprise, advanced patterns, error handling,<br />
                  monitoring, and second project.
                </div>
              </div>
            </div>
            <div className="d-p-m-h">Month 3</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="d-p-m-h">Month 4</div>
            <div className="d-p-card">
              <Image src={dp1} alt="foundation" width="auto" height="auto" />
              <div className="flex flex-col gap-2 items-start">
                <div className="d-p-f-h">Real Projects & Career Prep</div>
                <div className="d-p-f-p">
                  Capstone project, resume building, mock interviews, and<br />
                  placement assistance.
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
