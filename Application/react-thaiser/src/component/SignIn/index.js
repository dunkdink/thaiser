import React from "react";
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
} from "./SigninElements";

function SignIn() {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Thai SER</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>เข้าสู่ระบบ</FormH1>
              <FormH2>เข้าสู่ระบบเพื่อเข้าใช้งาน</FormH2>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Sign in</FormButton>
              <Text>Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignIn;
