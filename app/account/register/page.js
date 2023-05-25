"use client";

import { useState } from "react";

const Register = (props) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _register = (e) => {
    e.preventDefault();
    console.log(user, password, email);
  };

  return (
    <form>
      <h1>Registrar</h1>
      <input type="text" placeholder="Usuario" />
      <input type="email" placeholder="Correo electrónico" />
      <input type="password" placeholder="Contraseña" />
      <button onClick={_register}>Ingresar</button>
    </form>
  );
};

export default Register;
