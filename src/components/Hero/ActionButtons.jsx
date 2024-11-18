import React from "react";
import { PiPlayCircle } from "react-icons/pi";
const ActionButtons = () => {
  return (
    <div className="flex gap-3 items-start mt-12 text-lg font-semibold leading-loose max-md:mt-10">
      <button className="flex overflow-hidden gap-3 justify-center items-center px-7 py-3 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-slate-700 max-md:px-5">
        <PiPlayCircle size="30"  />
        <span className="self-stretch my-auto">Demo</span>
      </button>
      <button className="overflow-hidden gap-3 self-stretch px-7 py-3 text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm max-md:px-5">
        Sign up
      </button>
    </div>
  );
};

export default ActionButtons;
