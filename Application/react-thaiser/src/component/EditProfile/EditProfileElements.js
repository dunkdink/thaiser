import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const Container = styled.div`
  padding: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='100' height='100' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 90%, 1)'/><path d='M100.16 24.75a2.93 2.93 0 11.04 5.86 2.93 2.93 0 01-2.95-2.91 2.92 2.92 0 012.9-2.95zm-100 0a2.93 2.93 0 11.04 5.86 2.93 2.93 0 01-2.95-2.91 2.92 2.92 0 012.9-2.95zm9.57 53.18c1.6 0 2.9 1.3 2.9 2.9a2.95 2.95 0 01-2.95 2.96 2.9 2.9 0 01-2.9-2.9 2.95 2.95 0 012.95-2.96zm58.57-2.51a2.93 2.93 0 11.04 5.86 2.93 2.93 0 11-.04-5.86zM49.45 4.4a2.93 2.93 0 11.04 5.86 2.93 2.93 0 01-.04-5.86zM21.66 49.6l2.95 2.91-2.9 2.95-2.95-2.9zm43.55-12.85s2.9 1.3 2.9 2.9v.05c0 1.6-1.3 2.9-2.9 2.9h-.04c-1.6 0-2.9-2.9-2.9-2.9z'  stroke-width='1' stroke='none' fill='hsla(0, 0%, 100%, 0.6)'/><path d='M89.93 57.48a1.08 1.08 0 01.39-1.38c2.44-1.53 5.04-1.81 7.15-.8 2.1 1.03 3.47 3.26 3.77 6.13.22 2.14 1.14 3.71 2.58 4.42 1.44.7 3.24.45 5.07-.69a1.07 1.07 0 011.13 1.8c-2.44 1.54-5.04 1.83-7.14.81-2.1-1.02-3.48-3.25-3.77-6.12-.23-2.15-1.15-3.72-2.59-4.42-1.44-.7-3.24-.46-5.07.68-.5.32-1.16.16-1.47-.33l-.05-.1zm10.06 31.11a.87.87 0 011.07.46c.99 2.14.95 4.28-.1 5.88-1.05 1.6-3 2.48-5.36 2.42-1.76-.04-3.13.54-3.85 1.63-.72 1.1-.71 2.59.03 4.18a.87.87 0 11-1.59.73c-.99-2.13-.95-4.27.1-5.87 1.05-1.6 3-2.48 5.36-2.42 1.76.04 3.13-.54 3.85-1.63.72-1.1.71-2.59-.03-4.18a.87.87 0 01.52-1.2zm0-100a.87.87 0 011.07.46c.99 2.14.95 4.28-.1 5.88-1.05 1.6-3 2.48-5.36 2.42-1.76-.04-3.13.54-3.85 1.63-.72 1.1-.71 2.59.03 4.18a.87.87 0 11-1.59.73c-.99-2.13-.95-4.27.1-5.87 1.05-1.6 3-2.48 5.36-2.42 1.76.04 3.13-.54 3.85-1.63.72-1.1.71-2.59-.03-4.18a.87.87 0 01.52-1.2zM9.44 9.9c.15-.3.54-.39.9-.24 1.88.82 3.16 2.12 3.53 3.58.38 1.47-.21 2.93-1.6 4.02-1.04.8-1.47 1.81-1.22 2.81.26 1 1.17 1.9 2.57 2.5.39.18.6.58.47.9-.13.34-.55.47-.93.3-1.88-.82-3.16-2.12-3.54-3.58-.37-1.46.22-2.93 1.6-4.01 1.05-.81 1.48-1.82 1.23-2.82-.26-1-1.17-1.89-2.58-2.5-.38-.17-.59-.57-.46-.9l.03-.07zm-19.51 47.59a1.08 1.08 0 01.39-1.38c2.44-1.53 5.04-1.81 7.15-.8 2.1 1.03 3.47 3.26 3.77 6.13.22 2.14 1.14 3.71 2.58 4.42 1.44.7 3.24.45 5.07-.69a1.07 1.07 0 011.13 1.8c-2.44 1.54-5.04 1.83-7.14.81C.78 66.75-.6 64.52-.9 61.65c-.23-2.15-1.15-3.72-2.59-4.42-1.44-.7-3.24-.46-5.07.68-.5.32-1.16.16-1.47-.33l-.05-.1zM-.01 88.59a.87.87 0 011.07.46c.99 2.14.95 4.28-.1 5.88-1.05 1.6-3 2.48-5.36 2.42-1.76-.04-3.13.54-3.85 1.63-.72 1.1-.71 2.59.03 4.18a.87.87 0 11-1.59.73c-.99-2.13-.95-4.27.1-5.87 1.05-1.6 3-2.48 5.36-2.42 1.76.04 3.13-.54 3.85-1.63.72-1.1.71-2.59-.03-4.18a.87.87 0 01.52-1.2zm43.92-4.85c-.24-.48-.1-1.08.36-1.38 2.41-1.59 5-1.93 7.13-.96s3.55 3.17 3.92 6.03c.27 2.14 1.23 3.7 2.68 4.36 1.46.67 3.25.38 5.05-.8a1.07 1.07 0 011.48.3c.32.5.19 1.16-.3 1.48-2.4 1.59-5 1.94-7.13.96-2.12-.97-3.55-3.17-3.91-6.03-.28-2.14-1.23-3.69-2.69-4.36-1.46-.67-3.25-.38-5.05.8-.49.32-1.16.2-1.48-.3l-.06-.1zM41 45.67c-.47.25-1.07.1-1.38-.35-1.61-2.39-2-4.98-1.05-7.11.94-2.14 3.13-3.6 5.98-4 2.14-.3 3.67-1.27 4.32-2.73.65-1.47.34-3.26-.87-5.05-.33-.49-.2-1.15.28-1.48.5-.33 1.15-.2 1.5.28 1.6 2.39 2 4.98 1.04 7.11-.94 2.14-3.12 3.6-5.98 4-2.13.3-3.67 1.27-4.32 2.73-.65 1.47-.34 3.26.87 5.05.33.49.21 1.15-.28 1.49-.04.01-.07.04-.1.06z'  stroke-width='1' stroke='none' fill='hsla(0, 0%, 100%, 0.6)'/><path d='M101 9.76l.75 1.71-9.97 4.34-.74-1.72zM87.35 9.7l-.66 1.75L59.14 1.12l.65-1.76zM41.4-6.21l1.62.93L34.2 10l-1.62-.94zM87.35 109.7l-.66 1.76-27.55-10.35.65-1.75zM50.58 56.03l1.85-.3 1.83 11.32-1.85.3zm-6.22 13.79l-.5 1.8-17-4.66.5-1.8zM41.4 93.79l1.62.93L34.2 110l-1.62-.94zM87.35 9.7l-.66 1.75L59.14 1.12l.65-1.76zm-7.77 42.56l.77 1.76-16.34 7.11-.77-1.75zM1 9.76l.75 1.71-9.96 4.34-.75-1.72zm100 0l.75 1.71-9.97 4.34-.74-1.72zM31.04 27.68l.6 1.86-23.13 7.48-.6-1.86zm48.1 46.45l.73-1.72 10 4.28-.74 1.72zM41.4-6.2l1.62.93L34.2 10l-1.62-.94zM67.54 11.2l1.62.94-7.26 12.57-1.62-.94zM21.22 90.35l-.6-1.4 9.58-4.16.6 1.39zm69.3-49.79l-1.5 1.12L78.5 27.55l1.5-1.12zm-3.17 69.14l-.66 1.76-27.55-10.35.65-1.75zM41.4 93.8l1.62.93L34.2 110l-1.62-.94zM1 9.76l.74 1.71-9.96 4.34-.75-1.72z'  stroke-width='1' stroke='none' fill='hsla(0, 0%, 100%, 0.6)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  min-height: 692px;
`;

export const EditProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const EditProfileH1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #29282d;
  margin-bottom: 10px;
  text-align: center;
`;

export const EditProfileH2 = styled.h2`
  font-size: 40px;
  font-weight: 400;
  color: #29282d;
  margin-bottom: 40px;
  text-align: center;
`;

export const EditProfileMenu = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  padding: 15px;
  border-radius: 15px;
  background-color: #fff;
  list-style: none;
  border-top: 3px solid #ed7966;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`;

export const EditProfileContent = styled.div`
  padding: 0px 150px;
  display: flex;
  flex-direction: column;
  align-items: right;
`;

export const EditProfileHeading = styled.div`
  height: 27px;
  font-size: 18px;
  font-weight: normal;
`;

export const EditProfileLine = styled.div`
  border: 1px solid #c4c4c4;
  width: 700px;
  margin-bottom: 20px;
`;

export const Text = styled.span`
  font-size: 18px;
  color: #ed7966;
  margin-top: 15px;
  text-align: left;
`;

export const EditProfileBtn = styled.button`
  margin-bottom: 15px;
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

export const EditProfileBtnLink = styled(LinkR)`
  margin-bottom: 15px;
  border-radius: 50px;
  background: #2e307a;
  white-space: nowrap;
  text-align: center;
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
