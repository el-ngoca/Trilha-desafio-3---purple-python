import styled, { css } from "styled-components"
import { IButtonStyled } from "./types"

export const ButtonContainer = styled.button<IButtonStyled>`

background: #1e192c;
border-radius: 27px;
position: relative;
font-size: 16px;


color: white;
padding: 5px 16px;
min-width: 120px;
width: 100%;

&:hover {
    opacity: 0.5;
    cursor: pointer;
}

${({variant})=> variant !== "primary" && css `
    min-width: 167px;
    hight: 33px;

    background: #E41050;

    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }

    &::after {
        content:'';
        position: absolute;
        border: 1px solid #E41050;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
    }


`}

`
  


    
