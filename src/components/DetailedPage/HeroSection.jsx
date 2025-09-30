import Image from "next/image";
import main1 from "@/assests/dmainbg.svg";
import main2 from "@/assests/detailsmain.svg";
import ld1 from "@/assests/ld1.svg";
import ld2 from "@/assests/ld2.svg";
import ld3 from "@/assests/ld3.svg";
import ld4 from "@/assests/ld4.svg";

export default function HeroSection() {
  return (
    <section className=" py-10">
      <div className="container">
        <div className="d_main_head">
          Advance Your Career <br /> with <br />{" "}
          <span className="expert_led">Expert-Led</span> Integration <br />{" "}
          Programs
          <div className="d_main_desc mt-3 text-center">
            Choose from two industry-recognized courses designed to
            <br /> transform beginners and professionals into job-ready
            <br /> integration experts with hands-on projects and placement
            <br /> support.
          </div>
          <div className="absolute -top-[-30%]">
            <Image
              src={main1}
              width="auto"
              height="auto"
              alt="Learning elelemnts"
            />
          </div>
        </div>
        <div className="mt-5">
          <Image
            src={main2}
            width="auto"
            height="auto"
            alt="Learning elelemnts"
          />
        </div>
      </div>
      <div className="l_scope_numbers mt-5">
        <div className="grid grid-cols-4 gap-4">
          <div className="l_card">
            <div className="flex flex-col gap-2 items-center align-middle">
              <div className="l_Card_img">
                <Image src={ld1} alt="curriculm" width="auto" height="auto" />
              </div>
              <div className="l_Card_head">1000+</div>
              <div className="l_card_desc">Learners Trained</div>
            </div>
          </div>

          <div className="l_card">
            <div className="flex flex-col gap-2 items-center">
              <div className="l_Card_img">
                <Image src={ld2} alt="curriculm" width="auto" height="auto" />
              </div>
              <div className="l_Card_head text-center">100%</div>
              <div className="l_card_desc">IBM-Certified Curriculum</div>
            </div>
          </div>

          <div className="l_card">
            <div className="flex flex-col gap-2 items-center">
              <div className="l_Card_img">
                <Image src={ld3} alt="curriculm" width="auto" height="auto" />
              </div>
              <div className="l_Card_head">85%</div>
              <div className="l_card_desc">Placement Rate</div>
            </div>
          </div>

          <div className="l_card">
            <div className="flex flex-col gap-2 items-center">
              <div className="l_Card_img">
                <Image src={ld4} alt="curriculm" width="auto" height="auto" />
              </div>
              <div className="l_Card_head">100%</div>
              <div className="l_card_desc">Project-Based Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
