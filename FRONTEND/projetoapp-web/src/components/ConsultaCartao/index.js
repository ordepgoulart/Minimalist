import React, {useMemo} from "react";
import *as Styl from "./styles"
import logo from "../../assets/logo.png"
import sino from "../../assets/sino.png"
import filtro from "../../assets/filtro.png"
import tipoIcones from "../../utils/tipoIcone";
import {format} from 'date-fns'

function ConsultaCartao({tipo, paciente, descricao, data}) {

  const dia = useMemo(()=> format(new Date(data),'dd/MM/yyyy'))
  const hora = useMemo(()=> format(new Date(data),'HH:mm'))

  return (
   <Styl.Container>
      <Styl.TopoCartao>
        <img src={tipoIcones[tipo]} alt="Icone consulta padrão"></img>
        <h1>{paciente}</h1>
      </Styl.TopoCartao>
      <Styl.BotaoCartao>
        <strong>{dia}</strong>
        <span>{hora}</span>
      </Styl.BotaoCartao>
   </Styl.Container>
  );
}

//Exportar a função qunafo o arquivo for convocado em algum lugar
export default ConsultaCartao;
