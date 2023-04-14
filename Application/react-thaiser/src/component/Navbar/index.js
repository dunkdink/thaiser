import React, { useState, useEffect, useContext } from "react";
import { FaBars, FaRegUserCircle, FaRegSmile,FaAngleDown,FaAngleUp } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { UserContext } from "../../contexts/UserContext";
import useAuth from "../../hooks/useAuth";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLink2,
  NavBtn,
  NavBtnLink,
  NavBtnLink2,
  DropdownMenu,
  DropdownItem,
  NavProfile,
  NavBtnWarp,
} from "./NavbarElements";

const Navbar = ({ toggle, isHome }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const { user } = useContext(UserContext);
  const { onLogout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Thai<span>SER</span>
              <FaRegSmile size={"2rem"} style={{ marginLeft: '10px' ,color:'#2F2E41'}}/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            {isHome && (
              <NavMenu>
                <NavItem>
                  <NavLinks
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    หน้าหลัก
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="classify-emotions"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    จำแนกอารมณ์
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="tools"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    เครื่องมือและAPI
                  </NavLinks>
                </NavItem>
              </NavMenu>
            )}
            {user ? (
              <NavBtnWarp>
                <NavProfile onClick={toggleMenu}>
                  <FaRegUserCircle size={"1.5rem"} style={{color:'#2F2E41'}} />
                  <span>{user.name}</span>
                  {isOpen ? (<FaAngleUp size={"1.5rem"} style={{ marginLeft: '10px' ,color:'#2F2E41'}}/>) : (<FaAngleDown size={"1.5rem"} style={{ marginLeft: '10px' ,color:'#2F2E41'}}/>)}
                </NavProfile>
                <DropdownMenu isOpen={isOpen}>
                  <span>{user.name}</span>
                  <DropdownItem to="/editprofile">บัญชีของฉัน</DropdownItem>
                  <DropdownItem onClick={onLogout} to="/">
                    ออกจากระบบ
                  </DropdownItem>
                </DropdownMenu>
                {isOpen && <div onClick={closeMenu}></div>}
              </NavBtnWarp>
            ) : (
              <NavBtn>
                <NavBtnLink2 to="/signin">เข้าสู่ระบบ</NavBtnLink2>
                <NavBtnLink to="/signup">ลงทะเบียน</NavBtnLink>
              </NavBtn>
            )}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
