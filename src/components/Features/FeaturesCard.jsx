import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <img
        loading="lazy"
        src={icon}
        className="object-contain self-center w-12 shadow-sm aspect-square"
        alt=""
      />
      <div className="flex flex-col mt-5 w-full">
        <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
        <p className="mt-2 text-base leading-6 text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
