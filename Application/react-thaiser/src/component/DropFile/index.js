import React from "react";
import {
  Container,
  FormBox,
  FormH1,
  Img,
  FormLabel,
  FormInput,
  DropFileInput
} from "./DropFileElements";
import { ImageConfig } from "../../config/ImageConfig";
import uploadImg from "../../assets/cloud-upload-regular-240.png";

function DropFile() {
  return (
    <>
      <Container>
        <FormBox>
          <FormH1>DropFiles</FormH1>
          <DropFileInput>
            <Img src={uploadImg} alt="" />
            <FormLabel>ลากและวางที่นี่</FormLabel>
            <FormInput type="file" value="" />
          </DropFileInput>
        </FormBox>
      </Container>
    </>
  );
}

export default DropFile;
