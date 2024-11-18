import React from "react";
import BoldShift from "../assets/boldshift.png";
import LightBox from "../assets/lightbox.png";
import FeatherDev from "../assets/featherdev.png";
import Spherule from "../assets/spherule.png";
import GlobalBank from "../assets/globalbank.png";
import Nietzsche from "../assets/nitetzsche.png";
const CompanyLogos = () => {
  const logos = [
    {
      src: BoldShift,
      alt: "Company Logo 1",
      width: "170px",
      aspect: "2.55",
    },
    {
      src: LightBox,
      alt: "Company Logo 2",
      width: "127px",
      aspect: "3.48",
    },
    {
      src: FeatherDev,
      alt: "Company Logo 3",
      width: "198px",
      aspect: "4.13",
    },
    {
      src: Spherule,
      alt: "Company Logo 4",
      width: "166px",
      aspect: "3.46",
    },
    {
      src: GlobalBank,
      alt: "Company Logo 5",
      width: "197px",
      aspect: "4.1",
    },
    {
      src: Nietzsche,
      alt: "Company Logo 6",
      width: "182px",
      aspect: "3.79",
    },
  ];

  return (
    <section className="flex justify-center items-start py-24 w-full bg-white max-md:max-w-full ">
      <div className="flex flex-col px-8  min-w-[240px] w-[1280px] max-md:px-5 ">
        <p className="self-star text-base font-medium text-center text-slate-600 max-md:max-w-full">
          Join 4,000+ companies already growing
        </p>
        <div className="flex flex-wrap gap-7 justify-between items-center mt-8 w-full max-md:max-w-full">
          {logos.map((logo, index) => (
            <img
              key={index}
              loading="lazy"
              src={logo.src}
              className={`object-contain  shrink-0 self-stretch my-auto aspect-[${logo.aspect}] w-40`}
              alt={logo.alt}
            />
          ))}
        </div>
      
      </div>

    </section>
  );
};

export default CompanyLogos;
