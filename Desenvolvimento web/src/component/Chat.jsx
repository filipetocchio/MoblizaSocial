import React from "react";
import Chatbar from "./Chatbar";
import Ricardo from "../assets/ricardo.png";
import Arroba from "../assets/arroba.svg";
import Exit from "../assets/exit.svg";
import Phone from "../assets/phone.svg";
import Conversa from "../assets/Conversa.png";
import Send from "../assets/send.svg";
import Joao from "../assets/joao.png";

const Chat = () => {
  return (
    <div className="w-full">
      <div className="bg-white w-full h-28 items-center grid grid-cols-[90%_20%] px-8">
        <div className="flex flex-row items-center gap-4">
          <img src={Ricardo} alt="ricardo" />
          <h1>Ricardo Lopez</h1>
        </div>

        <div className="flex-row flex gap-4">
          <img src={Arroba} alt="arroba" />
          <img src={Phone} alt="phone" />
          <img src={Exit} alt="exit" />
        </div>
      </div>

      <div className="grid grid-rows-[2fr_0.1fr] justify-center text-center gap-[14rem]">
        <img src={Conversa} alt="conversa" className="ml-4 mt-20" />

        <form className="flex flex-row gap-8 items-center justify-center">
          <input
            type="text"
            placeholder="Escreva algo"
            className="text-search-text w-2/4 h-10 indent-4 rounded-lg "
          ></input>
          <img src={Joao} alt="joao" />
        </form>
      </div>
    </div>
  );
};

export default Chat;
