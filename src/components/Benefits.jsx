import { projects } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="projects" className="mt-15">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="My Projects"
          text="A selection of academic, technical, and creative projects I have built."
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {projects.map((item) => (
            <div
              className="group block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-auto">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <p className="text-xs text-n-4 mb-4">{item.tech}</p>

                <div className="flex gap-3 mt-6">
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs rounded bg-indigo-600 hover:bg-indigo-700 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs rounded border border-white/20 hover:bg-white/10 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-30">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
