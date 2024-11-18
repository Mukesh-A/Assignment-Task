import React from "react";
import AdvanceScreenView from "../../assets/screenViewAdv.png";
import AdvanceScreenMobileView from "../../assets/advMobileView.png";
const AdvancedFeatures = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center py-24 w-full bg-white max-md:max-w-full">
      <div className="flex flex-col px-8 max-w-full text-center w-[1280px] max-md:px-5">
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[768px]">
            <div className="flex flex-col w-full max-md:max-w-full">
              <span className="self-center px-3 py-1 text-sm font-medium leading-none text-violet-700 whitespace-nowrap bg-purple-50 rounded-2xl border border-purple-200 border-solid mix-blend-multiply">
                Features
              </span>
              <h2 className="mt-4 text-4xl font-semibold tracking-tighter leading-none text-gray-900 max-md:max-w-full">
                Cutting-edge features for advanced analytics
              </h2>
            </div>
            <p className="mt-5 text-xl leading-8 text-slate-600 max-md:max-w-full">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-8 mt-16 max-w-full w-[1280px] max-md:px-5 max-md:mt-10">
        {/* <div className="flex items-start w-full h-[558px] max-md:max-w-full"></div> */}
        <div className="relative w-full inset-0 flex items-center justify-center">
          <img
            loading="lazy"
            src={AdvanceScreenMobileView}
            className="absolute  left-[-30%] top-28 w-full h-full object-contain z-40 hidden md:block"
            alt="Advanced Analytics Dashboard"
          />

          <img
            loading="lazy"
            src={AdvanceScreenView}
            className=" rounded-xl border-4 border-black w-3/4 h-auto p-3 "
            alt="Advanced Analytics Dashboard"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
