import React, { createContext, useState, useEffect } from "react";

//1. Creamos el context
const PostsContext = createContext();

//2. Provider
const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  // const [dataPosts, setDataPosts] = useState([]);

  useEffect(() => {
    const handlePosts = async () => {
      const request = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await request.json();
      const finalPosts = posts.slice(0, 10);

      const requestComments = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const comments = await requestComments.json();
      const finalComments = comments.slice(0, 50);

      finalPosts.map(post => {
        finalComments.map(comment => {
          if (comment.postId === post.id) {
            setPosts(prevState => [
              ...prevState,
              { ...post, comments: [...comments, comment] }
            ]);
          }
        });
      });

      // setPosts(result);
    };
    handlePosts();
  }, []);

  const data = {
    posts
  };
  return <PostsContext.Provider value={data}>{children}</PostsContext.Provider>;
};

export { PostsProvider };
export default PostsContext;
