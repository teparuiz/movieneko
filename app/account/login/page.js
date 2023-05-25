"use client";

import { useState } from "react";

const Login = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const _login = (e) => {
    e.preventDefault();
    console.log(user, password);
  };

  return (
    <form>
      <h1>Ingresar</h1>
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <button onClick={_login}>Ingresar</button>
    </form>
  );
};

export default Login;
