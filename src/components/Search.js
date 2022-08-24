import React from "react";
import searchImage from "../assets/search.svg";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { getFilters } from "./redux/filters/reducer";
import { filtered_title } from "./redux/filters/action";
const Search = () => {
  const [serchTerm, setSearchTerm] = React.useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(filtered_title(e.target.value));
  };
  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={serchTerm}
        onChange={handleChange}
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
