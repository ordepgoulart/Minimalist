import React from "react";
import {BrowserRoutes as Router, Routes, Route} from 'react-router-dom'
import Home from "../views/ConsultaHome";
import ConsultaDetalhes from "../views/ConsultaDetalhes";


export default function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/formulario" element={<ConsultaDetalhes/>}></Route>
                <Route path="/paciente" element={<Home/>}></Route>
                 <Route path="/formulario/:idC" element={<ConsultaDetalhes/>}></Route>
            </Routes>
        </Router>
    )
}