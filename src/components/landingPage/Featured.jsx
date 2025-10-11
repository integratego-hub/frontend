import Image from "next/image";
import f1 from "@/assests/f1.svg";
import f2 from "@/assests/f2.svg";
import f3 from "@/assests/f3.svg";
import f4 from "@/assests/f4.svg";
import f5 from "@/assests/f5.svg";
import Link from "next/link";

export default function Featured() {
  return (
    <div>
      <div className="f_main_container">
        <div className="container">
          <div className="f_heading_section">
            <div className="f_heading">Featured Courses</div>
            <div className="f_desc">
              Comprehensive training programs designed for career transformation
            </div>
          </div>
          {/* <div className="f_card_main">
          <div>
            <Image src={f1} width={1000} height="auto"  alt="Featured course" className="f_img" />
          </div>
          <div className="f_card_details">
            <div className="f_card_d_heading">
              <div className="f_card_h">
                4-Month Full Stack Integration Program
              </div>
              <div className="f_card_place">85% Placement Rate</div>
            </div>
            <div className="f_card_desc">
              Comprehensive training covering IBM IIB, App Connect, API
              development, DevOps practices, and real-world project
              implementation. Perfect for beginners and professionals looking to
              advance their integration skills.
            </div>
            <div className="f_card_in_detail">
              <div className="d_t">
                <Image src={f2} width="auto" height="auto" alt="duration" />
                <div className="d_t_title">Duration: 4 Months</div>
              </div>
              <div className="d_t">
                <Image src={f3} width="auto" height="auto" alt="duration" />
                <div className="d_t_title">IBM Certified Syllabus</div>
              </div>
              <div className="d_t">
                <Image src={f4} width="auto" height="auto" alt="duration" />
                <div className="d_t_title">Mode: Online & Offline</div>
              </div>
              <div className="d_t">
                <Image src={f5} width="auto" height="auto" alt="duration" />
                <div className="d_t_title">Placement Support</div>
              </div>
            </div>
            <div className="f_btn">View Details</div>
          </div>
        </div> */}
          <div className="f_card_main_second">
            <div className="order-2">
              <Image
                src={f1}
                width={1000}
                height="auto"
                alt="Featured course"
                className="f_img"
              />
            </div>
            <div className="f_card_details order-1">
              <div className="f_card_d_heading">
                <div className="f_card_h">
                  1-Week IBM IIB / App Connect (ACE) Workshop
                </div>
                <div className="f_card_place">
                  By IntegrateGo | Online & Offline | Certificate Included
                </div>
              </div>
              <div className="f_card_desc">
                Master enterprise integration in just 6 days! Learn IBM IIB/ACE,
                build real-time message flows, APIs, and work on a mini project.
                Ideal for students, grads, and IT pros.
              </div>
              <div className="f_card_in_detail">
                <div className="d_t">
                  <Image src={f2} width="auto" height="auto" alt="duration" />
                  <div className="d_t_title">Flexible weekly batches (Mon–Sat)</div>
                </div>
                <div className="d_t">
                  <Image src={f3} width="auto" height="auto" alt="duration" />
                  <div className="d_t_title">Hands-on training</div>
                </div>
                <div className="d_t">
                  <Image src={f4} width="auto" height="auto" alt="duration" />
                  <div className="d_t_title">Materials Included</div>
                </div>
                <div className="d_t">
                  <Image src={f5} width="auto" height="auto" alt="duration" />
                  <div className="d_t_title">E-Certificate</div>
                </div>
                <div className="d_t_title">Get industry-ready—fast!</div>
              </div>
              <Link
                href="/course-overview"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="f_btn">View Details</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
