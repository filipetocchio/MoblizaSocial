import React from "react";
import search from "../assets/search.svg";
import Ricardo from "../assets/ricardo.png";
import Fred from "../assets/fred.png";
import Hilda from "../assets/hilda.png";
import Ryan from "../assets/ryan.png";
import Mytie from "../assets/mytie.png";
import Steve from "../assets/steve.png";

const Chatbar = () => {
  return (
    <div className="w-[20rem] flex flex-col bg-fundoChat">
      <button className="w-auto mt-[28px] h-14 max-h-32 text-search-text border-[1px] m-2 bg-search rounded-full flex flex-row items-center gap-[10px] pl-[0.5rem] text-left">
        <img src={search} alt="procura" />
        <span className="bg-black block h-6 w-[2px]"></span>
        Pesquise mensagem
      </button>

      <div>
        <span className="bg-black block h-1 w-3/4 ml-8 mt-4 border border-black"></span>
        <div className="flex items-center gap-2 mt-6 ml-2">
          <img src={Ricardo} alt="Ricardo" />
          <h1>Ricardo Lopez</h1>
          <p>11:23 am</p>
        </div>
        <div className="flex justify-center">
          <p>New Chat</p>
        </div>

        <span className="bg-black block h-1 w-3/4 ml-8 mt-4 border border-black"></span>
        <div className="flex items-center gap-2 mt-6 ml-2">
          <img src={Fred} alt="Fred" />
          <h1>Frederick Byrd</h1>
          <p>10:11 am</p>
        </div>
        <div className="flex justify-center">
          <p>New Chat</p>
        </div>

        <span className="bg-black block h-1 w-3/4 ml-8 mt-4 border border-black"></span>
        <div className="flex items-center gap-2 mt-6 ml-2">
          <img src={Hilda} alt="Hilda" />
          <h1>Hilda Hansen</h1>
          <p>08:43 am</p>
        </div>
        <div className="flex justify-center">
          <p>New Chat</p>
        </div>

        <span className="bg-black block h-1 w-3/4 ml-8 mt-4 border border-black"></span>
        <div className="flex items-center gap-2 mt-6 ml-2">
          <img src={Ryan} alt="Ryan" />
          <h1>Ryan Underwood</h1>
          <p>07:11 am</p>
        </div>
        <div className="flex justify-center">
          <p>New Chat</p>
        </div>

        <span className="bg-black block h-1 w-3/4 ml-8 mt-4 border border-black"></span>
        <div className="flex items-center gap-2 mt-6 ml-2">
          <img src={Mytie} alt="Ricardo" />
          <h1>Mytie Diaz</h1>
          <p>Yesterday</p>
        </div>
        <div className="flex justify-center">
          <p>New Chat</p>
        </div>

        <span className="bg-black block h-1 w-3/4 ml-8 mt-4 border border-black"></span>
        <div className="flex items-center gap-2 mt-6 ml-2">
          <img src={Steve} alt="Steve" />
          <h1>Steve Fowler</h1>
          <p>Yesterday</p>
        </div>
        <div className="flex justify-center">
          <p>New Chat</p>
        </div>
      </div>
    </div>
  );
};

export default Chatbar;
