import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #e5e5e5;
  min-height: 692px;
  
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  text-decoration: none;
  color: #29282d;
  font-size: 32px;
  font-weight: 700;
  margin-top: 32px;

  span {
    color: #ED7966;
  }

  @media screen and (max-width: 480px) {
    margin-top: 8px;
    margin-left: 16px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  background: #e5e5e5;
  display: grid;
  margin: 0 auto;
  padding: 10px 32px;
  height: auto;
  border-radius: 40px;
  z-index: 1;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #29282d;
  margin-bottom: 10px;
  text-align: center;
`;

export const FormH2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: #29282d;
  margin-bottom: 40px;
  text-align: center;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #29282d;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  padding: 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 40px;
  width: 300px;
`;

export const FormButton = styled.button`
  background: #2e307a;
  padding: 16px 0;
  border: none;
  border-radius: 40px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 14px;
  color: #ed7966;
  margin-top: 24px;
  text-align: center;
`;

export const LabelLinks = styled(Link)`
  display: inline-block;
  align-items: center;
  text-decoration: none;
  text-align: center;
  padding: 0 1rem;
  height: 100%;
  color: #000;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #ed7966;
  }
`;

export const FormRow = styled.div`
  display:flex;
  flex-direction: row;
  gap: 50px;
`

