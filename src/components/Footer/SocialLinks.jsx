import React from "react";

const SocialLinks = () => {
  const socialPlatforms = [
    "Twitter",
    "LinkedIn",
    "Facebook",
    "GitHub",
    "AngelList",
  ];

  return (
    <div className="flex gap-4">
      {socialPlatforms.map((platform, index) => (
        <a key={index} href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">{platform.name}</span>
          <img src={platform.icon} alt={platform.name} className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
