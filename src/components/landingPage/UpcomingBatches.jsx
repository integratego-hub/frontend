import u1 from "@/assests/u1.svg";
import u2 from "@/assests/u2.jpg";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState, useRef } from "react";

export default function UpcomingBatches() {
  const rows = [
    {
      course: "IBM Integration Basics",
      startDate: "20/09/2025",
      seats: "12",
      color: "bg-[#FEF2F2]",
      left: "few seats left",
    },
    {
      course: "Advanced API Connect",
      startDate: "05/10/2025",
      seats: "8",
      color: "bg-[#E5E7EB]",
      left: "completing soon",
    },
    {
      course: "MQ Messaging Mastery",
      startDate: "18/10/2025",
      seats: "5",
      color: "bg-[#FEFCE8]",
      left: "closing soon",
    },
  ];
  const items = [
    { id: 1, title: "Course 1", desc: "Learn basics", tilt: -6 },
    { id: 2, title: "Course 2", desc: "Hands-on labs", tilt: -3 },
    { id: 3, title: "Course 3", desc: "Advanced mastery", tilt: 3 },
    { id: 4, title: "Course 4", desc: "Certification prep", tilt: 0 },
    { id: 5, title: "Course 5", desc: "Project work", tilt: 3 },
    { id: 6, title: "Course 6", desc: "Expert mentorship", tilt: -6 },
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
                    <div className="regist_action">Register</div>
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
                    <Image
                      className="test_image"
                      src={u2}
                      alt="Surav"
                      width="auto"
                      height="auto"
                    />
                    <div className="flex flex-col gap-1">
                      <div className="up_card_head">Sarah Johnson</div>
                      <div className="up_card_desc">
                        Senior Integration Specialist, IBM
                      </div>
                    </div>
                  </div>
                  <div className="up_card_testi">
                    "The hands-on projects and expert mentorship gave me the
                    confidence to tackle complex enterprise integrations. Highly
                    recommended!"
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="101"
                      height="17"
                      viewBox="0 0 101 17"
                      fill="none"
                    >
                      <path
                        d="M6.4995 5.46698C6.4995 5.46698 3.31491 5.81849 1.19051 6.0535C0.999032 6.0766 0.829725 6.20415 0.766235 6.39799C0.702745 6.59182 0.766235 6.79369 0.907324 6.92124C2.48551 8.35643 4.85682 10.5057 4.85682 10.5057C4.8548 10.5057 4.20579 13.6322 3.77446 15.7181C3.73818 15.907 3.80671 16.1068 3.97199 16.2263C4.13626 16.3459 4.34789 16.3479 4.51417 16.2545C6.37252 15.2019 9.15601 13.6191 9.15601 13.6191C9.15601 13.6191 11.9405 15.2019 13.7958 16.2555C13.9651 16.3479 14.1768 16.3459 14.341 16.2263C14.5063 16.1068 14.5749 15.907 14.5376 15.7192C14.1062 13.6322 13.4582 10.5057 13.4582 10.5057C13.4582 10.5057 15.8295 8.35643 17.4077 6.92426C17.5488 6.79269 17.6113 6.59082 17.5488 6.39799C17.4863 6.20516 17.317 6.07761 17.1255 6.05551C15.0011 5.81849 11.8155 5.46698 11.8155 5.46698C11.8155 5.46698 10.4954 2.55643 9.61556 0.616073C9.53292 0.442325 9.35959 0.320801 9.15601 0.320801C8.95244 0.320801 8.77809 0.443329 8.69949 0.616073C7.81869 2.55643 6.4995 5.46698 6.4995 5.46698Z"
                        fill="#A78BFA"
                      />
                      <path
                        d="M27.2919 5.46746C27.2919 5.46746 24.1073 5.81898 21.9829 6.05399C21.7914 6.07709 21.6221 6.20464 21.5586 6.39848C21.4952 6.59231 21.5586 6.79418 21.6997 6.92173C23.2779 8.35691 25.6492 10.5062 25.6492 10.5062C25.6472 10.5062 24.9982 13.6326 24.5669 15.7186C24.5306 15.9075 24.5991 16.1073 24.7644 16.2268C24.9287 16.3463 25.1403 16.3483 25.3066 16.2549C27.1649 15.2024 29.9484 13.6196 29.9484 13.6196C29.9484 13.6196 32.7329 15.2024 34.5882 16.256C34.7576 16.3483 34.9692 16.3463 35.1335 16.2268C35.2987 16.1073 35.3673 15.9074 35.33 15.7196C34.8986 13.6326 34.2506 10.5062 34.2506 10.5062C34.2506 10.5062 36.622 8.35691 38.2001 6.92474C38.3412 6.79318 38.4037 6.59131 38.3412 6.39848C38.2787 6.20565 38.1094 6.0781 37.918 6.056C35.7936 5.81898 32.608 5.46746 32.608 5.46746C32.608 5.46746 31.2878 2.55692 30.408 0.616562C30.3253 0.442813 30.152 0.321289 29.9484 0.321289C29.7449 0.321289 29.5705 0.443817 29.4919 0.616562C28.6111 2.55692 27.2919 5.46746 27.2919 5.46746Z"
                        fill="#A78BFA"
                      />
                      <path
                        d="M48.0824 5.46746C48.0824 5.46746 44.8978 5.81898 42.7734 6.05399C42.5819 6.07709 42.4126 6.20464 42.3491 6.39848C42.2856 6.59231 42.3491 6.79418 42.4902 6.92173C44.0684 8.35691 46.4397 10.5062 46.4397 10.5062C46.4377 10.5062 45.7887 13.6326 45.3574 15.7186C45.3211 15.9075 45.3896 16.1073 45.5549 16.2268C45.7191 16.3463 45.9308 16.3483 46.0971 16.2549C47.9554 15.2024 50.7389 13.6196 50.7389 13.6196C50.7389 13.6196 53.5234 15.2024 55.3787 16.256C55.548 16.3483 55.7597 16.3463 55.9239 16.2268C56.0892 16.1073 56.1577 15.9074 56.1205 15.7196C55.6891 13.6326 55.0411 10.5062 55.0411 10.5062C55.0411 10.5062 57.4124 8.35691 58.9906 6.92474C59.1317 6.79318 59.1942 6.59131 59.1317 6.39848C59.0692 6.20565 58.8999 6.0781 58.7084 6.056C56.584 5.81898 53.3984 5.46746 53.3984 5.46746C53.3984 5.46746 52.0782 2.55692 51.1985 0.616562C51.1158 0.442813 50.9425 0.321289 50.7389 0.321289C50.5353 0.321289 50.361 0.443817 50.2824 0.616562C49.4016 2.55692 48.0824 5.46746 48.0824 5.46746Z"
                        fill="#A78BFA"
                      />
                      <path
                        d="M68.8748 5.46746C68.8748 5.46746 65.6902 5.81898 63.5658 6.05399C63.3743 6.07709 63.205 6.20464 63.1415 6.39848C63.078 6.59231 63.1415 6.79418 63.2826 6.92173C64.8608 8.35691 67.2321 10.5062 67.2321 10.5062C67.2301 10.5062 66.5811 13.6326 66.1498 15.7186C66.1135 15.9075 66.182 16.1073 66.3473 16.2268C66.5116 16.3463 66.7232 16.3483 66.8895 16.2549C68.7478 15.2024 71.5313 13.6196 71.5313 13.6196C71.5313 13.6196 74.3158 15.2024 76.1711 16.256C76.3404 16.3483 76.5521 16.3463 76.7163 16.2268C76.8816 16.1073 76.9502 15.9074 76.9129 15.7196C76.4815 13.6326 75.8335 10.5062 75.8335 10.5062C75.8335 10.5062 78.2048 8.35691 79.783 6.92474C79.9241 6.79318 79.9866 6.59131 79.9241 6.39848C79.8616 6.20565 79.6923 6.0781 79.5008 6.056C77.3764 5.81898 74.1908 5.46746 74.1908 5.46746C74.1908 5.46746 72.8707 2.55692 71.9909 0.616562C71.9082 0.442813 71.7349 0.321289 71.5313 0.321289C71.3277 0.321289 71.1534 0.443817 71.0748 0.616562C70.194 2.55692 68.8748 5.46746 68.8748 5.46746Z"
                        fill="#A78BFA"
                      />
                      <path
                        d="M89.6683 5.46698C89.6683 5.46698 86.4838 5.81849 84.3594 6.0535C84.1679 6.0766 83.9986 6.20415 83.9351 6.39799C83.8716 6.59182 83.9351 6.79369 84.0762 6.92124C85.6544 8.35643 88.0257 10.5057 88.0257 10.5057C88.0236 10.5057 87.3746 13.6322 86.9433 15.7181C86.907 15.907 86.9756 16.1068 87.1408 16.2263C87.3051 16.3459 87.5167 16.3479 87.683 16.2545C89.5414 15.2019 92.3249 13.6191 92.3249 13.6191C92.3249 13.6191 95.1094 15.2019 96.9647 16.2555C97.134 16.3479 97.3456 16.3459 97.5099 16.2263C97.6752 16.1068 97.7437 15.907 97.7064 15.7192C97.2751 13.6322 96.6271 10.5057 96.6271 10.5057C96.6271 10.5057 98.9984 8.35643 100.577 6.92426C100.718 6.79269 100.78 6.59082 100.718 6.39799C100.655 6.20516 100.486 6.07761 100.294 6.05551C98.17 5.81849 94.9844 5.46698 94.9844 5.46698C94.9844 5.46698 93.6642 2.55643 92.7844 0.616073C92.7018 0.442325 92.5284 0.320801 92.3249 0.320801C92.1213 0.320801 91.9469 0.443329 91.8683 0.616073C90.9875 2.55643 89.6683 5.46698 89.6683 5.46698Z"
                        fill="#A78BFA"
                      />
                    </svg>
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