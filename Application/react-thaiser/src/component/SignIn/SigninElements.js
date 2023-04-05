import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #e5e5e5;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;
export const Icon = styled(Link)`
  margin-top: 32px;
  text-decoration: none;
  color: #29282d;
  font-weight: 700;
  font-size: 32px;

  span {
    color: #ed7966;
  }

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #e5e5e5;
  max-width: 400px;
  height: auto;
  width: 550px;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 10px;
  color: #29282d;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const FormH2 = styled.h2`
  margin-bottom: 40px;
  color: #29282d;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #29282d;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: 1px solid #ced4da;
  border-radius: 40px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;
export const FormButton = styled.button`
  background: #2e307a;
  padding: 16px 0px;
  border: none;
  border-radius: 40px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #ed7966;
  font-size: 14px;
`;
export const LabelLinks = styled(Link)`
  color: #000;
  display: inline-block;
  align-items: center;
  text-decoration: none;
  text-align: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #ed7966;
  }
`;
