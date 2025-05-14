import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSlider = () => {
  const sliderRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen overflow-hidden">
      <div ref={sliderRef} className="flex w-full h-full">
        <section className="panel w-screen h-screen bg-red-500 flex items-center justify-center text-white text-4xl">Slide 1</section>
        <section className="panel w-screen h-screen bg-blue-500 flex items-center justify-center text-white text-4xl">Slide 2</section>
        <section className="panel w-screen h-screen bg-green-500 flex items-center justify-center text-white text-4xl">Slide 3</section>
      </div>
    </div>
  );
};

export default ScrollSlider;
