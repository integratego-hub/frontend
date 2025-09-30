import e1 from "@/assests/e1.svg";
import e2 from "@/assests/e2.svg";
import e3 from "@/assests/e3.svg";
import Image from "next/image";

export default function EnrollNow() {
  return (
    <section className="">
      <div className="container">
        <div className="enroll_main">
          <div className="flex flex-col gap-4 justify-center">
            <div className="enroll_head">
              Your Integration Career <br /> Starts Today
            </div>
            <div className="enroll_desc">
              Join thousands of professionals who have transformed their careers
              with our proven <br /> training programs
            </div>
            <div className="flex items-center gap-[28px] justify-center">
              <div className="enroll_now">Enroll Now</div>
              <div className="enroll_talk">Talk to Advisor</div>
            </div>
            <div className="flex items-center gap-[32px] justify-center">
              <div className="flex items-center gap-2">
                <Image
                  src={e1}
                  width="auto"
                  height="auto"
                  alt="safe enrollment"
                />
                <div className="enroll_text">Safe Enrollment</div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={e2}
                  width="auto"
                  height="auto"
                  alt="Money-Back Guarantee"
                />
                <div className="enroll_text">Money-Back Guarantee</div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={e3}
                  width="auto"
                  height="auto"
                  alt="Verified by Alumni"
                />
                <div className="enroll_text">Verified by Alumni</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
