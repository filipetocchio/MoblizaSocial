import React from "react";
import foto1 from "../assets/about1.png";
import foto2 from "../assets/about2.png";
import foto3 from "../assets/about3.png";

const About = () => {
  return (
    <div className="pt-[5rem] pl-[5rem]">
      <div className="flex flex-col md:grid md:grid-cols-[50%_40%]">
        <div className="h-22 mb-8 w-auto">
          <h1 className="mb-4 font-bold">About us</h1>
          <h1 className="mb-4 font-bold">MobSocial ou Mobiliza Social</h1>
          <p>
            somos uma comunidade dedicada à promoção do voluntariado e
            solidariedade, conectando pessoas dispostas a ajudar com
            instituições sociais que necessitam de apoio. Nosso objetivo é
            construir uma rede global onde cada ato de bondade faça a diferença.
            Através de um aplicativo intuitivo, facilitamos a busca por
            oportunidades de voluntariado, promovendo transparência, inclusão e
            impacto positivo em comunidades ao redor do mundo. Junte-se a nós e
            seja parte dessa jornada de transformação social.
          </p>
        </div>
        <img className="h-full w-full" src={foto1} alt="foto 1" />
      </div>

      <div className="flex flex-col gap-4 mt-4 md:grid md:grid-cols-2">
        <img className="w-full" src={foto2} alt="foto 2" />
        <img className="w-full" src={foto3} alt="foto 3" />
      </div>
    </div>
  );
};

export default About;
