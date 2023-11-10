import styled from "styled-components";



export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    background-image: url('https://wallpapercave.com/wp/wp6123773.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;

    h1{
        color: white;
        font-size: 5em;
        margin-top: 2.5rem;
        margin-bottom: 0;
    }

    h2{
        color: white;
        font-size: 2em;
    }

    input{
        margin-top: 20px;
        padding: 10px;
        border-radius: 10px;
        border: none;
        font-size: 1.2em;
        font-weight: bold;
        text-align: center;
        width: 300px;
        outline: none;
        background-color: white;
        color: black;
        margin-bottom: 3em;

    }


`