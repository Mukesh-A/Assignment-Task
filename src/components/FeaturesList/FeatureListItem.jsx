import React from "react";

const FeatureListItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col flex-1 shrink items-center basis-0 min-w-[240px]">
      <img
        loading="lazy"
        src={icon}
        className="object-contain w-12 shadow-sm aspect-square"
        alt=""
      />
      <div className="flex flex-col self-stretch mt-5 w-full text-center">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-base leading-6 text-slate-600">{description}</p>
      </div>
      <div className="flex overflow-hidden gap-2 justify-center items-center mt-5 text-base font-semibold text-violet-700">
        <span className="self-stretch my-auto">Learn more</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc104d67a42c635cf10bb071766197753d37b0cd40b3549e7cdf27e8aa632451?placeholderIfAbsent=true&apiKey=358905d69a8145f08e0e6807cc8a7afb"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeatureListItem;
