import React from "react";

import MessageIcon from "../../assets/messageIcon.png";
import FlashIcon from "../../assets/flashIcon.png";
import ShareIcon from "../../assets/ShareIcon.png";
import FeatureListItem from "./FeatureListItem";
const FeatureList = () => {
  const features = [
    {
      icon: MessageIcon,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: FlashIcon,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: ShareIcon,
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 items-start px-5 mt-24 w-full max-md:mt-10 max-md:max-w-full">
      {features.map((feature, index) => (
        <FeatureListItem key={index} {...feature} />
      ))}
    </div>
  );
};

export default FeatureList;
