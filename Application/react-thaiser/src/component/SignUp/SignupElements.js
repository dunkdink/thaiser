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
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='70' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 90%, 1)'/><path d='M-4.8 4.44L4 16.59 16.14 7.8M32 30.54l-13.23 7.07 7.06 13.23M-9 38.04l-3.81 14.5 14.5 3.81M65.22 4.44L74 16.59 86.15 7.8M61 38.04l-3.81 14.5 14.5 3.81'  stroke-linecap='square' stroke-width='1' stroke='hsla(0, 0%, 100%, 0.6)' fill='none'/><path d='M59.71 62.88v3h3M4.84 25.54L2.87 27.8l2.26 1.97m7.65 16.4l-2.21-2.03-2.03 2.21m29.26 7.13l.56 2.95 2.95-.55'  stroke-linecap='square' stroke-width='1' stroke='hsla(0, 0%, 100%, 0.6)' fill='none'/><path d='M58.98 27.57l-2.35-10.74-10.75 2.36M31.98-4.87l2.74 10.65 10.65-2.73M31.98 65.13l2.74 10.66 10.65-2.74'  stroke-linecap='square' stroke-width='1' stroke='hsla(0, 0%, 100%, 0.6)' fill='none'/><path d='M8.42 62.57l6.4 2.82 2.82-6.41m33.13-15.24l-4.86-5.03-5.03 4.86m-14-19.64l4.84-5.06-5.06-4.84'  stroke-linecap='square' stroke-width='1' stroke='hsla(0, 0%, 100%, 0.6)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
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
  background: #fff;
  height: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 15px 32px;
  border-radius: 5px;
  border-top: 3px solid #ed7966;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
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
  margin-bottom: 20px;
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
  padding: 16px 0px;
  border: none;
  border-radius: 40px;
  color: #fff;
  width: 300px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ed7966;
  }
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
  color: #2F2E41;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #ed7966;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ed7966;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
