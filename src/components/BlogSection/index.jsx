import React from "react";
import BlogPost from "./BlogPost";
import profileIcon from "../../assets/profile_img.png";
import menIcon from "../../assets/menalt.png";
import girlIcon from "../../assets/girlAlt.png";

import Blog1 from "../../assets/blog-1.png";
import Blog2 from "../../assets/blog-2.png";
import Blog3 from "../../assets/blog-3.png";
const BlogSection = () => {
  const blogPosts = [
    {
      image: Blog1,
      category: "Design",
      title: "UX review presentations",
      excerpt:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: {
        name: "Olivia Rhye",
        avatar: profileIcon,

        date: "20 Jan 2024",
      },
    },
    {
      image: Blog2,

      category: "Product",
      title: "Migrating to Linear 101",
      excerpt:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: {
        name: "Phoenix Baker",
        avatar: menIcon,
        date: "19 Jan 2024",
      },
    },
    {
      image: Blog3,
      category: "Software Engineering",
      title: "Building your API stack",
      excerpt:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: {
        name: "Lana Steiner",
        avatar: girlIcon,
        date: "18 Jan 2024",
      },
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col items-center self-center py-24 w-full bg-white max-md:max-w-full">
      <div className="flex flex-col px-8 max-w-full w-[1280px] max-md:px-5">
        <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
          <div className="flex flex-col min-w-[240px] w-[768px] max-md:max-w-full">
            <div className="flex flex-col w-full font-semibold max-md:max-w-full">
              <h2 className="text-base text-violet-700 max-md:max-w-full">
                Our blog
              </h2>
              <h3 className="mt-3 text-4xl tracking-tighter leading-none text-gray-900 max-md:max-w-full">
                Latest blog posts
              </h3>
            </div>
            <p className="mt-5 text-xl text-slate-600 max-md:max-w-full">
              Tools and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <button className="flex gap-3 items-start text-base font-semibold text-white">
            <span className="overflow-hidden gap-2 self-stretch px-5 py-3 bg-violet-500 rounded-lg border border-violet-500 border-solid shadow-sm">
              View all posts
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col px-8 mt-16 max-w-full w-[1280px] max-md:px-5 max-md:mt-10">
        <div className="flex flex-wrap gap-8 items-start max-md:max-w-full">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
