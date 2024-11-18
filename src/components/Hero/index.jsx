import React from "react";
import NewFeatureBadge from "./NewFeatureBadge";
import hero from "../../assets/hero.png";
import ActionButtons from "./ActionButtons";

const Hero = () => {
  return (
    <section className="flex flex-col items-center pt-24 w-full max-md:max-w-full">
      <div className="flex flex-col px-8 max-w-full w-[1280px] max-md:px-5">
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[1024px]">
            <div className="flex flex-col w-full max-md:max-w-full">
              <NewFeatureBadge />
              <h1 className="mt-4 text-6xl font-semibold tracking-tighter leading-tight text-center text-gray-900 max-md:max-w-full max-md:text-4xl font-intern">
                Beautiful analytics to grow smarter
              </h1>
            </div>
            <p className="self-center mt-6 text-xl leading-8 text-center text-slate-600 w-[768px] max-md:max-w-full">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          <ActionButtons />
        </div>
      </div>
      <div className="flex flex-col items-center px-8 mt-16 max-w-full  md:h-[420px] overflow-hidden w-auto max-md:px-5 max-md:mt-10 ">
        <img
          loading="lazy"
          src={hero}
          className="object-fit"
          alt="Analytics Dashboard Preview"
        />
      </div>
    </section>
  );
};

export default Hero;
