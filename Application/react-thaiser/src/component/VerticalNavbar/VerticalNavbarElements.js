import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #fff;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 0;
  border-right: 1px solid;
  border-color: #e5e5e5;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  z-index: 1;
  width: 35vh;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  text-align: center;
  height: 800px;
  padding: 30px 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: auto;
  margin-bottom: 30px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  color: #2f2e41;
  text-decoration: none;
  padding: 1rem;
  border-radius: 10px;
  width: 200px;
  cursor: pointer;

  &.active {
    color: #fff;
    background-color: #2e307a;
  }
`;

export const NavbarLine = styled.div`
  border: 1px solid #c4c4c4;
  width: 700px;
  margin-bottom: 20px;
`;

export const NavLogo = styled.h2`
  color: #2f2e41;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: bold;
  text-decoration: none;
  span {
    color: #ed7966;
    padding: 0px 5px;
  }
`;
