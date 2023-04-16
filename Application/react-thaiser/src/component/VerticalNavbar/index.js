import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { Link } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogo,
} from "./VerticalNavbarElements";

const VerticalNavbar = ({ isDoc, isHowTo,isTools }) => {
  const [scrollToId, setScrollToId] = useState(null);
  const [activeLink, setActiveLink] = useState("Doc1");

  const changeNav = (id) => {
    setScrollToId(id);
  };

  useEffect(() => {
    if (scrollToId) {
      const target = document.getElementById(scrollToId);
      target.scrollIntoView();
      setScrollToId(null);
    }
  }, [scrollToId]);

  return (
    <>
      <Nav>
        <NavbarContainer>
          {isDoc && (
            <NavLogo>
              Thai <span>SER</span> Doc
            </NavLogo>
          )}
          {isHowTo && (
            <NavLogo>
              Thai <span>SER</span> วิธีใช้
            </NavLogo>
          )}
          {isTools && (
            <NavLogo>
              Thai <span>SER</span> Tools
            </NavLogo>
          )}
          {isDoc && (
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="Doc1"
                  className={activeLink === "Doc1" ? "active" : ""}
                  onClick={() => {
                    changeNav("Doc1");
                    setActiveLink("Doc1");
                  }}
                >
                  จำแนกอารมณ์
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Doc2"
                  className={activeLink === "Doc2" ? "active" : ""}
                  onClick={() => {
                    changeNav("Doc2");
                    setActiveLink("Doc2");
                  }}
                >
                  เริ่มต้นทำงาน
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="Doc3"
                  className={activeLink === "Doc3" ? "active" : ""}
                  onClick={() => {
                    changeNav("Doc3");
                    setActiveLink("Doc3");
                  }}
                >
                  API อ้างอิง
                </NavLinks>
              </NavItem>
            </NavMenu>
          )}
          {isHowTo && (
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="Doc1"
                  className={activeLink === "Doc1" ? "active" : ""}
                  onClick={() => {
                    changeNav("Doc1");
                    setActiveLink("Doc1");
                  }}
                >
                  วิธีการใช้งาน
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Doc2"
                  className={activeLink === "Doc2" ? "active" : ""}
                  onClick={() => {
                    changeNav("Doc2");
                    setActiveLink("Doc2");
                  }}
                >
                  1. อัปโหลดไฟล์เสียง
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Doc3"
                  className={activeLink === "Doc3" ? "active" : ""}
                  onClick={() => {
                    changeNav("Doc3");
                    setActiveLink("Doc3");
                  }}
                >
                  2.จำแนกอารมณ์
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Doc14"
                  className={activeLink === "Doc4" ? "active" : ""}
                  onClick={() => {
                    changeNav("Doc4");
                    setActiveLink("Doc4");
                  }}
                >
                  3.ดูผลลัพธ์
                </NavLinks>
              </NavItem>
            </NavMenu>
          )}
          {isTools && (
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="Doc1"
                  className={activeLink === "Doc1" ? "active" : ""}
                  onClick={() => {
                    changeNav("Doc1");
                    setActiveLink("Doc1");
                  }}
                >
                  API
                </NavLinks>
              </NavItem>
            </NavMenu>
          )}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default VerticalNavbar;
