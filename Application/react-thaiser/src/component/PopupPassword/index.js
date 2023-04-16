import React, { useState } from "react";
import useEditPassword from "../../hooks/useEditPassword";
import { FaRegWindowClose } from "react-icons/fa";
import {
  Overlay,
  Card,
  CloseButton,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormRow,
  FormButtonWrap,
} from "./PopupPasswordElements";

function PopupPasswordCard({ onClose }) {
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNew_password] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const { onChangePassword } = useEditPassword();

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = onChangePassword(old_password,new_password,confirm_password);
    onClose(true);
  };

  return (
    <>
      <Overlay>
        <Card>
          <FormH1>แก้ไขรหัสผ่าน</FormH1>
          <FormContent>
            <Form onSubmit={onSubmit}>
              <FormRow>
                <FormContent>
                  <FormLabel htmlFor="for">รหัสผ่านเก่า</FormLabel>
                  <FormInput
                    type="password"
                    required
                    value={old_password}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  <FormLabel htmlFor="for">รหัสผ่านใหม่</FormLabel>
                  <FormInput
                    type="password"
                    required
                    value={new_password}
                    onChange={(e) => setNew_password(e.target.value)}
                  />
                  <FormLabel htmlFor="for">ยืนยันรหัสผ่านใหม่</FormLabel>
                  <FormInput
                    type="password"
                    required
                    value={confirm_password}
                    onChange={(e) => setConfirm_password(e.target.value)}
                  />
                </FormContent>
              </FormRow>
              <FormButtonWrap>
                <FormButton type="submit">บันทึก</FormButton>
              </FormButtonWrap>
            </Form>
          </FormContent>
          <CloseButton onClick={onClose}>
            <FaRegWindowClose size={"1.5rem"} />
          </CloseButton>
        </Card>
      </Overlay>
    </>
  );
}

export default PopupPasswordCard;
