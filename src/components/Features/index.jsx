import React from "react";

import MessageIcon from "../../assets/messageIcon.png";
import FlashIcon from "../../assets/flashIcon.png";
import ShareIcon from "../../assets/shareIcon.png";
import MessageSmileIcon from "../../assets/smileIcon.png";
import WindowIcon from "../../assets/windowIcon.png";
import MessageHeartIcon from "../../assets/messageHeartIcon.png";
import FeatureCard from "./FeaturesCard";

const Features = () => {
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

    {
      icon: MessageSmileIcon,
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: WindowIcon,
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: MessageHeartIcon,
      title: "Our people make the difference",
      description:
        "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col items-center py-24 w-full text-center bg-white max-md:max-w-full">
      <div className="flex flex-col px-8 max-w-full w-[1280px] max-md:px-5">
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[768px]">
            <div className="flex flex-col items-center w-full font-semibold max-md:max-w-full">
              <h2 className="text-base text-violet-700 max-md:max-w-full">
                Features
              </h2>
              <h3 className="mt-3 text-4xl tracking-tighter leading-none text-gray-900 max-md:max-w-full">
                Analytics that feels like it's from the future
              </h3>
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
        <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="flex flex-wrap gap-8 items-start mt-16 w-full max-md:mt-10 max-md:max-w-full">
          {features.slice(3).map((feature, index) => (
            <FeatureCard key={index + 3} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
