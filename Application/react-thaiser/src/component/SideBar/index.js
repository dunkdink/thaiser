import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarRoute2
} from "./SideBarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onclick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>หน้าหลัก</SidebarLink>
          <SidebarLink to="classify-emotions" onClick={toggle}>จำแนกอารมณ์</SidebarLink>
          <SidebarLink to="tools" onClick={toggle}>เครื่องมือและAPI</SidebarLink>
          <SidebarRoute2 to="/signin">เข้าสู่ระบบ</SidebarRoute2>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signup">ลงทะเบียน</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
