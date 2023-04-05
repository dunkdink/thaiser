import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const Container = styled.div`
  padding: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #e5e5e5;
  min-height: 692px;
`;

export const EditProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const EditProfileH1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #29282d;
  margin-bottom: 10px;
  text-align: center;
`;

export const EditProfileH2 = styled.h2`
  font-size: 40px;
  font-weight: 400;
  color: #29282d;
  margin-bottom: 40px;
  text-align: center;
`;

export const EditProfileMenu = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  padding: 15px;
  border-radius: 15px;
  background-color: #fff;
  list-style: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const EditProfileContent = styled.div`
  padding: 0px 150px;
  display: flex;
  flex-direction: column;
  align-items: right;
`;

export const EditProfileHeading = styled.div`
  height: 27px;
  font-size: 18px;
  font-weight: normal;
`;

export const EditProfileLine = styled.div`
  border: 1px solid #c4c4c4;
  width: 700px;
  margin-bottom: 20px;
`;

export const Text = styled.span`
  font-size: 18px;
  color: #ed7966;
  margin-top: 15px;
  text-align: left;
`;

export const EditProfileBtn = styled.button`
  margin-bottom: 15px;
  border-radius: 50px;
  background: #2e307a;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 200px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ed7966;
  }
`;

export const EditProfileBtnLink = styled(LinkR)`
  margin-bottom: 15px;
  border-radius: 50px;
  background: #ed7966;
  white-space: nowrap;
  text-align: center;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 200px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ed7966;
  }
`;
