import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="border-2 bg-white h-3/4 w-[70%] flex flex-col gap-20 items-center justify-center shadow-md">
        <h1 className="text-3xl">Seja bem vindo ao Mobiliza Social!</h1>
        <Link to="/about" className="w-3/4 flex justify-center">
          <button className="rounded-full bg-fundo h-14 w-[90%] text-xl">
            Conheça nosso trabalho!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
