import axios from "axios";
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
  LabelLinks
} from "./SigninElements";


function SignIn() {
 
  // const signIn = async () => {
  //   const data = await axios.post('http://127.0.0.1:8000/signin', {
  //     username: "user1",
  //     password: "password1",
  //   })
  // }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Thai <span>SER</span></Icon>
          <FormContent>
            <Form action="#">
              <FormH1>เข้าสู่ระบบ</FormH1>
              <FormH2>เข้าสู่ระบบเพื่อเข้าใช้งาน</FormH2>
              <FormLabel htmlFor="for">อีเมล</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">รหัสผ่าน</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">เข้าสู่ระบบ</FormButton>
              
              <Text>ยังไม่มีบัญชีเพื่อใช้งาน ?</Text> 
              <LabelLinks to="/signup">ลงชื่อเข้าใช้งาน</LabelLinks>
            </Form>
            {/* <FormButton type="" onClick={signIn}>โง่ๆ</FormButton> */}
          </FormContent>
        </FormWrap>
        
      </Container>
    </>
  );
}

export default SignIn;
