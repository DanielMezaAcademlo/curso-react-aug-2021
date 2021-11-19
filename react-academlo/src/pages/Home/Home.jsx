import React, { useContext } from "react";
import PostsContext from "../../context/PostsContext";

//Components
import Posts from "../../components/Home/Posts/Posts";

const Home = () => {
  const { posts } = useContext(PostsContext);

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
};

export default Home;
