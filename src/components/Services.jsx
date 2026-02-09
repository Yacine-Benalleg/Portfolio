import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3 } from "../assets";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="about">
      <div className="container">
        <Heading
          title="About Me"
          text="Who I am, what I love, and what drives my learning journey."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">My Background</h4>

              <p className="body-2 mb-6 text-n-3">
                I am a 23-year-old Applied Mathematics graduate and current
                Master’s student in Financial Mathematics. I am passionate about
                combining mathematical thinking with software development to
                build useful tools.
              </p>

              <p className="body-2 mb-6 text-n-3">
                My main interests include software engineering, data science,
                and operations research.
              </p>

              <p className="body-2 text-n-3">
                I am a fast learner who knows how to search, analyze, and master
                new concepts efficiently.
              </p>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">My Passions</h4>

                <p className="body-2 mb-6 text-n-3">
                  I enjoy solving complex problems, building clean interfaces,
                  and exploring how mathematics can improve real-world systems.
                </p>

                <p className="body-2 text-n-3">
                  I am especially interested in optimization, data analysis, and
                  modern web technologies.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">My Interests</h4>

                <p className="body-2 mb-6 text-n-3">
                  Outside academics, I practice football and boxing to stay
                  disciplined and focused.
                </p>

                <p className="body-2 text-n-3 mb-6">
                  I also enjoy reading self-development books and watching
                  history documentaries to broaden my perspective.
                </p>

                <p className="body-2 text-n-3">
                  I recently started video editing and I find it very
                  interesting, especially with the rise of AI.
                </p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
