import img1 from "@/assests/au1.svg";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex items-center justify-center gap-5">
          <div>
            <Image src={img1} alt="Our story" width="auto" height="auto" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="o-s-he">Our Story – The Beginning</div>
            <div className="o-s-p">
              IntegrateGo started with a mission – to make enterprise <br />
              integration skills accessible, practical, and industry-ready.<br />
              Founded by IT professionals, we saw how students lacked real-<br />
              world preparation and decided to change the story.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
