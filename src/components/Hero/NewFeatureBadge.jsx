import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
const NewFeatureBadge = () => {
  return (
    <div className="flex gap-3 items-center self-center py-1 pr-2.5 pl-1 text-sm font-medium leading-none text-violet-700 bg-purple-50 rounded-2xl border border-purple-200 border-solid mix-blend-multiply">
      <span className="self-stretch px-2.5 py-0.5 my-auto text-center bg-white rounded-2xl border border-purple-300 border-solid">
        New feature
      </span>
      <div className="flex gap-1 items-center self-stretch my-auto">
        <span className="self-stretch my-auto">
          Check out the team dashboard
        </span>
       <HiArrowLongRight className="fill-black"/>
      </div>
    </div>
  );
};

export default NewFeatureBadge;
