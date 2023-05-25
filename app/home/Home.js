"use client";

import { useState } from "react";

const Home = (props) => {
  const { repo } = props;

  console.log(repo)

  return (
    <div>
      <h1> Movieneko </h1>
      <p> Disfruta de esta comunidad dedicada al cine </p>
      <p>Nombre del repositorio: {repo}</p>
      <p>Descripción del repositorio: {repo}</p>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();

  return { props: { repo } };
};
