import React from "react";
import FooterColumn from "./FooterColumn";

import Logo from "../../assets/icon.png";

const Footer = () => {
  const footerColumns = [
    {
      title: "Product",
      links: [
        "Overview",
        "Features",
        "Solutions",
        "Tutorials",
        "Pricing",
        "Releases",
      ],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Newsletter",
        "Events",
        "Help centre",
        "Tutorials",
        "Support",
      ],
    },
    {
      title: "Use cases",
      links: [
        "Startups",
        "Enterprise",
        "Government",
        "SaaS",
        "Marketplaces",
        "Ecommerce",
      ],
    },
    {
      title: "Social",
      links: [
        "Twitter",
        "LinkedIn",
        "Facebook",
        "GitHub",
        "AngelList",
        "Dribbble",
      ],
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
    },
  ];

  return (
    <footer className="flex flex-col items-center pt-16 pb-12 w-full bg-white max-md:max-w-full">
      <div className="flex flex-col px-8 max-w-full w-[1280px] max-md:px-5">
        <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
          {footerColumns.map((column, index) => (
            <FooterColumn key={index} {...column} />
          ))}
        </div>
      </div>
      <div className="flex flex-col px-8 mt-16 max-w-full w-[1280px] max-md:px-5 max-md:mt-10">
        <div className="flex flex-wrap gap-10 justify-between items-center pt-8 w-full border-t border-solid border-t-gray-200 max-md:max-w-full">
          <div className="flex justify-center items-center gap-2">
            <img src={Logo} className="w-10" alt="Image" />
            <p className="font-bold text text-[#101828]">Untitled UI</p>
          </div>
          <p className="self-stretch my-auto text-base text-gray-500 w-[293px]">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
