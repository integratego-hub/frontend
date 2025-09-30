import r1 from "@/assests/r1.svg";
import r2 from "@/assests/r2.svg";
import r3 from "@/assests/r3.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HowItWorks() {
  const pathRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();

      // pick 3 points: 25%, 50%, 75%
      const percentages = [0.25, 0.5, 1.00];
      const points = percentages.map((p) =>
        pathRef.current.getPointAtLength(length * p)
      );

      setPositions(points);
    }
  }, []);

  const items = [
    {
      icon: r1,
      title: "Learn",
      desc: "Interactive live sessions with industry experts and hands-on practice labs.",
      percent: 0.25,
      offset: { x: -180, y: -90 }, // increased y offset to accommodate text
    },
    {
      icon: r2,
      title: "Practice",
      desc: "Apply your skills with guided exercises and real-world case studies.",
      percent: 0.5,
      offset: { x: -20, y: -40 }, // adjusted y offset to position below
    },
    {
      icon: r3,
      title: "Master",
      desc: "Achieve certification and build confidence for real IBM projects.",
      percent: 1.00,
      offset: { x: 0, y: -40 }, // increased y offset to accommodate text
    },
  ];

  return (
    <section className="my-5">
      <div className="container">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="h_main_heading">How It Works</div>
          <div className="h_main_desc">
            Your journey to IBM integration mastery in 3 simple steps
          </div>
        </div>

        <div className="h_road_map relative">
          {/* Path */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1081"
            height="237"
            viewBox="0 0 1081 237"
            fill="none"
          >
            <g filter="url(#filter0_d_3_510)">
              <path
                ref={pathRef}
                d="M26.9135 50.7115C63.015 95.4498 150.989 185.145 214.072 186.018C292.926 187.11 336.951 95.7154 457.001 103.838C577.051 111.961 639.797 212.429 758.311 123.461C876.825 34.4929 939.61 -27.8305 1054.06 19.869"
                stroke="#00E92F"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_3_510"
                x="0.413452"
                y="0.883789"
                width="1080.15"
                height="235.644"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="24" />
                <feGaussianBlur stdDeviation="12" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.215686 0 0 0 0 0.203922 0 0 0 0 0.662745 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3_510"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3_510"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          {/* Render all items */}
          {positions.length > 0 &&
            items.map((item, i) => (
              <div
                key={i}
                className="absolute flex flex-col items-center w-64" // Added fixed width
                style={{
                  left: positions[i].x,
                  top: positions[i].y,
                  transform: `translate(${item.offset.x}px, ${item.offset.y}px)`, // Changed to px for more precise control
                }}
              >
                <div className="r_f_ic">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col gap-2 text-center mt-3"> {/* Changed to text-center */}
                  <div className="h_r_head">{item.title}</div>
                  <div className="h_r_desc">{item.desc}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}