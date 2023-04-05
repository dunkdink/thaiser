import React, { useState, useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { FaRegWindowClose } from "react-icons/fa";
import { UserContext } from "../../contexts/UserContext";
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
  const { user } = useContext(UserContext);
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
                  <FormLabel htmlFor="for">ชื่อ</FormLabel>
                  <FormInput
                    type="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={user?.name}
                  />
                  <FormLabel htmlFor="for">อีเมล</FormLabel>
                  <FormInput
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={user?.email}
                  />
                  <FormLabel htmlFor="for">อายุ</FormLabel>
                  <FormInput
                    type="age"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder={user?.age}
                  />
                  <FormLabel htmlFor="for">เพศ</FormLabel>
                  <FormInput
                    type="gender"
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    placeholder={user?.gender}
                  />
                </FormContent>
              </FormRow>
            </Form>
          </FormContent>
          <FormButton type="submit">บันทึก</FormButton>
          <CloseButton onClick={onClose}>
            <FaRegWindowClose size={"1.5rem"} />
          </CloseButton>
        </Card>
      </Overlay>
    </>
  );
}

export default PopupCard;
