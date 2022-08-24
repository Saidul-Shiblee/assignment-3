import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { filtered_author, filtered_category } from "./redux/filters/action";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getFilters } from "./redux/filters/reducer";
import Removefilter from "./RemoveFilterSvg";
const Blog = ({ blogPost }) => {
  const filter = useSelector(getFilters);

  const {
    blogId,
    blogTitle,
    blogURL,
    blogCategory,
    blogAuthor,
    UserAvatarURL,
    timeStamp,
    Bloglength,
  } = blogPost;

  const dispatch = useDispatch();

  const handleCategoryFilter = (filterKey, filterValue) => {
    dispatch(filtered_category(filterKey, filterValue));
  };
  const handleAuthorFilter = (filterKey, filterValue) => {
    dispatch(filtered_author(filterKey, filterValue));
  };

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={blogURL}
          alt={blogTitle}
        />
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex gap-2 items-center text-sm font-medium text-indigo-600 cursor-pointer">
            <span
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
              onClick={() => handleCategoryFilter("add", blogCategory)}
            >
              {blogCategory}
            </span>
            {filter.blogCategory.includes(blogCategory) && (
              <span
                onClick={() => handleCategoryFilter("remove", blogCategory)}
              >
                <Removefilter />
              </span>
            )}
          </div>

          <a href="#" className="block mt-1">
            <p className="text-xl font-semibold text-gray-900">{blogTitle}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={handleAuthorFilter("add", blogAuthor)}
          >
            <img
              className="h-10 w-10 rounded-full"
              src={UserAvatarURL}
              alt={blogAuthor}
            />
          </div>
          <div className="ml-3">
            <div className="flex gap-2 items-center">
              <span
                className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
                onClick={() =>
                  filter.blogAuthor.includes(blogAuthor)
                    ? handleAuthorFilter("remove", blogAuthor)
                    : handleAuthorFilter("add", blogAuthor)
                }
              >
                {blogAuthor}
              </span>
            </div>

            <div className="flex space-x-1 text-sm text-gray-500">
              <time>{timeStamp} </time>
              <span aria-hidden="true"> &middot; </span>
              <span> {Bloglength} min read </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

// import React from "react";
// import { useDispatch } from "react-redux/es/exports";
// import { filtered_author } from "./redux/filters/action";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import { getFilters } from "./redux/filters/reducer";

// const Blog = ({ blogPost }) => {
//   const filter = useSelector(getFilters);
//   const {
//     blogId,
//     blogTitle,
//     blogURL,
//     blogCategory,
//     blogAuthor,
//     UserAvatarURL,
//     timeStamp,
//     Bloglength,
//   } = blogPost;

//   const dispatch = useDispatch();

//   const handleFilter = (filterKey, filterValue) => {
//     dispatch(filtered_author(filterKey, filterValue));
//   };

//   return (
//     <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
//       <div className="flex-shrink-0">
//         <img
//           className="h-48 w-full object-cover"
//           src={blogURL}
//           alt={blogTitle}
//         />
//       </div>

//       <div className="flex-1 bg-white p-6 flex flex-col justify-between">
//         <div className="flex-1">
//           <p
//             className="text-sm font-medium text-indigo-600"
//             onClick={() => handleFilter("blogCategory", blogCategory)}
//           >
//             <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
//               {blogCategory}
//             </span>
//           </p>
//           <a href="#" className="block mt-1">
//             <p className="text-xl font-semibold text-gray-900">{blogTitle}</p>
//           </a>
//         </div>
//         <div className="mt-6 flex items-center">
//           <div
//             className="flex-shrink-0"
//             onClick={() =>
//               filter.blogAuthor.includes(blogAuthor)
//                 ? handleFilter("remove", blogAuthor)
//                 : handleFilter("add", blogAuthor)
//             }
//           >
//             <img
//               className="h-10 w-10 rounded-full"
//               src={UserAvatarURL}
//               alt={blogAuthor}
//             />
//           </div>
//           <div className="ml-3">
//             <p
//               className="text-sm font-medium text-gray-900 hover:underline"
//               onClick={() => handleFilter("blogAuthor", blogAuthor)}
//             >
//               {blogAuthor}
//             </p>
//             <div className="flex space-x-1 text-sm text-gray-500">
//               <time>{timeStamp} </time>
//               <span aria-hidden="true"> &middot; </span>
//               <span> {Bloglength} min read </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;
