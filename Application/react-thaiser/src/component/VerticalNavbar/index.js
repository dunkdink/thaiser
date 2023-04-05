import React, { useState, useEffect, useContext } from "react";
import { IconContext } from "react-icons/lib";
import { Link } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogo,
} from "./VerticalNavbarElements";

const VerticalNavbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [scrollToId, setScrollToId] = useState(null);
  
  const changeNav = (id) => {
    setScrollToId(id);
  };

  useEffect(() => {
    if (scrollToId) {
      const target = document.getElementById(scrollToId);
      target.scrollIntoView({ behavior: "smooth" });
      setScrollToId(null);
    }
  }, [scrollToId]);

  return (
    <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo>
              Thai <span>SER</span> Doc
            </NavLogo>
            <NavMenu>
              <NavItem>
                <NavLinks 
                  to="Doc1"
                  smooth={true}
                  duration={500}
                  offset={100}
                  spy={true}
                  exact="true"
                  onClick={() => changeNav("Doc1")}>
                  จำแนกอารมณ์
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                to="Doc2"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  onClick={() => changeNav("Doc2")}
                >
                  เริ่มต้นทำงาน
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Doc3"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  onClick={() => changeNav("Doc3")}
                >
                  API อ้างอิง
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
    </>
  );
};
export default VerticalNavbar;
