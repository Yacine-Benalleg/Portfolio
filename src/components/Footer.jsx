import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-12">
      <div className="container flex flex-col items-center gap-6">
        {/* Name */}
        <h4 className="text-lg font-semibold text-n-1">Yacine Benalleg</h4>

        {/* Tagline */}
        <p className="text-center text-n-4 max-w-md">
          Applied Mathematics & Financial Mathematics Student | Software & Data
          Enthusiast
        </p>

        {/* Socials */}
        <ul className="flex gap-5 flex-wrap justify-center">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-sm text-n-5">
          © {new Date().getFullYear()} Yacine Benalleg. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
