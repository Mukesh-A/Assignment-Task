import React from "react";
import SysImg from "../assets/sisy.png";
import ShadowImg from "../assets/shadow.png";
const Testimonial = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center py-24 w-full bg-[#F9FAFB] max-md:max-w-full">
      <div className="flex flex-col px-8 max-w-full w-[1280px] max-md:px-5">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <img
              loading="lazy"
              src={SysImg}
              className="object-contain self-center max-w-full aspect-[3.5] w-[141px]"
              alt="Company Logo"
            />
            <blockquote className="mt-8 text-5xl font-medium tracking-tighter text-center text-gray-900 leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
              We've been using Untitled to kick start every new project
              and9c?placeholderIfAbse can't imagine working without it.
            </blockquote>
            <div className="flex flex-col mt-8 w-full max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col justify-center self-center w-16 aspect-square min-h-[64px] rounded-[200px]">
                <img
                  loading="lazy"
                  src={ShadowImg}
                  className="object-cover absolute inset-0 size-full"
                  alt="Candice Wu"
                />
                <div className="flex relative flex-1 w-full h-16 border-gray-900 border-solid border-[0.75px] min-h-[64px] opacity-[0.08] rounded-[200px]" />
              </div>
              <div className="flex flex-col  mt-4 w-full text-center max-md:max-w-full">
                <p className="text-lg font-semibold leading-loose text-gray-900 max-md:max-w-full">
                  Candice Wu
                </p>
                <p className="mt-1 text-base text-slate-600 max-md:max-w-full">
                  Product Manager, Sisyphus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
