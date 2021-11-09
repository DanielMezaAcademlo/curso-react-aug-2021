import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState("");

  const params = useParams();
  const history = useHistory();

  const handleHistory = () => {
    //history.push("/user/algo");
    // history.goBack();
    history.goForward();
  };

  console.log(history);
  return (
    <div>
      <h2>Home</h2>
      <input
        type="text"
        placeholder="user"
        onChange={({ target }) => setUser(target.value)}
      />
      <Link to={`/user/${user}`}>Go to user</Link>
      <button onClick={handleHistory}>Go to user pero en botón </button>
    </div>
  );
};

export default Home;
