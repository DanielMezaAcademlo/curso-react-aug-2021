import React, { useContext, useEffect, useState } from "react";

//Context
import UserContext from "../../context/UserContext";
import PostsContext from "../../context/PostsContext";

//Components
import MainTitle from "../../components/Custom/Titles/MainTitle";
import Posts from "../../components/Home/Posts/Posts";
import Tabs from "../../components/Custom/Tabs/Tabs";

const Profile = () => {
  //Context Info
  const { state } = useContext(UserContext);
  const { posts } = useContext(PostsContext);

  //State
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    if (posts && state?.user) {
      setMyPosts(posts.filter(post => post.userId === state.user.id));
    }
  }, [posts]);

  return (
    <div>
      <Tabs />
      <MainTitle title="Profile" />
      <Posts posts={myPosts} />
    </div>
  );
};

export default Profile;
