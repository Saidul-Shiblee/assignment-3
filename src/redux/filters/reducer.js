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

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTERED_AUTHOR:
      switch (action.payload.filterKey) {
        case "add":
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
        case "remove":
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
        default:
          return state;
      }
    case FILTERED_CATEGORY:
      switch (action.payload.filterKey) {
        case "add":
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
        case "remove":
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

        default:
          return state;
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
  }
}

export const getBlogPost = (state) => state.blog;
export const getFilters = (state) => state.filters;
