import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Photo from "../assets/joao.png";
import doubleArrow from "../assets/doubleArrow.png";
import home from "../assets/home.svg";
import about from "../assets/about.svg";
import projects from "../assets/projects.svg";
import chat from "../assets/chat.svg";
import { Link } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState(true);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setUser(!user);
  };

  return (
    <>
      {!isOpen && (
        <div
          className="absolute top-0 left-0 w-10 h-full bg-bg-navbar flex items-center justify-center"
          onClick={toggleNavBar}
        >
          <img src={doubleArrow} alt="Open" className="w-6 h-6" />
        </div>
      )}
      <div
        className={`${
          isOpen ? "" : "hidden"
        } shadow-md min-w-60 h-screen bg-bg-navbar`}
      >
        <div className="flex flex-col mt-12 items-center gap-4">
          <img
            src={Logo}
            alt="logo da navbar"
            className="h-[5rem] min-w-4 object-contain"
          />
          <button
            onClick={toggleNavBar}
            className="border-[1px] bg-button-navbar gap-4 h-14 rounded-lg text-white font-Inter w-[12rem] flex flex-row justify-center items-center"
          >
            <img src={doubleArrow} alt="doublearrow" />
            Close
          </button>
          <Link to="/home">
            <button className="border-[1px] bg-button-navbar gap-4 h-14 rounded-lg text-white font-Inter w-[12rem] flex flex-row justify-center items-center">
              <img src={home} alt="home" />
              Home
            </button>
          </Link>

          <Link to="/about">
            <button className="border-[1px] bg-button-navbar gap-4 h-14 rounded-lg text-white font-Inter w-[12rem] flex flex-row justify-center items-center">
              <img src={about} alt="about" />
              About us
            </button>
          </Link>
          <Link to="/projetos">
            <button className="border-[1px] bg-button-navbar gap-4 h-14 rounded-lg text-white font-Inter w-[12rem] flex flex-row justify-center items-center">
              <img src={projects} alt="projects" />
              Projetos
            </button>
          </Link>
          <Link to="/chat">
            <button className="border-[1px] bg-button-navbar gap-4 h-14 rounded-lg text-white font-Inter w-[12rem] flex flex-row justify-center items-center">
              <img src={chat} alt="chat" />
              Chat
            </button>
          </Link>

          {user && (
            <div className="flex items-center mt-[300px] w-auto flex-row text-center w-[8rem]">
              <img src={Photo} alt="Foto do usuário" />
              <h1 className="ml-2 text-white font-Inter">João da Silva</h1>
            </div>
          )}

          <div>
            {user ? (
              <Link to="/login">
                <button
                  onClick={handleLogout}
                  className="border-[1px] bg-button-navbar h-14 rounded-lg text-white font-Inter w-[12rem]"
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button
                  onClick={handleLogout}
                  className="border-[1px] bg-button-navbar h-14 rounded-lg text-white font-Inter w-[12rem]"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
