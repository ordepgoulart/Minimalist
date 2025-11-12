import React from "react";
import *as Styl from "./styles"
import logo from "../../assets/logo.png"
import sino from "../../assets/sino.png"
import filtro from "../../assets/filtro.png"

function FiltrarConsulta({titulo, ativo}) {
  return (
   <Styl.Container ativo={ativo.toString()}>
      <img src={filtro} alt="Filtro" />
      <span>{titulo}</span>
   </Styl.Container>
  );
}

//Exportar a função qunafo o arquivo for convocado em algum lugar
export default FiltrarConsulta;
