import React from "react";
import BlogList from "./BlogList";

const MainContainer = () => {
  return (
    <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
      <div className="absolute inset-0 bg-white">
        <div className=" h-1/3 sm:h-2/3"></div>
      </div>
      <BlogList />
    </section>
  );
};

export default MainContainer;
