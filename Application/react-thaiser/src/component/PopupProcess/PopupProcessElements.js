import styled from "styled-components";

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
  height: 350px;
  border-top: 3px solid #ed7966;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`;
export const PopupProcessContent = styled.div`
  display: absolute;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const DropFileBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PopupProcessWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.div`
  margin-top: 45px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  width: 80%;
`;

export const LoaderWrap = styled.div`
  display: flex;
  padding: 80px;
`;
