import u1 from "@/assests/u1.svg";
import u2 from "@/assests/u2.jpg";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState, useRef } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function UpcomingBatches() {
  const rows = [
    {
      course: "IBM Integration Bus",
      startDate: "17/10/2025",
      seats: "45",
      color: "bg-[#FEF2F2]",
      left: "few seats left",
    },
    {
      course: "IBM App Connect Enterprise (ACE)",
      startDate: "17/10/2025",
      seats: "55",
      color: "bg-[#E5E7EB]",
      left: "completing soon",
    },
    {
      course: "IBM MQ (Message Queue)",
      startDate: "17/10/2025",
      seats: "50",
      color: "bg-[#FEFCE8]",
      left: "closing soon",
    },
  ];
  // Fictional/demo testimonials — not real people or real endorsements
  const items = [
    {
      id: 1,
      title: "Course 1",
      desc: "Learn basics",
      tilt: -6,
      personName: "Aman Verma",
      role: "Final-year B.Tech Student",
      testimonial:
        "This course explained IBM ACE concepts clearly and the hands-on labs helped me build confidence fast. The instructor answered every doubt — highly recommended for beginners.",
      rating: 4.7,
    },
    {
      id: 2,
      title: "Course 2",
      desc: "Hands-on labs",
      tilt: -3,
      personName: "Priya Nair",
      role: "Junior Integration Developer",
      testimonial:
        "Practical labs and real-world use cases made it easy to apply what I learned at work. The debugging tips saved me weeks of trial and error.",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Course 3",
      desc: "Advanced mastery",
      tilt: 3,
      personName: "Rahul Gupta",
      role: "MCA Graduate",
      testimonial:
        "Advanced topics were broken down into simple steps. The mini project mirrored industry scenarios and boosted my interview confidence.",
      rating: 4.6,
    },
    {
      id: 4,
      title: "Course 4",
      desc: "Certification prep",
      tilt: 0,
      personName: "Sakshi Rao",
      role: "Middleware Engineer",
      testimonial:
        "Focused certification guidance and mock tests were spot on. I cleared the certification on my first attempt — the course is very well structured.",
      rating: 4.9,
    },
    {
      id: 5,
      title: "Course 5",
      desc: "Project work",
      tilt: 3,
      personName: "Vikram Singh",
      role: "Systems Analyst",
      testimonial:
        "The project work simulated real integration tasks and gave me a portfolio piece that impressed recruiters. Mentors provided practical, actionable feedback.",
      rating: 4.5,
    },
    {
      id: 6,
      title: "Course 6",
      desc: "Expert mentorship",
      tilt: -6,
      personName: "Neha Joshi",
      role: "Fresh Graduate (IT)",
      testimonial:
        "One-on-one mentoring and career advice were invaluable. The community support also helped me land my first role in integration.",
      rating: 4.8,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 20 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
      setProgress(0); // Reset progress when slide changes
    },
  });

  // Autoplay with progress tracking
  useEffect(() => {
    const startTime = Date.now();
    const duration = 5000; // 5 seconds

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set up progress animation
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        instanceRef.current?.next();
      }
    };

    // Update progress more frequently for smoother animation
    intervalRef.current = setInterval(updateProgress, 50);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide, instanceRef]);

  return (
    <section className="mt-[200px] main_up_bg_container">
      <div className="container">
        <div className="flex flex-col gap-2">
          <div className="up_main_heading">Upcoming Batches</div>
          <div className="up_main_desc">
            Secure your spot in our next training cohort
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Course Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Seats Left
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={`${row.color} border-t`}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {row.course}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {row.startDate}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 flex gap-2">
                    {row.seats}
                    <div className="closing_soon">{row.left}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className="regist_action"
                      onClick={() => {
                        const section = document.getElementById("get-in-touch");
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Register
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="up_message_block">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center">
              <Image src={u1} alt="you" width="auto" height="auto" />
            </div>
            <div className="you_message">
              We've got lots of friends,
              <br /> and we're always looking for more Student
              <br /> Success Stories :)
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider mt-10">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="keen-slider__slide flex justify-center"
            >
              <div
                className={`up_main_card transform ${
                  idx % 2 === 0 ? "" : "rotate-[-6deg]"
                } hover:rotate-0 transition-transform duration-300`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    {/* <Image
                      className="test_image"
                      src={u2}
                      alt="Surav"
                      width="auto"
                      height="auto"
                    /> */}
                    <div className="flex flex-col gap-1">
                      <div className="up_card_head">{item.personName}</div>
                      <div className="up_card_desc">{item.role}</div>
                    </div>
                  </div>
                  <div className="up_card_testi">{item.testimonial}</div>
                  <div style={{ display: "flex", gap: "4px" }}>
                    {[...Array(5)].map((_, index) =>
                      index < Math.round(item.rating) ? (
                        <FaStar key={index} color="#A78BFA" />
                      ) : (
                        <FaRegStar key={index} color="#A78BFA" />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Dots with Progress Bar */}
        <div className="flex justify-center mt-6 gap-2 items-center">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className="flex flex-col items-center"
            >
              {currentSlide === idx ? (
                // Current slide: horizontal progress bar with smooth animation
                <div className="w-[46px] h-[8px] rounded-full bg-[#000000]/60 overflow-hidden relative">
                  <div
                    className="h-full bg-[#FFFFFF] rounded-full absolute left-0 top-0"
                    style={{
                      width: `${progress}%`,
                      transition: "width 0.05s linear",
                    }}
                  />
                </div>
              ) : (
                // Other slides: simple dots
                <div
                  className={`w-[25px] h-[8px] rounded-sm ${
                    currentSlide === idx ? "bg-indigo-600" : "bg-gray-300"
                  }`}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
