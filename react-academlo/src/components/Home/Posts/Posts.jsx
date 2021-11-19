import React from "react";

//Components
import Post from "../Post/Post";

//Styles
import "./Posts.styles.css";

const Posts = ({ posts }) => {
  return (
    <div className="post-container">
      {posts?.map(post => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default Posts;
