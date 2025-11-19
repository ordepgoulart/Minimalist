import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FiltrarConsulta from "../../components/ConsultaFiltrar";
import * as Styl from "./styles"
import ConsultaCartao from "../../components/ConsultaCartao";
import api from '../../services/api.js'
import tipoIcones from "../../utils/tipoIcone.js";



function Detalhes() {

  //Criar estados para armazenar os dados da consulta que vem do banco
  const [id, setId] = useState()
  const [vinculo, setVinvulo] = useState('Plano de Saúde')
  const [nome, setNome] = useState()
  const [descricao, setDescricao] = useState()
  const [dia, setDay] = useState()
  const [hora, setHour] = useState()

  async function vetificaAtrasadas() {
    await api.get('/consulta/atrasadas')
    .then(resp=>{
      atualizaAtrasadas(resp.data.length)
    })
  }

  const {idC} = useParams()
    async function carregarConsulta() {
        await api.get(`/consulta/buscar/${idC}`)
        .then(resp=>{
            atualizarTipo(resp.data.tipo)
            setPaciente(resp.data.paciente)
            setDescricao(resp.data.descricao)
            setDay(format(new Date(resp.data.dia), 'yyyy-MM-dd'))
            setHour(format(new Date(resp.data.hora), 'HH:mm'))
        })
    }

  useEffect(()=>{
    carregarConsulta()
    vetificaAtrasadas()
  })

  async function salvar() {
        await api.post('/consulta',{
            tipo,
            paciente,
            descricao,
            data: `${dia}T${hora}:00.000`
        })
        .then(()=>{
            alet("Consulta cadastrada!")
        })
    }

  return (
    <Styl.Container>
      <Header atrasadas={atrasadas}/>
        <Styl.Formulario>
            <Styl.TipoIcones>
                {
                    tipoIcones.map((icone,index)=>{
                        index>0 &&
                        <button type="buttom" onClick={()=> atualizarTipo(index)}>
                            <img src={icone} alt="Tipo consulta" className={tipo && tipo != index && 'inativo'}/>
                        </button>
                    })
                }
              </Styl.TipoIcones>

                <Styl.Input>
                        <span>Paciente</span>    
                        <input type='text' placeholder='Nome do paciente' onChange={e=>setPaciente(e.target.value)} value={paciente}/>
                    </Styl.Input>
                    
                    <Styl.TextArea>
                        <span>Descrição</span>    
                        <textarea rows={5} placeholder='Descrição da queixa' onChange={e=>setDescricao(e.target.value)} value={descricao}/>
                    </Styl.TextArea>

                    <Styl.Input>
                        <span>Data</span>    
                        <input type='date' onChange={e=>setDay(e.target.value)} value={dia}/>
                    </Styl.Input>

                    <Styl.Input>
                        <span>Hora</span>    
                        <input type='time' onChange={e=>setHour(e.target.value)} value={hora}/>
                    </Styl.Input>

                    <Styl.Opcao>
                        <div>
                            <input type='checkbox' onChange={e=>setConcluida(e.target.value)} value={!concluida}/>
                            <span>CONCLUÍDA</span>
                        </div>
                        <button type='button'>EXCLUIR</button>
                    </Styl.Opcao>

                    <Styl.Salvar>
                        <button type='button' onClick={salvar()}>SALVAR</button>
                    </Styl.Salvar>

        </Styl.Formulario>
        
      <Footer />
    </Styl.Container>
  )
}

//Exportar a função qunafo o arquivo for convocado em algum lugar
export default Detalhes;
