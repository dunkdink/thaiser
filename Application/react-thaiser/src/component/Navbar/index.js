import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">THAI SER</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">หน้าหลัก</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="classify-emotions">จำแนกอารมณ์</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="tools">เครื่องมือและAPI</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/signin">เข้าสู่ระบบ</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">ลงทะเบียน</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
