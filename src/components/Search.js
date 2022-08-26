import React from "react";
import searchImage from "../assets/search.svg";
import { useDispatch } from "react-redux/es/exports";
import { filtered_title } from "../redux/filters/action";

const Search = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(filtered_title(value));
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, 500);
    };
  };

  const debounceDispatch = debounce(handleChange);

  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => debounceDispatch(e.target.value)}
      />
      <img
        className="inline h-6 cursor-pointer"
        src={searchImage}
        alt="Search"
      />
    </div>
  );
};

export default Search;
