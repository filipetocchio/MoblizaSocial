import React from "react";
import search from "../assets/search.svg";
import Projeto1 from "../assets/projeto1.png";
import Projeto2 from "../assets/projeto2.png";
import Projeto3 from "../assets/projeto3.png";
import Projeto4 from "../assets/projeto4.png";
import Projeto5 from "../assets/projeto5.png";
import Projeto6 from "../assets/projeto6.png";
import Projeto7 from "../assets/projeto7.png";
import Projeto8 from "../assets/projeto8.png";

const Projetos = () => {
  return (
    <div className="w-full grid justify-center">
      <div className="flex justify-center mb-16">
        <div className="">
          <button className="min-w-12 w-[30rem] min-h-12 h-8 text-search-text border-[1px] mt-8 bg-search rounded-full flex flex-row items-center gap-8 pl-[6rem]">
            <img src={search} alt="procura" />
            <span className="bg-black block h-6 w-[2px]"></span>
            Pesquisa de Projetos
          </button>
        </div>
      </div>
      

      <div className="lg:grid lg:grid-cols-2 gap-[2rem] w-[60rem]">
        <div className="lg:w-auto grid border-[1px] bg-card grid-cols-2 items-center">
          <div className="lg:grid lg:grid-rows-[2fr_1fr] items-center text-left p-4 gap-[4rem]">
            <h1>Campanha de doação de sangue</h1>
            <p>Data: 10 de abril de 2024</p>
          </div>
          <img src={Projeto1} alt="fotopessoas" className="pl-[2rem]" />
        </div>

        <div className="grid border-[1px] bg-card grid-cols-2 items-center">
          <div className="grid grid-rows-[2fr_1fr] items-center text-left p-4 gap-[4rem]">
            <h1>Limpeza de Praia e Conscientização Ambiental </h1>
            <p>Data: 20 de Abril de 2024 </p>
          </div>
          <img src={Projeto2} alt="fotopessoas" className="pl-[2rem]"/>
        </div>

        <div className="grid border-[1px] bg-card grid-cols-2 items-center">
          <div className="grid grid-rows-[2fr_1fr] items-center text-left h-[160px] p-4 gap-[2rem]">
            <h1>Aulas de Reforço Escolar para Crianças Carentes</h1>
            <p>Data: Todas as quartas a partir de 15 de Abril de 2024</p>
          </div>
          <img src={Projeto3} alt="fotopessoas" className="pl-[2rem]"/>
        </div>

        <div className="grid border-[1px] bg-card grid-cols-2 items-center">
          <div className="grid grid-rows-[2fr_1fr] items-center text-left p-4 gap-[2rem]">
            <h1>Distribuição de Alimentos para Pessoas em Situação de Rua </h1>
            <p>Data: 25 de Abril de 2024</p>
          </div>
          <img src={Projeto4} alt="fotopessoas" className="pl-[2rem]" />
        </div>

        <div className="grid border-[1px] bg-card grid-cols-2 items-center">
          <div className="grid grid-rows-[2fr_1fr] items-center text-left h-[160px] p-4 gap-[1rem]">
            <h1>Atividades Recreativas em Asilo de Idosos</h1>
            <p>Data: Todos os sábados, a partir de 12 de Abril de 2024</p>
          </div>
          <img src={Projeto5} alt="fotopessoas" className="pl-[2rem]"/>
        </div>

        <div className="grid border-[1px] bg-card grid-cols-2 items-center">
          <div className="grid grid-rows-[2fr_1fr] items-center text-left h-[160px] p-4 gap-[4rem]">
            <h1>Workshop de Capacitação Profissional para Jovens</h1>
            <p>Data: 30 de Abril de 2024</p>
          </div>
          <img src={Projeto6} alt="fotopessoas" className="pl-[2rem]"/>
        </div>

        <div className="grid border-[1px] bg-card grid-cols-2 items-center">
          <div className="grid grid-rows-[2fr_1fr] items-center text-left h-[160px] p-4 gap-[0.1rem]">
            <h1>Apoio a Refugiados na Aprendizagem do Idioma Local</h1>
            <p>
              Data: Todas as Segundas e Quintas, a partir de 18 de Abril de 2024
            </p>
            </div>
            <img src={Projeto7} alt="fotopessoas" className="pl-[2rem]" />
          </div>

        <div className="grid border-[1px] bg-card grid-cols-2 items-center">
          <div className="grid grid-rows-[2fr_1fr] items-center text-left h-[160px] p-4 gap-[4rem]">
            <h1>Visita e Entretenimento em Orfanato Infantil </h1>
            <p>Data: 5 de Maio de 2024</p>
          </div>
          <img src={Projeto8} alt="fotopessoas" className="pl-[2rem]" />
        </div>

      </div>
    </div>
  );
};

export default Projetos;
