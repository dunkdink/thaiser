import React from "react";
import DropFile from "../DropFile";
import { Container,UploadFileWrap,UploadFileH1,UploadFileContent} from "./UploadFileElements";
function UploadFile() {
  return (
    <>
      <Container>
        <UploadFileWrap>
          <UploadFileH1>อัปโหลดไฟล์เสียง เพื่อจำแนกอารมณ์</UploadFileH1>
          <UploadFileContent>
            <DropFile />
          </UploadFileContent>
        </UploadFileWrap>
      </Container>
    </>
  );
}

export default UploadFile;
