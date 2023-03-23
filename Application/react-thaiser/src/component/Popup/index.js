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
} from "./PopupElements";

function PopupCard({ onClose }) {
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
          <FormH1>แก้ไขบัญชี</FormH1>
          <FormContent>
            <Form onSubmit={onSubmit}>
              <FormRow>
                <FormContent>
                  <FormLabel htmlFor="for">ชื่อผู้ใช้งาน</FormLabel>
                  <FormInput
                    type="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <FormLabel htmlFor="for">ชื่อ</FormLabel>
                  <FormInput
                    type="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <FormLabel htmlFor="for">อีเมล</FormLabel>
                  <FormInput
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormLabel htmlFor="for">อายุ</FormLabel>
                  <FormInput
                    type="age"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <FormLabel htmlFor="for">เพศ</FormLabel>
                  <FormInput
                    type="gender"
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </FormContent>
              </FormRow>
            </Form>
          </FormContent>
          <FormButton type="submit">บันทึก</FormButton>
          <CloseButton onClick={onClose}><FaRegWindowClose size={'1.5rem'}/></CloseButton>
        </Card>
      </Overlay>
    </>
  );
}

export default PopupCard;
