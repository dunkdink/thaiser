import React, { useState } from "react";
import {
  Container,
  ResultWrap,
  ResultRow,
  ResultMenu,
  ResultContent,
  ResultAllContent,
  ResultH1,
  ResultH2,
  ResultH3,
  ResultBtn,
  ResultCol,
} from "./ResultElements";
import useUpload from "../../hooks/useUpload";
import PopupProcessCard from "../PopupProcess";

function Result() {
  const {
    file,
    filename,
    progress,
    handleUpload,
    onFileChange,
    setFilename,
    setFile,
  } = useUpload();

  const [isOpenUpload, setIsOpenUpload] = useState(false);

  const handleUploadClick = () => {
    setIsOpenUpload(true);
  };

  const handleUploadClose = () => {
    setFile(null);
    setIsOpenUpload(false);
  };
  return (
    <>
      <Container>
        {file && (
          <PopupProcessCard
            onClose={handleUploadClose}
            filename={filename}
            progress={progress}
            handleUpload={handleUpload}
          />
        )}
        <ResultWrap>
          <ResultRow>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(event) => {
                setFile(event.target.files[0]);
                setFilename(event.target.files[0].name);
              }}
            />
            <ResultBtn
              onClick={() => {
                document.getElementById("fileInput").click();
              }}
            >
              อัปโหลดเสียง
            </ResultBtn>
          </ResultRow>
          <ResultMenu>
            <ResultH1>ผลลัพธ์</ResultH1>
            <ResultContent>
              <ResultCol>
                <ResultH2>อารมณ์</ResultH2>
                <ResultH3>ปกติ</ResultH3>
                <ResultH3>สุข</ResultH3>
                <ResultH3>เศร้า</ResultH3>
                <ResultH3>หงุดหงิด</ResultH3>
              </ResultCol>
              <ResultCol>
                <ResultH2>จำนวนอารมณ์</ResultH2>
                <ResultH3>2</ResultH3>
                <ResultH3>4</ResultH3>
                <ResultH3>2</ResultH3>
                <ResultH3>1</ResultH3>
              </ResultCol>
            </ResultContent>
            <ResultAllContent>
              <ResultRow>
                <ResultH3>ผลลัพธ์ทั้งหมด : อารมณ์สุข</ResultH3>
              </ResultRow>
            </ResultAllContent>
          </ResultMenu>
        </ResultWrap>
      </Container>
    </>
  );
}

export default Result;
