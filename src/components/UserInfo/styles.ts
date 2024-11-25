import styled from "styled-components";
import { IUserInfoStyled } from "./types";

export const Container = styled.div`
  width: 100%;
  background-color: transparent;
  position: relative;
  margin-bottom: 24px;
`;

export const UserPicture = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 22px;
  border: 1px solid #ffffff;
  margin-right: 12px;
`;

export const NameText = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
`;

export const Progress = styled.div <IUserInfoStyled>`
  width: 180px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 3px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percentual }) => percentual}%;
    height: 6px;
    background-color: #23dd7a;
    border-radius: 3px;
  }
`;
