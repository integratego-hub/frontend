"use client";

import { useEffect, useState } from "react";
import "@/styles/landing.css";

import Hero from "./landingPage/Hero";
import WhyChoose from "./landingPage/WhyChoose";
import Featured from "./landingPage/Featured";
import { getCourses } from "@/lib/api";
import HowItWorks from "./landingPage/HowItWorks";
import UpcomingBatches from "./landingPage/UpcomingBatches";
import EnrollNow from "./landingPage/EnrollNow";
import GetInTouch from "./landingPage/GetInTouch";

export default function LandingPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div>
      <Hero />
      <WhyChoose />
      <Featured />
      <HowItWorks />
      <UpcomingBatches />
      <EnrollNow />
      <GetInTouch />
    </div>
  );
}
