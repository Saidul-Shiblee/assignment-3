import { BLOG_POSTS } from "./State";
import {
  FILTERED_AUTHOR,
  FILTERED_CATEGORY,
  FILTERED_TITLE,
} from "./actionTypes";

const initialState = {
  blog: BLOG_POSTS,
  filters: {
    blogCategory: [],
    blogAuthor: [],
    blogTitle: "",
  },
};

// const initialState = {
//   blog: BLOG_POSTS,
//   filters: [],
// };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTERED_AUTHOR:
      if (action.payload.filterKey === "add") {
        return {
          ...state,
          filters: {
            ...state.filters,
            blogAuthor: [
              ...state.filters.blogAuthor,
              action.payload.filterValue,
            ],
          },
        };
      } else {
        if (state.filters.blogAuthor.includes(action.payload.filterValue)) {
          let newFilter = state.filters.blogAuthor.filter(
            (gategory) => gategory !== action.payload.filterValue
          );
          return {
            ...state,
            filters: {
              ...state.filters,
              blogAuthor: [...newFilter],
            },
          };
        }
      }

    case FILTERED_CATEGORY:
      if (action.payload.filterKey === "add") {
        return {
          ...state,
          filters: {
            ...state.filters,
            blogCategory: [
              ...state.filters.blogCategory,
              action.payload.filterValue,
            ],
          },
        };
      } else {
        if (state.filters.blogCategory.includes(action.payload.filterValue)) {
          let newFilter = state.filters.blogCategory.filter(
            (gategory) => gategory !== action.payload.filterValue
          );
          return {
            ...state,
            filters: {
              ...state.filters,
              blogCategory: [...newFilter],
            },
          };
        }
      }
    case FILTERED_TITLE:
      return {
        ...state,
        filters: {
          ...state.filters,
          blogTitle: action.payload,
        },
      };
    default:
      return state;

    // case FILTERED_AUTHOR:
    //   if (action.payload.filterKey === "add") {
    //     return {
    //       ...state,
    //       filters: [
    //         ...state.filters,
    //         { blogAuthor: action.payload.filterValue },
    //       ],
    //     };
    //   } else {
    //     if (state.filters.find((item) => item.blogAuthor)) {
    //       let newFilter = state.filters.filter((item) => !item.blogAuthor);
    //       return {
    //         ...state,
    //         filters: [...newFilter],
    //       };
    //     }
    //   }

    // case FILTERED_CATEGORY:
    //   if (action.payload.filterKey === "add") {
    //     return {
    //       ...state,
    //       filters: [
    //         ...state.filters,
    //         { blogCategory: action.payload.filterValue },
    //       ],
    //     };
    //   } else {
    //     if (state.filters.find((item) => item.blogCategory)) {
    //       let newFilter = state.filters.filter((item) => !item.blogCategory);
    //       return {
    //         ...state,
    //         filters: [...newFilter],
    //       };
    //     }
    //   }

    // case FILTERED_TITLE:
    //   if (action.payload.filterKey === "add") {
    //     return {
    //       ...state,
    //       filters: [
    //         ...state.filters,
    //         { blogTitle: action.payload.filterValue },
    //       ],
    //     };
    //   } else {
    //     if (state.filters.find((item) => item.blogCategory)) {
    //       let newFilter = state.filters.filter((item) => !item.blogCategory);
    //       return {
    //         ...state,
    //         filters: [...newFilter],
    //       };
    //     }
    //   }
    // default:
    //   return state;
  }
}

export const getBlogPost = (state) => state.blog;
export const getFilters = (state) => state.filters;
