import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaRegWindowClose } from "react-icons/fa";
import {
  Overlay,
  Card,
  CloseButton,
  FormContent,
  Form,
  FormH1,
  FormH2,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  LabelLinks,
  FormRow,
} from "./PopupPasswordElements";

function PopupPasswordCard({ onClose }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { onSignUp, loading, message } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    setAge(Number(age));
    const user = await onSignUp({
      username,
      email,
      password,
      name,
      age,
      gender,
    });
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FormLabel htmlFor="for">รหัสผ่านใหม่</FormLabel>
                  <FormInput
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FormLabel htmlFor="for">ยืนยันรหัสผ่านใหม่</FormLabel>
                  <FormInput
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </FormContent>
              </FormRow>
              
            </Form>
          </FormContent>
          <FormButton type="submit">แก้ไขรหัสผ่าน</FormButton>
          <CloseButton onClick={onClose}><FaRegWindowClose size={'1.5rem'}/></CloseButton>
        </Card>
      </Overlay>
    </>
  );
}

export default PopupPasswordCard;
