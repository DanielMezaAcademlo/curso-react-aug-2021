import React, { useState } from "react";

//Components
import Header from "../../Components/Custom/Header/Header";
import UserForm from "../../Components/Home/Form/UserForm";
import GithubUser from "../../Components/Custom/GithubUser/GithubUser";
import Loader from "../../Components/Custom/Loader/Loader";

//Hooks
import { useFetchData } from "../../Hooks/useFetchData";

const Home = () => {
  //State
  const [userName, setUserName] = useState("");
  //Uso de Custom hook
  const { data, loader, handleFetchData } = useFetchData(
    `https://api.github.com/users/${userName}`
  );

  //Funciones
  const handleUserName = ({ value }) => {
    setUserName(value);
  };

  return (
    <div className="">
      <Header />
      <UserForm
        handleUserName={handleUserName}
        userName={userName}
        handleFetchData={handleFetchData}
      />
      <div className="text-center">
        {data ? (
          <GithubUser
            avatar={data?.avatar_url}
            github={data?.html_url}
            github_name={data?.login}
            name={data?.name}
            public_repos={data?.public_repos}
            followers={data?.followers}
            following={data?.following}
          />
        ) : null}
      </div>

      {loader && <Loader />}
    </div>
  );
};

export default Home;
