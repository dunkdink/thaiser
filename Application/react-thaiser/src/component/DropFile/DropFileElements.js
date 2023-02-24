import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--body-bg);
  color: var(--txt-color);
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  padding-top: 100px;
`;

export const FormBox = styled.div`
  background-color: #E5E5E5;
  padding: 30px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const FormH1 = styled.h1`
  margin-bottom: 10px;
  color: #29282d;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const DropFileInput = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
  border: 2px dashed #000;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--input-bg);
`;

export const Img = styled.img`
    width: 50px;
    margin-right: 20px;
`
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #29282D;
`;

export const FormInput = styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`