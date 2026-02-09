import { curve, myImage } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";
import { BackgroundCircles, BottomLine } from "./design/Hero";
const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Hi, I’m{" "}
            <span className="inline-block relative">
              Yacine
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Applied Mathematics graduate and Master’s student in Financial
            Mathematics. Passionate about optimization, data analysis, and
            building practical digital solutions with code and design.
          </p>
          <Button href="#projects" white>
            View My Work
          </Button>
        </div>
        {/* Floating Background */}
        <BackgroundCircles />
        {/* here */}
        <ScrollParallax strength={0.12}>
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-2xl rounded-full"></div>

            {/* Image Card */}
            <div className="relative z-10 overflow-hidden rounded-2xl border border-n-6 bg-n-8 shadow-2xl">
              <img
                src={myImage}
                alt="Yacine Benalleg"
                className="w-full object-cover aspect-[5/4]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Tags */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-white">
                  Applied Math
                </span>

                <span className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-white">
                  Data Analysis
                </span>

                <span className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-white">
                  React
                </span>

                <span className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-white">
                  Optimization
                </span>
              </div>
            </div>
          </div>
        </ScrollParallax>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
