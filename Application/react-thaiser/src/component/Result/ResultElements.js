import styled from "styled-components";

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

export const ResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const ResultRow = styled.div`
  display: fixed;
  flex-direction: row;
  gap: 100px;
`;

export const ResultCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ResultMenu = styled.div`
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

export const ResultContent = styled.div`
  background-color: #2f2e41;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  width: 650px;
  height: auto;
  margin: 20px 0 20px 0;
`;

export const ResultAllContent = styled.div`
  background-color: #ed7966;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 650px;
  margin: 20px 0 20px 0;
`;

export const ResultH1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #29282d;
  text-align: center;
`;

export const ResultH2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #fff;

  text-align: center;
`;

export const ResultH3 = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  text-align: center;
`;

export const ResultBtn = styled.button`
  margin: 25px;
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
