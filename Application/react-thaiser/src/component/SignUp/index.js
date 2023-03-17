import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormH2,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  LabelLinks,
  FormRow
} from "./SignupElements";

function SignUp() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const {onSignUp,loading, message} = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    setAge(Number(age))
    const user = await onSignUp({username,email, password,name,age,gender});
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            Thai <span>SER</span>
          </Icon>
          <FormContent>
            <Form onSubmit={onSubmit}>
              <FormH1>ลงทะเบียนตอนนี้เลย!</FormH1>
              <FormH2>กรอกข้อมูลของคุณให้ครบถ้วน</FormH2>
              <FormRow>
              <FormContent>
                <FormLabel htmlFor="for">ชื่อผู้ใช้งาน</FormLabel>
                <FormInput type="username" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <FormLabel htmlFor="for">ชื่อ</FormLabel>
                <FormInput type="name" required value={name} onChange={(e)=>setName(e.target.value)}/>
                <FormLabel htmlFor="for">อีเมล</FormLabel>
                <FormInput type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <FormLabel htmlFor="for">อายุ</FormLabel>
                <FormInput type="age" required value={age} onChange={(e)=>setAge(e.target.value)}/>
              </FormContent>
              <FormContent>
                <FormLabel htmlFor="for">เพศ</FormLabel>
                <FormInput type="gender" required value={gender} onChange={(e)=>setGender(e.target.value)}/>
                <FormLabel htmlFor="for">รหัสผ่าน</FormLabel>
                <FormInput type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <FormLabel htmlFor="for">ยืนยันรหัสผ่าน</FormLabel>
                <FormInput type="password" required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
              </FormContent>
              </FormRow>
              <FormButton type="submit">ลงชื่อเข้าใช้งาน</FormButton>
              <Text>มีบัญชีอยู่แล้ว?</Text>
              <LabelLinks to="/signin">เข้าสู่ระบบ</LabelLinks>
              
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignUp;
