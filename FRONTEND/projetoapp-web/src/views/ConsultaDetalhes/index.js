import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FiltrarConsulta from "../../components/ConsultaFiltrar";
import * as Styl from "./styles"
import ConsultaCartao from "../../components/ConsultaCartao";
import api from '../../services/api.js'
import tipoIcones from "../../utils/tipoIcone.js";



function Detalhes() {
  const [atrasadas, atualizaAtrasadas] = useState();
    const [tipo, atualizarTipo] = useState();

  async function vetificaAtrasadas() {
    await api.get('/consulta/atrasadas')
    .then(resp=>{
      atualizaAtrasadas(resp.data.length)
    })
  }

  useEffect(()=>{
    vetificaAtrasadas()
  })


  return (
    <Styl.Container>
      <Header atrasadas={atrasadas}/>
        <Styl.Formulario>
            <Styl.TipoConsulta>
                {
                    tipoIcones.map((icone,index)=>{
                        index>0 &&
                        <button type="buttom" onClick={()=> atualizarTipo(index)}>
                            <img src={icone} alt="Tipo consulta" className={tipo && tipo != index && 'inativo'}/>
                        </button>
                    })
                }

                <Styl.Input>
                    <span>Paciente</span>
                    <input type="text" placeholder="Nome do paciente"/>
                </Styl.Input>

                <Styl.TexTArea>
                    <span>Descrição</span>
                    <textarea rows={5} placeholder="Descrição da consulta"/>
                </Styl.TexTArea>

                <Styl.Input>
                    <span>Data</span>
                    <input type="date"/>
                </Styl.Input>

                 <Styl.Input>
                    <span>Hora</span>
                    <input type="time"/>
                </Styl.Input>

                <Styl.Opcao>
                    <div>
                        <input type="checkbox"></input>
                        <span>CONCLUÍDA</span>
                    </div>
                    <button type="button">EXCLUIR</button>
                </Styl.Opcao>

                <Styl.Salvar>
                    <button type="button">EXCLUIR</button>
                </Styl.Salvar>
            </Styl.TipoConsulta>
        </Styl.Formulario>
        
      <Footer />
    </Styl.Container>
  )
}

//Exportar a função qunafo o arquivo for convocado em algum lugar
export default Detalhes;
