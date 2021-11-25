import React from "react";
import { useDispatch } from "react-redux";

//Action
import { handleGithubLoginAction } from "../../redux/actions/login.action";

//Styles
import "./Login.styles.css";

const Login = () => {
  const dispatch = useDispatch();

  const handleGithubLogin = e => {
    e.preventDefault();
    dispatch(handleGithubLoginAction());
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <form
        onSubmit={handleGithubLogin}
        className="w-1/2 m-auto flex flex-col justify-center items-center px-15 py-10 login-form"
      >
        <h2 className="text-5xl font-light mb-5">Login</h2>

        <input
          type="text"
          placeholder="Correo electrónico"
          className="w-3/4 mb-10 py-2 px-1 textfield"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-3/4 mb-10 py-2 px-1 textfield"
        />
        <input
          type="submit"
          value="Ingresar con Google"
          className="w-3/4 mb-10 bg-yellow py-2"
        />
      </form>
    </div>
  );
};

export default Login;
