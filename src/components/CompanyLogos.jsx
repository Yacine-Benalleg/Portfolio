import { focusAndTech } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Academic Focus & Technical Stack
      </h5>

      <div className="flex flex-wrap justify-center gap-3">
        {focusAndTech.map((item, index) => (
          <span
            key={index}
            className="
              px-4 py-2 text-sm
              bg-white/5 backdrop-blur
              border border-white/10
              rounded-full
              text-n-1
              transition
              hover:scale-105
              hover:bg-white/10
              cursor-default
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
