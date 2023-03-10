import React from 'react';
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
    LabelLinks
  } from "./SignupElements";

function SignUp() {
  return (
    <>
    <Container>
        <FormWrap>
          <Icon to="/">Thai <span>SER</span></Icon>
          <FormContent>
            <Form action="#">
              <FormH1>ลงทะเบียนตอนนี้เลย!</FormH1>
              <FormH2>กรอกข้อมูลของคุณให้ครบถ้วน</FormH2>
              <FormLabel htmlFor="for">ชื่อผู้ใช้งาน</FormLabel>
              <FormInput type="name" required />
              <FormLabel htmlFor="for">อีเมล</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">รหัสผ่าน</FormLabel>
              <FormInput type="password" required />
              <FormLabel htmlFor="for">ยืนยันรหัสผ่าน</FormLabel>
              <FormInput type="confirm password" required />
              <FormButton type="submit">ลงชื่อเข้าใช้งาน</FormButton>
              <Text>มีบัญชีอยู่แล้ว?</Text>
              <LabelLinks to="/signin">เข้าสู่ระบบ</LabelLinks>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignUp