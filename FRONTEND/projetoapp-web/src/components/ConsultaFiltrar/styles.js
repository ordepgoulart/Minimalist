import styled from 'styled-components'

export const Container = styled.div `
    width : 300px;
    height: 100%;
    background-color: ${prop=> prop.ativo=="true" ? '#22b14c': '#C0C0C0'};
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    cursor: pointer;
    &:hover{
        background-color: #22b14c
    }


    img{
        width: 25px;
        height: 25px;
    }

    span{
        color: #fff;
        font-weight: bold;
        align-self: flex-end;
        font-size: 20px;
    }
`