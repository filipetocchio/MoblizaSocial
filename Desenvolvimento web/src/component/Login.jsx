import React from "react";
import arroba from "../assets/arroba.svg";
import { Link } from "react-router-dom";
import pass from "../assets/pass.png";
import Cadastro from "./Cadastro";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="bg-fundoCadastro w-[40%] h-[30rem] rounded-lg flex-col items-center flex">
        <h1 className="mt-8 mb-8 text-7xl font-Inter">Login</h1>
        <form className="w-full flex flex-col gap-8 justify-center items-center">
          <div className="relative block w-[50%]">
            <input
              type="email"
              placeholder="Email"
              className="rounded-full w-full bg-search h-[3rem] text-placeholder indent-[6.9rem]"
            />
            <img
              src={arroba}
              alt="arroba"
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
              src={pass}
              alt="password"
              className="absolute top-[53%] translate-y-[-50%] left-8"
            />
            <span className="absolute top-[30%] bg-black block h-6 w-[2px] translate-y-[-10%] left-20"></span>
          </div>
          <button className="bg-button-navbar text-white w-64 h-12 rounded-full">
            Logar
          </button>
        </form>
      </div>

      <h1 className="text-2xl mt-8">
        Se não tem login, faça{" "}
        <Link className="text-blue-500" to="/cadastro">
          Cadastro
        </Link>
      </h1>
    </div>
  );
};

export default Login;
