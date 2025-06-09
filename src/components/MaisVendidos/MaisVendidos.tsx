import { ArrowRight } from "lucide-react";
import React from "react";

//componente
import CardOculos from "./CardOculos";

//imagens

const MaisVendidos = () => {
  return (
    <section className="mt-14 mx-8   lg:mt-[150px] lg:mx-32 ">
      <div className="flex justify-center flex-col lg:flex-row lg:justify-between items-center">
        <h2 className=" text-2xl lg:text-[50px] text-[#0d0d0dec] font-medium">
          Mais vendidos
        </h2>
        <p className="flex text-[#F26B1D]">
          Ver Todos <ArrowRight />
        </p>
      </div>

      <div className=" mt-8 lg:mt-[60px] flex flex-row gap-4 flex-wrap justify-center">
        <CardOculos
          imageUrl="/oculos1.jpg"
          name="Óculos de Praia"
          price={349.5}
        />
        <CardOculos
          imageUrl="/oculos2.jpg"
          name="Óculos Masculino"
          price={297.9}
        />{" "}
        <CardOculos
          imageUrl="/oculos4.jpg"
          name="Óculos Feminino"
          price={176.5}
        />{" "}
        <CardOculos
          imageUrl="/oculos3.jpg"
          name="Óculos Moderno"
          price={548.97}
        />

      </div>
    </section>
  );
};

export default MaisVendidos;
