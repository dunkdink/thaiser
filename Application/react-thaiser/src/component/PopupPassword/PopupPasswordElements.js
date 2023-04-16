import styled from "styled-components";
import { Link } from "react-router-dom";
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  width: 500px;
  border-top: 3px solid #ed7966;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

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
    color: #ed7966;
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
  flex-direction: column;
  display: flex;
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
  border: 1px solid #ced4da;
  border-radius: 40px;
  width: 300px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
  }
`;

export const FormButton = styled.button`
  background: #2e307a;
  padding: 16px 0;
  border: none;
  border-radius: 40px;
  color: #fff;
  font-size: 20px;
  width: 200px;
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
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const FormButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
