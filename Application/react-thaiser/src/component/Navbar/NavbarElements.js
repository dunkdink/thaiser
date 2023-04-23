import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "#fff")};
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #2f2e41;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  span {
    color: #ed7966;
    padding: 5px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #2e307a;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkS)`
  color: #2f2e41;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #ed7966;
  }
`;

export const NavLink2 = styled(LinkR)`
  color: #2f2e41;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  span {
    color: #ed7966;
    margin-left: 10px;
  }
  &.active {
    border-bottom: 3px solid #ed7966;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  margin: 5px;
  border-radius: 50px;
  background: #ed7966;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #2e307a;
    color: #fff;
  }
`;

export const NavBtnLink2 = styled(LinkR)`
  margin: 5px;
  border-radius: 50px;
  white-space: nowrap;
  padding: 10px 22px;
  color: #2f2e41;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ed7966;
  }
`;

export const DropdownMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 4.5rem;
  right: 12rem;
  width: 250px;
  padding: 15px;
  border-radius: 15px;
  background-color: #fff;
  list-style: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  span {
    color: #2f2e41;
    font-weight: bold;
    padding: 15px;
  }
`;

export const DropdownItem = styled(LinkR)`
  color: #2f2e41;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    color: #ed7966;
  }
`;

export const NavProfile = styled.div`
  color: #2f2e41;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  span {
    color: #ed7966;
    margin-left: 10px;
  }
  &.active {
    border-bottom: 3px solid #ed7966;
  }
`;
export const NavBtnWarp = styled.div`
  border-radius: 100px;
  border: 3px solid #2f2e41;
  height: 70%;
  margin-top: 10px;
`;
