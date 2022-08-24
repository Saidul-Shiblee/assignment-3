import React from "react";
import Blog from "./Blog";
import BlogHeader from "./BlogHeader";
import { useSelector } from "react-redux";
import { getBlogPost, getFilters } from "./redux/filters/reducer";
import { filtered_title } from "./redux/filters/action";
const BlogList = () => {
  const blogPosts = useSelector(getBlogPost);
  const filters = useSelector(getFilters);
  console.log(blogPosts);

  return (
    <div className="relative max-w-7xl mx-auto">
      <BlogHeader />
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {blogPosts.map((blogPost) => (
          <Blog key={blogPost.blogId} blogPost={blogPost} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

// {
//   blogPosts
//     .filter((blogpost) => {
//       if (filters.blogCategory.length > 0) {
//         return filters.blogCategory.includes(blogpost.blogCategory);
//       }
//       return true;
//     })
//     .filter((blogpost) => {
//       if (filters.blogAuthor.length > 0) {
//         return filters.blogAuthor.includes(blogpost.blogAuthor);
//       }
//       return true;
//     })
//     .filter((blogpost) => {
//       if (filters.blogTitle.length > 0) {
//         return blogpost.blogTitle
//           .toLowerCase()
//           .includes(filters.blogTitle.toLowerCase());
//       }
//       return true;
//     })
//     .map((blogPost) => <Blog key={blogPost.blogId} blogPost={blogPost} />);
// }
