import React from "react";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="flex flex-col flex-1 shrink whitespace-nowrap basis-0">
      <h4 className="text-sm font-semibold leading-none text-gray-500">
        {title}
      </h4>
      <div className="flex flex-col items-start mt-4 w-full">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="flex gap-2 items-center mt-3 text-base font-semibold text-slate-600"
          >
            <span className="overflow-hidden gap-2 self-stretch my-auto">
              {link}
            </span>
            {link === "Solutions" && (
              <span className="self-stretch px-2 py-0.5 my-auto text-xs font-medium text-center text-emerald-700 bg-emerald-50 rounded-2xl border border-emerald-200 border-solid mix-blend-multiply">
                New
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
