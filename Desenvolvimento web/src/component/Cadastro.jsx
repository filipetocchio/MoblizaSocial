import React from "react";
import User from "../assets/user.png";
import Arroba from "../assets/arroba.svg";
import Pass from "../assets/pass.png";
import { Link } from "react-router-dom";
import Login from "./Login";

const Cadastro = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="bg-fundoCadastro w-2/4 h-2/4 rounded-lg flex-col items-center flex">
        <h1 className="mt-8 mb-8 text-7xl font-Inter">Cadastro</h1>
        <form className="w-full flex flex-col gap-8 justify-center items-center">
          <div className="relative block w-[50%]">
            <input
              type="text"
              placeholder="Username"
              className="rounded-full w-full bg-search h-[3rem] text-placeholder indent-[6.9rem]"
            />
            <img
              src={User}
              alt="user"
              className="absolute top-[53%] translate-y-[-50%] left-8"
            />
            <span className="absolute top-[30%] bg-black block h-6 w-[2px] translate-y-[-10%] left-20"></span>
          </div>
          <div className="relative block w-[50%]">
            <input
              type="email"
              placeholder="Email"
              className="rounded-full w-full bg-search h-[3rem] text-placeholder indent-[6.9rem]"
            />
            <img
              src={Arroba}
              alt="user"
              className="absolute top-[53%] translate-y-[-50%] left-8"
            />
            <span className="absolute top-[30%] bg-black block h-6 w-[2px] translate-y-[-10%] left-20"></span>
          </div>
          <div className="relative block w-[50%]">
            <input
              type="password"
              placeholder="Password"
              className="rounded-full w-full bg-search h-[3rem] text-placeholder indent-[6.9rem]"
            />
            <img
              src={Pass}
              alt="user"
              className="absolute top-[53%] translate-y-[-50%] left-8"
            />
            <span className="absolute top-[30%] bg-black block h-6 w-[2px] translate-y-[-10%] left-20"></span>
          </div>
          <button className="bg-button-navbar text-white w-64 h-12 rounded-full">
            Cadastrar
          </button>
        </form>
      </div>

      <h1 className="text-2xl mt-8">
        Se já tem cadastro, faça{" "}
        <Link className="text-blue-500" to="/login">
          Login
        </Link>
      </h1>
    </div>
  );
};

export default Cadastro;
