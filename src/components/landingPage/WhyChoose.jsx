import w1 from "@/assests/w1.svg";
import w2 from "@/assests/w2.svg";
import w3 from "@/assests/w3.svg";
import Image from "next/image";
import g1 from "@/assests/g1.svg";
import g2 from "@/assests/g2.svg";
import g3 from "@/assests/g3.svg";

const options = [
  {
    id: 1,
    icon: w1,
    name: "Industry-Relevant Skills",
    desc: "Integration Patterns,IBM MQ (Message Queue),REST & SOAP Web Services,Database Integration",
    verified: "Verified",
    update: "Updated 2025 Curriculum",
  },
  {
    id: 2,
    icon: w2,
    name: "Placement Support",
    desc: "Interview Preparation,Real-Time Project Exposure,Industry Mentorship,Placement Drives & Referrals",
    verified: "Verified",
    update: "Updated 2025 Curriculum",
  },
  {
    id: 3,
    icon: w3,
    name: "Hands-On Learning",
    desc: "Our training is fully designed around hands-on labs, industry case studies, and real project environments to prepare you for real-world integration challenges.",
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
              To empower every learner to become industry-ready, certified, and <br />
              confident in building and managing enterprise-grade integrations <br />
              using IBM Integration Bus (IIB) and IBM App Connect 
              Enterprise (ACE).
            </div>
          </div>
          <div className="flex gap-3 lg:items-center lg:justify-center flex-col md:flex-row">
            {options.map((item, index) => (
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
                <div className="why_card_desc">
                  {/* {item.id !== 3 && (
                    <ul>
                      <li>{}</li>
                    </ul>
                  )} */}
                  {item.desc}
                </div>
                {/* <div className="flex items-center gap-3">
                  <div className="verified">
                    <span className="v-text">{item.verified}</span>
                  </div>
                  <div className="update">{item.update}</div>
                </div> */}
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
              <div
                className="grab_btn"
                onClick={() => {
                  const section = document.getElementById("get-in-touch");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <span className="grab_btn_text">Grab Your Spot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
