import dt1 from "@/assests/dt1.svg";
import dt2 from "@/assests/dt2.svg";
import dt3 from "@/assests/dt3.svg";
import dt4 from "@/assests/dt4.svg";
import Image from "next/image";

const beforePoints = [
  "Confused about IBM integration technologies",
  "No structured learning path or guidance",
  "Limited hands-on project experience",
  "Uncertain about career opportunities",
  "Lack of industry-relevant skills",
  "Limited IBM tool knowledge and experience",
  "No hands-on practice with real scenarios",
  "Unclear about integration best practices",
  "Missing certification credentials",
  "Difficulty troubleshooting issues",
];
const afterPoints = [
  "Confident in IBM IIB & ACE development",
  "Strong project portfolio showcasing skills",
  "Job-ready with interview preparation",
  "Industry connections and placement support",
  "Certified integration professional",
  "Strong proficiency in IIB & ACE",
  "Hands-on experience with real projects",
  "Ready for IBM certification exams",
  "Confident troubleshooting abilities",
  "Industry-ready integration skills",
];

export default function Trnasformation() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="t-j-m-h my-20">Your Transformation Journey</div>
        <div className="flex gap-[32px]">
          <div className="t-main-card">
            <div className="flex flex-col items-start gap-3">
              <div className="flex gap-2 items-center">
                <Image src={dt3} alt="before" width="auto" height="auto" />
                <div className="t-before-h">Before</div>
              </div>
              <div className="flex flex-col gap-3">
                {beforePoints.map((item, index) => (
                  <li className="b-p" key={index}>
                    {item}
                  </li>
                ))}
              </div>
            </div>
            <Image
              className="absolute right-[10px] -top-[10px]"
              src={dt1}
              alt="feeling confused"
              width="auto"
              height="auto"
            />
          </div>
          <div className="t-main-card-after">
            <div className="flex flex-col items-start gap-3">
              <div className="flex gap-2 items-center">
                <Image src={dt4} alt="before" width="auto" height="auto" />
                <div className="t-before-h">After</div>
              </div>
              <div className="flex flex-col gap-3">
                {afterPoints.map((item, index) => (
                  <li className="b-p" key={index}>
                    {item}
                  </li>
                ))}
              </div>
            </div>
            <Image
              className="absolute right-[10px] -top-[10px]"
              src={dt2}
              alt="feeling confused"
              width="auto"
              height="auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
