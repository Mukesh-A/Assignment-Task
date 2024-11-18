import React from "react";
import { MdArrowOutward } from "react-icons/md";
const BlogPost = ({ image, category, title, excerpt, author }) => {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <img
        loading="lazy"
        src={image}
        className="object-contain w-full aspect-[1.6]"
        alt={title}
      />
      <div className="flex flex-col mt-6 w-full">
        <div className="flex flex-col w-full">
          <span className="text-sm font-semibold leading-none text-violet-700">
            {category}
          </span>
          <div className="flex flex-col mt-2 w-full">
            <div className="flex gap-4 items-start w-full">
              <h3 className="flex-1 shrink text-2xl font-semibold leading-none text-gray-900 basis-0">
                {title}
              </h3>
              <div className="flex flex-col pt-1 w-6">
                <MdArrowOutward />
              </div>
            </div>
            <p className="mt-2 text-base leading-6 text-slate-600">{excerpt}</p>
          </div>
        </div>
        <div className="flex gap-3 items-center self-start mt-6">
          <div className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto w-10 aspect-square min-h-[40px] rounded-[200px]">
            <img
              loading="lazy"
              src={author.avatar}
              className="object-cover absolute inset-0 size-full"
              alt={author.name}
            />
            <div className="flex relative flex-1 w-full h-10 border-gray-900 border-solid border-[0.75px] min-h-[40px] opacity-[0.08] rounded-[200px]" />
          </div>
          <div className="flex flex-col self-stretch my-auto text-sm leading-none">
            <span className="font-semibold text-gray-900">{author.name}</span>
            <span className="text-slate-600">{author.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
