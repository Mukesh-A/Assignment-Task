import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
const FAQItem = ({ question, answer, isOpen }) => {
  return (
    <div
      className={`flex flex-col w-full ${
        !isOpen ? "pt-6 mt-8 border-t border-solid border-t-gray-200" : ""
      } max-md:max-w-full`}
    >
      <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
        <div className="flex-1 shrink text-lg font-medium leading-loose text-gray-900 min-w-[240px] max-md:max-w-full">
          {question}
        </div>
        <div className="flex flex-col pt-0.5 w-6">
          {!isOpen ? <CiCirclePlus size={25}/> : <CiCircleMinus size={25}/>}
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 text-base leading-6 text-slate-600 max-md:max-w-full">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
