import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Action
import {
  handleGoogleLoginAction,
  handleLoginWithEmailAction
} from "../../redux/actions/login.action";

//Styles
import "./Login.styles.css";

//Images
import Google from "../../assets/img/google.png";

const Login = () => {
  const [values, setValues] = useState({ emailForm: "", password: "" });

  const { message } = useSelector(store => store.error);
  const dispatch = useDispatch();

  const handleGoogleLogin = e => {
    e.preventDefault();
    dispatch(handleGoogleLoginAction());
  };

  const handleLoginWithEmail = e => {
    e.preventDefault();
    dispatch(handleLoginWithEmailAction(values));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-white_bg">
      <div className="w-2/3 flex login-container">
        <form
          className="w-1/2 m-auto flex flex-col justify-center items-center px-15 py-10 login-form bg-white"
          onSubmit={handleLoginWithEmail}
        >
          <h2 className="text-5xl font-bold mb-5">Sign in</h2>
          <div className="social mb-5 flex flex-col justify-center items-center">
            <p className="text-sm">With Google</p>
            <span className="google-icon mt-2">
              <img
                src={Google}
                alt="Login with Google"
                width="36"
                height="36"
                className="p-2 cursor-pointer"
                onClick={handleGoogleLogin}
              />
            </span>
          </div>

          {message && <p className="text-red text-center mb-5">{message}</p>}
          <p className="text-sm text-center mb-5">Or use your account</p>
          <input
            type="text"
            placeholder="Correo electrónico"
            className="w-3/4 mb-10 py-2 px-1 textfield"
            onChange={e => setValues({ ...values, emailForm: e.target.value })}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-3/4 mb-10 py-2 px-1 textfield"
            onChange={e => setValues({ ...values, password: e.target.value })}
          />
          <input
            type="submit"
            value="Sign in"
            className="w-2/4 mb-10 sign-in-email text-white py-2 rounded-lg	"
          />
        </form>

        <div className="w-1/2 bg-white px-15 py-5 sign-up text-center">
          <h2 className="text-center text-6xl font-bold text-white mt-10">
            Hello, Friend!
          </h2>
          <p className="text-center text-white mt-10 w-2/3 m-auto">
            Enter your personal details and start journey with us
          </p>
          <button className="sign-up-button mt-10 m-auto w-1/3 px-10 py-3 rounded-3xl	">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
