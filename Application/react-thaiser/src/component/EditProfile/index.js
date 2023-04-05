import React, { useState, useContext } from "react";
import PopupCard from "../Popup";
import PopupPasswordCard from "../PopupPassword";
import { UserContext } from "../../contexts/UserContext";
import {
  Container,
  EditProfileH1,
  EditProfileH2,
  EditProfileWrap,
  EditProfileMenu,
  EditProfileContent,
  EditProfileHeading,
  EditProfileLine,
  Text,
  EditProfileBtn,
  EditProfileBtnLink,
} from "./EditProfileElements";

function EditProfile() {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const { user } = useContext(UserContext);

  const handleProfileClick = () => {
    setIsOpenProfile(true);
  };

  const handleProfileClose = () => {
    setIsOpenProfile(false);
  };

  const handlePasswordClick = () => {
    setIsOpenPassword(true);
  };

  const handlePasswordClose = () => {
    setIsOpenPassword(false);
  };

  return (
    <>
      <Container>
        <EditProfileWrap>
          <EditProfileH1>แดชบอร์ดของฉัน</EditProfileH1>
          <EditProfileH2>{user?.username}</EditProfileH2>
          <EditProfileMenu>
            <EditProfileH1>การตั้งค่าบัญชี</EditProfileH1>
            <EditProfileContent>
              <EditProfileHeading>ชื่อ</EditProfileHeading>
              <Text>{user?.name}</Text>
              <EditProfileLine></EditProfileLine>
              <EditProfileHeading>อีเมล</EditProfileHeading>
              <Text>{user?.email}</Text>
              <EditProfileLine></EditProfileLine>
              <EditProfileHeading>อายุ</EditProfileHeading>
              <Text>{user?.age}</Text>
              <EditProfileLine></EditProfileLine>
              <EditProfileHeading>เพศ</EditProfileHeading>
              <Text>{user?.gender}</Text>
              <EditProfileLine></EditProfileLine>
              <EditProfileBtn onClick={handleProfileClick}>
                แก้ไขบัญชี
              </EditProfileBtn>
              {isOpenProfile && <PopupCard onClose={handleProfileClose} />}
              <EditProfileHeading>รหัสผ่าน</EditProfileHeading>
              <EditProfileLine></EditProfileLine>
              <EditProfileBtn onClick={handlePasswordClick}>
                ตั้งรหัสผ่าน
              </EditProfileBtn>
              {isOpenPassword && (
                <PopupPasswordCard onClose={handlePasswordClose} />
              )}
              <EditProfileLine></EditProfileLine>
              <EditProfileH1>ประวัติการใช้งาน</EditProfileH1>
            </EditProfileContent>
            <EditProfileBtnLink to="/history">
              ประวัติการทำรายการ
            </EditProfileBtnLink>
          </EditProfileMenu>
        </EditProfileWrap>
      </Container>
    </>
  );
}

export default EditProfile;
