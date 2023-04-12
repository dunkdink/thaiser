import styled from "styled-components";
import Dropzone from "react-dropzone";
import ProgressBar from "react-progressbar";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 320px;
  border-radius: 10px;
  border-top: 3px solid #ed7966;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DropFileDropzone = styled(Dropzone)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
  cursor: pointer;
  p {
    font-size: 16px;
    color: #333;
  }
`;

export const DropFileProgressBar = styled(ProgressBar)`
  height: auto;
  background-color: #eee;
  border-radius: 5px;
  overflow: hidden;

  div {
    height: 100%;
    background-color: #007bff;
    border-radius: 5px;
    transition: width 0.2s ease-in-out;
  }
`;

export const DropFileBtn = styled.button`
  margin-top: 15px;
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
    background: #ed7966;
  }
`;

export const TitleWarp = styled.div`
  color: #fff;
  font-size: 16px;
  background: #2e307a;
  width: 320px;
  height: 40px;
  padding: 10px;
  text-align: center;
  border-radius: 0px 0px 10px 10px;
`;

export const DragWarp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #fff;
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`;

export const DragContent = styled.div``;
