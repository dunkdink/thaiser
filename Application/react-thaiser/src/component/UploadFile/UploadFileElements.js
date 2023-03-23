import styled from "styled-components";

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

export const UploadFileWrap = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const UploadFileH1 = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #29282d;
  margin-bottom: 10px;
  text-align: center;
`;

export const UploadFileContent = styled.div`
  padding:50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;