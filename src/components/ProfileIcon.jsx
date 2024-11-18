import React from "react";
import profileIcon from "../assets/profile_img.png";
const ProfileIcon = () => {
  return (
    <div className=" flex flex-col self-stretch my-auto w-10 hidden md:flex ">
      {
        <div className="flex flex-col w-10">
          <div className="flex overflow-hidden relative flex-col justify-center w-full aspect-square min-h-[40px] rounded-[200px]">
            <img
              loading="lazy"
              src={profileIcon}
              className="object-cover absolute inset-0 size-full ${}"
              alt="User Profile"
            />
            <div className="flex relative flex-1 w-full h-10 border-gray-900 border-solid border-[0.75px] min-h-[40px] opacity-[0.08] rounded-[200px]" />
          </div>
        </div>
      }
    </div>
  );
};

export default ProfileIcon;
