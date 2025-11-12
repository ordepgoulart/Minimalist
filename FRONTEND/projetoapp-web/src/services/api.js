//Vamos guardar as intels de conexão com o back

import axios from 'axios';

//criar uma constante api
// dentro do axios tem uma função "create" que irá criar uma conexão com a api que tempo por padrão de confi o param baseURL
 

 const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export default api;