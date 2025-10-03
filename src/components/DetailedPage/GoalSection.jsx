import Image from "next/image";
import tick from "@/assests/dcg1.svg";
import cc from "@/assests/dcg2.jpg";

export default function GoalSection() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex justify-center items-center flex-col">
          <div className="d-g-h">
            Two Courses. One Goal – <span> Your Career Growth</span>
          </div>
          <div className="g-c-main-p">
            <div className="g-c-c">
              <div className="flex items-center gap-3">
                <div className="c-m-du">Course 1</div>
                <div className="c-m-du-h">4 Months Program</div>
              </div>
              <div className="g-main-course-heading">
                Full Stack Integration Program
              </div>
              <div className="g-main-para">
                A comprehensive 4-month structured program designed for
                beginners and working professionals. Master IBM IIB, App Connect
                Enterprise, Linux, DevOps with real projects and dedicated
                career support.
              </div>
              <div className="flex items-center gap-2">
                <Image src={tick} width="auto" height="auto" alt="tick mark" />
                <div className="g-c-p">
                  Step-by-step roadmap from basics to advanced
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src={tick} width="auto" height="auto" alt="tick mark" />
                <div className="g-c-p">
                  3 live projects + 1 capstone integration project
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src={tick} width="auto" height="auto" alt="tick mark" />
                <div className="g-c-p">Resume building + mock interviews</div>
              </div>
              <div className="flex items-center gap-2">
                <Image src={tick} width="auto" height="auto" alt="tick mark" />
                <div className="g-c-p">
                  100% placement assistance guarantee{" "}
                </div>
              </div>
            </div>
            <div>
                <Image className="course-pr-img" src={cc} width="auto" height="auto" alt="carrer growth" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
