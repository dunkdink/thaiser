import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterA,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>เกี่ยวกับเรา</FooterLinkTitle>
              <FooterA href="https://github.com/dunkdink" target="_blank">
                Git Hub
              </FooterA>
              <FooterA href="https://www.ce.kmitl.ac.th/" target="_blank">
                CE KMITL
              </FooterA>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>บริการของเรา</FooterLinkTitle>
              <FooterLink to="/tools">เครื่องมือ</FooterLink>
              <FooterLink to="/document">เอกสาร</FooterLink>
              <FooterLink to="/howto">วิธีใช้</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
