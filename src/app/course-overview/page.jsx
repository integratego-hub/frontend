import GoalSection from "@/components/DetailedPage/GoalSection";
import HeroSection from "@/components/DetailedPage/HeroSection";
import ProcessSection from "@/components/DetailedPage/ProcessSection";
import SkillsMaster from "@/components/DetailedPage/SkillsMaster";
import Trnasformation from "@/components/DetailedPage/Transformation";
import EnrollNow from "@/components/landingPage/EnrollNow";
import GetInTouch from "@/components/landingPage/GetInTouch";
import "@/styles/detail.css";
import "@/styles/landing.css";

export default function DetailedPage() {
  return (
    <div className="">
      <HeroSection />
      <GoalSection />
      <ProcessSection />
      <SkillsMaster />
      <Trnasformation />
      <EnrollNow />
      <GetInTouch />
    </div>
  );
}
