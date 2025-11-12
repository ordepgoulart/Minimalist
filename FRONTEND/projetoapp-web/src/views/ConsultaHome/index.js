import React, {useState} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FiltrarConsulta from "../../components/ConsultaFiltrar";
import * as Styl from "./styles"
import ConsultaCartao from "../../components/ConsultaCartao";
function Home() {
  const [filtroConsulta, atualizarFiltroAtivo] = useState('hoje')


  return (
    <Styl.Container>
      <Header />
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
          <ConsultaCartao/>
          <ConsultaCartao/>
          <ConsultaCartao/>
          <ConsultaCartao/>
        </Styl.Cartao>
      <Footer />
    </Styl.Container>
  )
}

//Exportar a função qunafo o arquivo for convocado em algum lugar
export default Home;
