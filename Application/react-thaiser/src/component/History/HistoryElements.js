import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const Container = styled.div`
  padding: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: auto;
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(4) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 90%, 1)'/><path d='M45.69 13.342c-1.677.945-3.557 1.6-5.48 1.588-1.922-.012-3.795-.691-5.462-1.653-1.668-.962-3.156-2.202-4.637-3.435-1.48-1.232-2.97-2.47-4.641-3.427-1.67-.957-3.547-1.628-5.47-1.628-1.923 0-3.8.67-5.47 1.628-1.67.956-3.161 2.195-4.641 3.427-1.48 1.233-2.97 2.473-4.637 3.435-1.667.962-3.54 1.641-5.463 1.653-1.922.012-3.802-.643-5.478-1.588v13.316c1.676-.945 3.556-1.6 5.478-1.588 1.923.012 3.796.691 5.463 1.653 1.668.962 3.156 2.202 4.637 3.435 1.48 1.232 2.97 2.47 4.641 3.427 1.67.957 3.547 1.628 5.47 1.628 1.923 0 3.8-.67 5.47-1.628 1.67-.956 3.161-2.195 4.641-3.427 1.48-1.233 2.97-2.473 4.637-3.435 1.667-.962 3.54-1.641 5.463-1.653 1.922-.012 3.802.643 5.478 1.588z'  stroke-width='1' stroke='hsla(0, 0%, 100%, 0.6)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  height: 90vh;
`;

export const HistoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HistoryH1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #29282d;
  text-align: center;
  margin-bottom: 40px;
`;
export const HistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
`;

export const HistoryMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  padding: 15px;
  border-radius: 15px;
  background-color: #fff;
  list-style: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const HistoryBtn = styled(LinkR)`
  margin-bottom: 15px;
  margin-left: 15px;
  border-radius: 50px;
  background: #2e307a;
  text-align: center;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 150px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ed7966;
  }
`;
