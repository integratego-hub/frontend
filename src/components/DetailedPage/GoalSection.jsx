import Image from "next/image";
import tick from "@/assests/dcg1.svg";
import cc from "@/assests/dcg2.jpg";

export default function GoalSection() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex justify-center items-center flex-col">
          <div className="d-g-h">
            One Course. One Goal – <span> Your Career Growth</span>
          </div>
          <div className="g-c-main-p">
            <div className="g-c-c">
              <div className="flex items-center gap-3">
                <div className="c-m-du">Course 1</div>
                <div className="c-m-du-h">6 Months Program</div>
              </div>
              <div className="g-main-course-heading">
                IBM Integration Program
              </div>
              <div className="g-main-para">
                A comprehensive 6-month program designed to build real-time
                integration expertise from the ground up. Learn IBM Integration
                Bus (IIB), App Connect Enterprise (ACE), DevOps, and Linux at an
                architecture level, with hands-on projects, enterprise case
                studies, and dedicated career support to prepare you for
                real-world integration roles.
              </div>
              <div className="flex items-center gap-2">
                <Image src={tick} width="auto" height="auto" alt="tick mark" />
                <div className="g-c-p">
                  Hands-On Training: Build message flows, REST/SOAP APIs, and MQ
                  integrations.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src={tick} width="auto" height="auto" alt="tick mark" />
                <div className="g-c-p">
                  Data Transformation: Work with XML, JSON, CSV, and ESQL/Java
                  mappings.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src={tick} width="auto" height="auto" alt="tick mark" />
                <div className="g-c-p">
                  Deployment & Monitoring: BAR file deployment, integration
                  servers, and ACE dashboard
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src={tick} width="auto" height="auto" alt="tick mark" />
                <div className="g-c-p">
                  Career Support: Resume prep, mock interviews, and placement
                  assistance.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src={tick} width="auto" height="auto" alt="tick mark" />
                <div className="g-c-p">
                  <span className="expert_led_outcome">Outcome:</span>
                  <br /> Be a job-ready IBM Integration Developer /
                  Middleware Engineer.
                </div>
              </div>
            </div>
            <div>
              <Image
                className="course-pr-img"
                src={cc}
                width="auto"
                height="auto"
                alt="carrer growth"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
