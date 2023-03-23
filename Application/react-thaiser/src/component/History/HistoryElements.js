import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const Container = styled.div`
  padding:50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #e5e5e5;
  min-height: 692px;
`;

export const HistoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const HistoryH1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #29282d;
  text-align: center;
  margin-bottom:40px;
`;
export const HistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
`;

export const HistoryMenu = styled.div`
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

export const HistoryBtn = styled(LinkR)`
  margin-bottom: 15px;
  margin-left:15px;
  border-radius: 50px;
  background: #2e307a;
  text-align:center;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 150px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ed7966;
  }
`;