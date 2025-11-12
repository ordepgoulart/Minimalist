import React from "react";
import *as Styl from "./styles"
import logo from "../../assets/logo.png"
import sino from "../../assets/sino.png"
import filtro from "../../assets/filtro.png"
import iconePadrao from "../../assets/padrao.png"

function ConsultaCartao() {
  return (
   <Styl.Container>
      <Styl.TopoCartao>
        <img src={iconePadrao} alt="Icone consulta padrão"></img>
        <h1>Paciente</h1>
      </Styl.TopoCartao>
      <Styl.BotaoCartao>
        <strong>12/11/2025</strong>
        <span>12:00</span>
      </Styl.BotaoCartao>
   </Styl.Container>
  );
}

//Exportar a função qunafo o arquivo for convocado em algum lugar
export default ConsultaCartao;
