import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useSnackbar } from "notistack";
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
} from "./SigninElements";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onSignIn, loading, message } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = await onSignIn(email, password);
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
              <FormH1>เข้าสู่ระบบ</FormH1>
              <FormH2>เข้าสู่ระบบเพื่อเข้าใช้งาน</FormH2>
              <FormLabel htmlFor="for">ชื่อผู้ใช้งาน</FormLabel>
              <FormInput
                type="text"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel htmlFor="for">รหัสผ่าน</FormLabel>
              <FormInput
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormButton type="submit">เข้าสู่ระบบ</FormButton>
              <Text>ยังไม่มีบัญชีเพื่อใช้งาน ?</Text>
              <LabelLinks to="/signup">ลงชื่อเข้าใช้งาน</LabelLinks>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignIn;
