import Image from "next/image";
import heroImg from "@/assests/hero_img.svg";
import award1 from "@/assests/award1.svg";
import award2 from "@/assests/award2.svg";
import award3 from "@/assests/award3.svg";

export default function Hero() {
  return (
    <section>
      <div className="hero_bg_main">
        <div className="container">
          <div className="">
            <div className="hero_main_container">
              <div className="hero_main_first">
                <div className="first_main_heading">
                  Ready to Conquer{" "}
                  <span className="first_main_high">FULL STACK</span>{" "}
                  DEVELOPMENT?
                </div>
                <div className="first_main_desc">
                  Ignite your coding career with immersive mentorship, hands-on
                  projects, and guaranteed placement support.
                </div>
                <div className="first_main_btn">
                  <span className="first_main_btn_text">
                    Register for Assessment
                  </span>
                </div>
              </div>

              <div className="second_main_img">
                <Image
                  src={heroImg}
                  width="auto"
                  height="auto"
                  alt="Learning through Excellence"
                />
              </div>
            </div>
          </div>
         
        </div>
         <div className="hero_b_main">
            <div className="hero_b_main_inside">
              <div className="i_m_h">
                Recognized for Excellence and Innovation
              </div>
              <div className="i_m_desc">
                Highlighting the best practices in learning and industry
              </div>
              <div className="trust_gain">
                <div className="award">
                  <div className="award_logo">
                    <Image
                      src={award1}
                      width="auto"
                      height="auto"
                      alt="Excellence award"
                    />
                  </div>
                  <div className="award_text">Excellence Award</div>
                </div>
                <div className="award">
                  <div className="award_logo_two">
                    <Image
                      src={award2}
                      width="auto"
                      height="auto"
                      alt="StartupIndia"
                    />
                  </div>
                  <div className="award_text">#StartupIndia</div>
                </div>
                <div className="award">
                  <div className="award_logo_three">
                    <Image
                      src={award3}
                      width="auto"
                      height="auto"
                      alt="Certified Program"
                    />
                  </div>
                  <div className="award_text">Certified Program</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
