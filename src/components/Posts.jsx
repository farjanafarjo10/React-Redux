import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

const Posts = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // decide what to render
  let content;

  if (isLoading) {
    content = <h1>Loading Posts....</h1>;
  }

  if (!isLoading && isError) {
    content = <h1>{error}</h1>;
  }

  if (!isLoading && !isError && posts.length === 0) {
    content = <h1>No Post found</h1>;
  }

  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <>
        {posts.map((post) => (
          <div
            className="p-1 my-1 flex flex-col items-center bg-[#0087ff] rounded "
            key={post.id}
          >
            {post.name}
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="p-4 bg-[#191c37] rounded shadow-2xl shadow-[#72727233]">
      {content}
    </div>
  );
};

export default Posts;
