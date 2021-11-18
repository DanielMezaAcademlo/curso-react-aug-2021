import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

//Bootstrap
import { Form, Button } from "react-bootstrap";

//Componentes
import MainTitle from "../../components/Custom/Titles/MainTitle";

//Context
import UserContext from "../../context/UserContext";

//Styles
import "./Login.styles.css";

const Login = () => {
  //Router Hooks
  const history = useHistory();

  //useContext
  const { dispatch } = useContext(UserContext);

  const handleLogin = async e => {
    //1. Prevenimos el default del evento
    e.preventDefault();
    //2. Petición asíncrona
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await request.json();
    //3. Guardamos la información en un state global
    dispatch({ type: "LOGIN_USER", payload: result[0] });
    //4. Mandamos al usuario "en sesión" al Home
    history.push("/");
  };

  return (
    <div className="login-container">
      <MainTitle title="Login" />
      <Form className="login-form" onSubmit={e => handleLogin(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
