import React from "react";
import GroupAlts from "../assets/grouppeople.png";

const CTASection = () => {
  return (
    <section className="flex flex-col mx-auto mt-16 max-w-full w-[1280px] max-md:px-5 max-md:mt-10">
      <div className="flex flex-col items-center p-8 w-full bg-gray-50 rounded-2xl max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src={GroupAlts}
          className="object-contain max-w-full aspect-[2.14] w-[120px]"
          alt="CTA Icon"
        />
        <div className="flex flex-col mt-8 max-w-full text-center w-[768px]">
          <h2 className="text-xl font-semibold text-gray-900 max-md:max-w-full">
            Still have questions?
          </h2>
          <p className="self-center mt-2 text-lg leading-loose text-slate-600 max-md:max-w-full">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <button className="flex gap-3 items-start mt-8 text-base font-semibold text-white">
          <span className="overflow-hidden gap-2 self-stretch px-5 py-3 bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm">
            Get in touch
          </span>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
