import "@/styles/detail.css";
import "@/styles/landing.css";
import "@/styles/aboutus.css";
import AboutUsSection from "@/components/ContactPage/AboutUsSection";
import OurStory from "@/components/ContactPage/OurStory";
import MissionVision from "@/components/ContactPage/MissionVision";
import WhatWeDo from "@/components/ContactPage/WhatWedo";
import GetInTouch from "@/components/landingPage/GetInTouch";
import EnrollNow from "@/components/landingPage/EnrollNow";

export default function AboutUs() {
  return (
    <div className="">
      <AboutUsSection />
      <OurStory />
      <MissionVision />
      <WhatWeDo />
      <EnrollNow />
      <GetInTouch />
    </div>
  );
}
