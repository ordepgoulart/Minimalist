import styled from 'styled-components'

export const Container = styled.div `
    width : 250px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    flex-direction: column;
    margin: 20px;

    cursor: pointer;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);

    &:hover{
        opacity: 0.5;
    }
`

export const TopoCartao = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    img{
        widht: 100px;
        height: 100px;
    }
`

export const BotaoCartao = styled.div `
    widht: 100%;
    display: flex;
    justify-content: space-around;

    strong{
        color: #22b14c;
        font-weight: bold;
    }

    span{
        color: #707070;
    }
`
