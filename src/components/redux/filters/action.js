import {
  FILTERED_AUTHOR,
  FILTERED_CATEGORY,
  FILTERED_TITLE,
} from "./actionTypes";

export const filtered_author = (filterKey, filterValue) => {
  return {
    type: FILTERED_AUTHOR,
    payload: {
      filterKey,
      filterValue,
    },
  };
};

export const filtered_category = (filterKey, filterValue) => {
  return {
    type: FILTERED_CATEGORY,
    payload: {
      filterKey,
      filterValue,
    },
  };
};

export const filtered_title = (filterValue) => {
  return {
    type: FILTERED_TITLE,
    payload: filterValue,
  };
};
