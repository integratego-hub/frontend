import w1 from "@/assests/w1.svg";
import w2 from "@/assests/w2.svg";
import w3 from "@/assests/w3.svg";
import Image from "next/image";
import g1 from "@/assests/g1.svg";
import g2 from "@/assests/g2.svg";
import g3 from "@/assests/g3.svg";

const options = [
  {
    icon: w1,
    name: "Industry-Relevant Skills",
    desc: "Learn exactly what companies use inproduction environments with real-world scenarios.",
    verified: "Verified",
    update: "Updated 2025 Curriculum",
  },
  {
    icon: w2,
    name: "Placement Support",
    desc: "Mock interviews, resume help, direct referrals to top companies in the industry.",
    verified: "Verified",
    update: "Updated 2025 Curriculum",
  },
  {
    icon: w3,
    name: "Hands-On Learning",
    desc: "Projects from real integration scenarios used by Fortune 500 companies.",
    verified: "Verified",
    update: "Updated 2025 Curriculum",
  },
];

export default function WhyChoose() {
  return (
    <section>
      <div className="container">
        <div className="py-[50px] flex flex-col gap-[50px]">
          <div className="flex flex-col gap-2">
            <div className="why_heading">Why Choose IntegrateGo</div>
            <div className="why_desc">
              Experience the difference with our industry-leading approach to
              IBM integration training
            </div>
          </div>
          <div className="flex gap-3 items-center justify-center">
            {options.map((item,index) => (
              <div className="why_main_card" key={index}>
                <div className="why_main_inside">
                  <div className="why_icon">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width="auto"
                      height="auto"
                    />
                  </div>
                </div>
                <div className="why_card_heading">{item.name}</div>
                <div className="why_card_desc">{item.desc}</div>
                <div className="flex items-center gap-3">
                  <div className="verified">
                    <span className="v-text">{item.verified}</span>
                  </div>
                  <div className="update">{item.update}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-[80px]">
          <div className="grab_main">
            <div className="grab_in">
              <div className="grab_heading">
                New IBM Integration Course Batch <br />
                Starts This Week
              </div>
              <div className="grab_eco">
                <div className="eco_in">
                  <div>
                    <Image
                      src={g1}
                      width="auto"
                      height="auto"
                      alt="Online Offline options"
                    />
                  </div>
                  <div className="eco_text">Online & Offline options</div>
                </div>
                <div className="eco_in">
                  <div>
                    <Image
                      src={g2}
                      width="auto"
                      height="auto"
                      alt="Beginner Friendly"
                    />
                  </div>
                  <div className="eco_text">Beginner Friendly</div>
                </div>
                <div className="eco_in">
                  <div>
                    <Image
                      src={g3}
                      width="auto"
                      height="auto"
                      alt="Dedicated Mentor Support"
                    />
                  </div>
                  <div className="eco_text">Dedicated Mentor Support</div>
                </div>
              </div>
              <div className="grab_btn">
                <span className="grab_btn_text">Grab Your Spot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
