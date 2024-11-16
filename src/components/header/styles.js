import styled from "styled-components";

export const Container = styled.div `
width: 100%;
max-width: 80%;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
   

`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;    
`

export const Wrapper = styled.div `
    background-color: #140227;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #b85115;

`

export const InputConatiner = styled.div `
    width: 175px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    margin: 0 12px;
    padding: 2px 12px

`

export const Menu = styled.a `
    font-family: 'Open-Sans';
    font-size: 18px;
    font-style: normal;
    color: #ffffff;
    line-height: 25px;
    margin-right: 12px;
    text-decoration: none;
`
export const MenuRight = styled.a `
    font-family: 'Open-Sans';
    font-size: 18px;
    font-style: normal;
    line-height: 25px;
    color: #ffffff;
    margin-right: 12px;
    text-decoration: none;
`

export const UserImg = styled.img `
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 1px solid #ffffff;
`
export const LogoImg = styled.img `
    width: 60px;
    height: 60px;
    padding-left: 10px;
`

export const Input = styled.input `
    background: transparent;
    border: 0;
    flex: 1;
    color: #ffffff;
    width: 100%;
    height: 100%;
    border-radius: 8px;
   

`