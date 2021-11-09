import React from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h2>Hola {params.name}</h2>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default User;
