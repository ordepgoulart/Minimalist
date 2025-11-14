import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FiltrarConsulta from "../../components/ConsultaFiltrar";
import * as Styl from "./styles"
import ConsultaCartao from "../../components/ConsultaCartao";
import api from '../../services/api.js'



function Home() {
  const [filtroConsulta, atualizarFiltroAtivo] = useState('hoje')
  const [consulta, atualizaConsulta] = useState([])
  const [atrasadas, atualizaAtrasadas] = useState();

  async function verificaAtrasadas() {
    await api.get('/consulta/atrasadas')
    .then(resp=>{
      atualizaAtrasadas(resp.data.length)
    })
  }
  
  async function carregarConsulta(){
    await api.get(`consulta/${filtroConsulta}`)
    .then(response=>{
      atualizaConsulta(response.data)
      console.log(response.data);
    })
  }

  function notificacao(){
    atualizarFiltroAtivo('atrasadas')
  }


  useEffect(()=>{
    carregarConsulta()
    verificaAtrasadas()
  }, [filtroConsulta])


  return (
    <Styl.Container>
      <Header atrasadas={atrasadas} notificacaoClick={notificacao}/>
        <Styl.AreaFiltro>
          <button type="button" onClick={()=>atualizarFiltroAtivo("todos")}>
              <FiltrarConsulta titulo="Todas" ativo={filtroConsulta=="todas"}/>
          </button>
          <button type="button" onClick={()=>atualizarFiltroAtivo("hoje")}>
              <FiltrarConsulta titulo="Hoje" ativo={filtroConsulta=="hoje"}/>
          </button>
          <button type="button" onClick={()=>atualizarFiltroAtivo("semana")}>
              <FiltrarConsulta titulo="Semana" ativo={filtroConsulta=="semana"}/>
          </button>
          <button type="button" onClick={()=>atualizarFiltroAtivo("mes")}>
              <FiltrarConsulta titulo="Mês" ativo={filtroConsulta=="mes"}/>
          </button>
          <button type="button" onClick={()=>atualizarFiltroAtivo("ano")}>
              <FiltrarConsulta titulo="Ano" ativo={filtroConsulta=="ano"}/>
          </button>
        </Styl.AreaFiltro>
        <Styl.Titulo>
          <h3>Consultas</h3>
        </Styl.Titulo>
        <Styl.Cartao>
          {
            consulta.map(x=>{
              <ConsultaCartao
              tipo={x.tipo}
              paciente={x.paciente}
              descricao={x.descricao}
              data={x.data}
              />
            })
          }
        </Styl.Cartao>
      <Footer />
    </Styl.Container>
  )
}

//Exportar a função qunafo o arquivo for convocado em algum lugar
export default Home;
