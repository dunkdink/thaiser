import styled from "styled-components";

export const Container = styled.div`
  padding: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #fff;
  min-height: 692px;
`;

export const DocumentWrap = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const InfoDocWrap = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
