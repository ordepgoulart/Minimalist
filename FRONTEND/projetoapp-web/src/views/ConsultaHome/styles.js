import styled from 'styled-components'

export const Container = styled.div `
    width : 100%;
    
`

export const AreaFiltro = styled.div `
    width:100%;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    margin-top: 30px;

    button{
        backgroun: none;
        border: none;
    }
`
export const Cartao = styled.div `
    width:100%
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    margin 20px;
`

export const Titulo = styled.div`
    width: 100%;
    border-bottom: 1px solid #22b14c;
    display: flex;
    margin: 20px; 

    h3{
        color: #22b14c;
        position: relative;
        top: 30px;
        bacground: #fff;
        padding: 0 20px;

    }

`