import img1 from "@/assests/ww1.svg";
import img2 from "@/assests/ww2.svg";
import img3 from "@/assests/ww3.svg";
import img4 from "@/assests/ww4.svg";
import img5 from "@/assests/ww5.svg";
import img6 from "@/assests/ww6.svg";
import img7 from "@/assests/wd1.svg";
import img8 from "@/assests/wd2.svg";
import img9 from "@/assests/wd3.svg";
import img10 from "@/assests/wd4.svg";
import img11 from "@/assests/wd5.svg";
import wt1 from "@/assests/wt1.svg";
import wt2 from "@/assests/wt2.svg";
import wt3 from "@/assests/wt3.svg";
import wt4 from "@/assests/wt4.svg";

import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="py-10">
      <div className="container">
        <div>
          <div className="w-w-d-main-h">What We Do</div>
          <div className="w-w-d-main-p">
            From classroom to career, we cover every step of your journey
          </div>
        </div>
        <div className="grid grid-cols-2 items-center mt-5">
          <div className="flex flex-col items-start gap-4">
            <Image
              src={img1}
              alt="Hands On Training"
              width="auto"
              height="auto"
            />
            <div className="w-w-h">Hands-On Training</div>
            <div className="w-w-p">
              Experience real-world scenarios through practical labs and
              projects.
              <br /> Our curriculum is designed to mirror actual workplace
              challenges, <br /> ensuring you're job-ready from day one.
            </div>
          </div>
          <div>
            <Image
              src={img2}
              alt="Hands On Training"
              width="auto"
              height="auto"
            />
          </div>
          <div>
            <Image src={img3} alt="Career Support" width="auto" height="auto" />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Image
              src={img4}
              alt="Hands On Training"
              width="auto"
              height="auto"
            />
            <div className="w-w-h">Career Support</div>
            <div className="w-w-p">
              Receive personalized guidance from industry experts who understand
              <br />
              your career goals. Our mentors provide ongoing support throughout
              your
              <br />
              learning journey and beyond.
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Image
              src={img5}
              alt="Placement Assistance"
              width="auto"
              height="auto"
            />
            <div className="w-w-h">Placement Assistance</div>
            <div className="w-w-p">
              Get comprehensive interview preparation, resume building, and
              direct
              <br />
              connections to our hiring partners. We're committed to helping you
              land
              <br />
              your dream job in tech.
            </div>
          </div>
          <div>
            <Image
              src={img6}
              alt="Placement Assistance"
              width="auto"
              height="auto"
            />
          </div>
        </div>
      </div>
      <div className="a-u-b-main mt-5">
        <div className="au-m">
          We believe education is not just about learning – it's
          <br />
          about transformation. Every learner who joins
          <br />
          IntegrateGo is a story waiting to be written, and our
          <br />
          passion is to help them succeed.
        </div>
      </div>
      <div className="mt-5 container">
        <div>
          <div className="w-w-d-main-h">Why We're Different</div>
        </div>
        <div className="grid grid-cols-2 gap-3 items-center mt-5">
          <Image src={img7} alt="why we diffrent" width="auto" height="auto" />
          <div className="flex flex-col items-start gap-7">
            <div className="flex items-start gap-3">
              <Image src={img8} alt="journey" width="auto" height="auto" />
              <div className="flex flex-col gap-2">
                <div className="wd-h">Personalized learning journey</div>
                <div className="wd-p">
                  Tailored curriculum that adapts to your pace and learning
                  style
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Image src={img9} alt="journey" width="auto" height="auto" />
              <div className="flex flex-col gap-2">
                <div className="wd-h">
                  Real industry experts, not freelancers
                </div>
                <div className="wd-p">
                  Learn from professionals currently working in top tech
                  companies
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Image src={img10} alt="journey" width="auto" height="auto" />
              <div className="flex flex-col gap-2">
                <div className="wd-h">Placement-first training approach</div>
                <div className="wd-p">
                  Every module designed with job requirements and market demands
                  in mind
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Image src={img11} alt="journey" width="auto" height="auto" />
              <div className="flex flex-col gap-2">
                <div className="wd-h">Global alumni network & community</div>
                <div className="wd-p">
                  Connect with successful graduates working worldwide
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-2">
                <div className="wb-tr">Trusted by</div>
                <div className="wb-num">1000+ Learners</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="wb-tr">Recognized by</div>
                <div className="wb-num">Industry Experts</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="wb-tr">Focus on</div>
                <div className="wb-num">IBM Technology</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 container">
        <div>
          <div className="w-w-d-main-h">What Drives Us</div>
          <div className="w-w-d-main-p">
            The core values that guide everything we do
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-5">
          <div className="dd-card">
            <Image src={wt1} alt="Excellence" width="auto" height="auto" />
            <div className="wt-heading">Excellence</div>
            <div className="wt-para">
              Delivering industry- standard learning experiences that exceed
              expectations and prepare you for success.
            </div>
          </div>
          <div className="dd-card">
            <Image src={wt2} alt="Excellence" width="auto" height="auto" />
            <div className="wt-heading">Integrity</div>
            <div className="wt-para">
              Honest guidance, transparent processes, and no false promises –
              just genuine commitment to your growth.
            </div>
          </div>
          <div className="dd-card">
            <Image src={wt3} alt="Excellence" width="auto" height="auto" />
            <div className="wt-heading">Innovation</div>
            <div className="wt-para">
              Constantly evolving our methods and curriculum to stay ahead of
              industry trends and technologies.
            </div>
          </div>
          <div className="dd-card">
            <Image src={wt4} alt="Excellence" width="auto" height="auto" />
            <div className="wt-heading">Community</div>
            <div className="wt-para">
              Building lasting relationships and a supportive network that
              extends far beyond the classroom.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
