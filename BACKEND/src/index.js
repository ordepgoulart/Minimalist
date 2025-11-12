const express = require('express');
const api = express();
const cors = require('cors')
const ConsultaRoutes = require('./routes/ConsultaRoutes');
api.use(cors());
//API saber que estamos recebendo info e devolvedo info em json
api.use(express.json());
api.use('/consulta',ConsultaRoutes);

api.get('\teste', (req, resp)=>{
    resp.send('EPA');               
})

api.listen(5000, ()=>{
    console.log("API online na rota: http://localhost:5000")
})

