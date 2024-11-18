import React from 'react';

const CTABanner = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center py-24 w-full bg-gray-50 max-md:max-w-full">
      <div className="flex flex-col px-8 max-w-full w-[1280px] max-md:px-5">
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          <div className="flex flex-col max-w-full text-center w-[768px]">
            <h2 className="text-4xl font-semibold tracking-tighter leading-none text-gray-900 max-md:max-w-full">
              Start your free trial
            </h2>
            <p className="mt-5 text-xl text-slate-600 max-md:max-w-full">
              Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>
          <div className="flex gap-3 items-start mt-10 text-base font-semibold">
            <button className="overflow-hidden gap-2 self-stretch px-5 py-3 bg-white rounded-lg border border-gray-300 border-solid shadow-sm text-slate-700">
              Learn more
            </button>
            <button className="overflow-hidden gap-2 self-stretch px-5 py-3 text-white bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;