import React, { useContext } from "react";
import PostsContext from "../../../context/PostsContext";

//Components
import Post from "../Post/Post";

const Posts = () => {
  const { posts } = useContext(PostsContext);
  return (
    <div>
      {posts?.map(post => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default Posts;
