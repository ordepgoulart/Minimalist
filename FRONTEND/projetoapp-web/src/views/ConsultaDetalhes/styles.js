import styled from 'styled-components'

export const Container = styled.div `
    width : 100%;
    background: red;
    display:flex;
    flex-direction: column;
    align-itens: center;    
`
export const Formulario = styled.div `
    width : 50%;
    margin-bottom:70px;

`

export const TipoConsulta = styled.div`
    width : 100%;
    display:flex;
    justify-content: center;

    .inativo{
        opacity:0.5;
    }

    button{
        background:none;
        border: none;
    }

    img{
        width:50px;
        height:50px;
        margin:10px;
        cursor:pointer;

        &:hover{
            opacity: 0.8;
        }
    }

`


export const Input = styled.div `
    width : 100%;
    display:flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        color: #707070;
        margin-bottom: 5px;
    }


    input{
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #22b14c;
    }
`


export const TexTArea = styled.div `
    width : 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0; 

    span{
        color: #707070;
        margin: 5px 0;
    }


    textarea{
        font-size: 16px;
        border-bottom: 1px solid #22b14c;
    }
`

export const Opcao = styled.div `
    display:flex;
    width : 100%;
    justify-content: pace-between;

    button{
        font-weight: bold;
        color: #22b14c;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;
        &:hover{
            opacity:0.7;
        }
    }
`


export const Salvar = styled.div `
    display:flex;
    margin-rop:20px;

    button{
        width : 100%;
        font-weight: bold;
        color: #22b14c;
        border-radius:30px;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;
        &:hover{
            opacity:0.7;
        }
    }
`