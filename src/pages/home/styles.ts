import styled from "styled-components";

export const Container = styled.main `
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 4rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    


 
`;

export const TitlePrincipal = styled.h2 `
    font-family: 'Open Sans';
    font-weight: 700;
    font-style: normal;
    font-size: 56px;
    
    width: 100%;
    line-height: 64px;
    margin-bottom: 20px;

    color: #ffffff;
`;
export const TitleHighLight = styled.span `
  color: #e41050;
`;
export const Text = styled.p`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 18px;
    font-style: normal;
    width: 90%;
    line-height: 22px;
    margin-bottom: 20px;

    color: #ffffff;
`;

export const Column = styled.div `
    flex: 1;
`