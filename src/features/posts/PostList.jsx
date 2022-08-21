import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectAllPosts, fetchPosts } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector((state) => state.posts.status);
  const postsError = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch, posts]);

  let content;

  if (postsStatus === "loading") {
    content = <p>Please wait...</p>;
  } else if (postsStatus === "succeeded") {
    content = posts.map((post) => (
      <h2
        key={`post_${nanoid(4)}`}
        className="border-bottom border-danger mb-2"
      >
        {post.title}
      </h2>
    ));
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }

  return (
    <>
      <h2 className="mb-4">Post List</h2>
      <br />
      {content}
    </>
  );
};

export default PostList;
