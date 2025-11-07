const express = require('express');

const api = express();
const ConsultaRoutes = require('./routes/ConsultaRoutes');
//API saber que estamos recebendo info e devolvedo info em json
api.use(express.json());
api.use('/consulta',ConsultaRoutes);

api.get('\teste', (req, resp)=>{
    resp.send('EPA');               
})

api.listen(3000, ()=>{
    console.log("API online na rota: http://localhost:3000")
})

