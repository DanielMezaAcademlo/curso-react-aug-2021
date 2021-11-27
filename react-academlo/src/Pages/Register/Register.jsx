import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Action
import { handleRegisterAction } from "../../redux/actions/login.action";

//Styles
import "./Register.styles.css";
const Register = () => {
  const { message } = useSelector(store => store.error);
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: ""
  });

  const handleRegister = e => {
    e.preventDefault();
    dispatch(handleRegisterAction(userInfo));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <form
        className="w-1/2 m-auto flex flex-col justify-center items-center px-15 py-10 login-form"
        onSubmit={handleRegister}
      >
        <h2 className="text-5xl font-light mb-5">Sign Up</h2>
        {message && <p className="text-red text-center mb-5">{message}</p>}
        <input
          type="text"
          placeholder="Usuario"
          className="w-3/4 mb-10 py-2 px-1 textfield"
          onChange={e => setUserInfo({ ...userInfo, userName: e.target.value })}
        />

        <input
          type="text"
          placeholder="Correo electrónico"
          className="w-3/4 mb-10 py-2 px-1 textfield"
          onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-3/4 mb-10 py-2 px-1 textfield"
          onChange={e => setUserInfo({ ...userInfo, password: e.target.value })}
        />
        <input
          type="submit"
          value="Crear cuenta"
          className="w-3/4 mb-10 bg-yellow py-2"
        />
      </form>
    </div>
  );
};

export default Register;
