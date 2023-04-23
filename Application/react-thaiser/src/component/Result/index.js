import React, { useEffect, useState } from "react";
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
import { useContext } from "react";
import { SummaryContext } from "../../contexts/SummaryContext";

function Result() {
  const {
    file,
    filename,
    progress,
    handleUpload,
    handleSummary,
    setFilename,
    setFile,
  } = useUpload();

  const [isOpenUpload, setIsOpenUpload] = useState(false);

  const { summary } = useContext(SummaryContext);

  const handleUploadClick = () => {
    setIsOpenUpload(true);
  };

  const handleUploadClose = () => {
    setFile(null);
    setIsOpenUpload(false);
  };

  const [resultEmotion, setResultEmotion] = useState();

  useEffect(() => {
    if (summary) {
      const translations = {
        'Neutral': 'ปกติ',
        'Happy': 'สุข',
        'Sad': 'เศร้า',
        'Angry': 'โกรธ',
        'Frustrated': 'หงุดหงิด'
      };
  
      const sortedEmotions = Object.keys(summary).sort((a, b) => summary[b] - summary[a]);
      const primaryEmotion = sortedEmotions[0];
      const translatedEmotion = translations[primaryEmotion] || primaryEmotion;
  
      setResultEmotion(translatedEmotion);
    }
  }, [summary]);

  return (
    <>
      <Container>
        {file && (
          <PopupProcessCard
            onClose={handleUploadClose}
            filename={filename}
            progress={progress}
            handleUpload={handleUpload}
            handleSummary={handleSummary}
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
                <ResultH3>โกรธ</ResultH3>
                <ResultH3>หงุดหงิด</ResultH3>
              </ResultCol>
              <ResultCol>
                <ResultH2>จำนวนอารมณ์</ResultH2>
                <ResultH3>{summary?.Neutral || 0}</ResultH3>
                <ResultH3>{summary?.Happy || 0}</ResultH3>
                <ResultH3>{summary?.Sad || 0}</ResultH3>
                <ResultH3>{summary?.Angry || 0}</ResultH3>
                <ResultH3>{summary?.Frustrated || 0}</ResultH3>
              </ResultCol>
            </ResultContent>
            <ResultAllContent>
              <ResultRow>
                <ResultH3>ผลลัพธ์ทั้งหมด : {resultEmotion}</ResultH3>
              </ResultRow>
            </ResultAllContent>
          </ResultMenu>
        </ResultWrap>
      </Container>
    </>
  );
}

export default Result;
