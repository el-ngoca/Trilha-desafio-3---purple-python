import styled from "styled-components";
import { IColumn } from "./types";

export const Container = styled.main `
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
 
`;

export const TitlePrincipal = styled.h3 `
    font-family: 'Open-Sans';
    font-weight: 700;
    font-style: normal;
    font-size: 32px;
    
    width: 100%;
    line-height: 64px;
    margin-bottom: 20px;

    color: #ffffff;
`;
export const TitleHighLight = styled.span `
  color: #e41050;
`;
export const Text = styled.p`
    font-family: 'Open-Sans';
    font-weight: 400;
    font-size: 18px;
    font-style: normal;
    width: 90%;
    line-height: 22px;
    margin-bottom: 20px;

    color: #ffffff;
`;

export const Column = styled.div <IColumn> `
    flex: ${({flex})=> flex};
    padding-right: 24px;
`