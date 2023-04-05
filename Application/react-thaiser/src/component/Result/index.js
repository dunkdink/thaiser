import React from "react";
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

function Result() {
  return (
    <>
      <Container>
        <ResultWrap>
          <ResultRow>
            <ResultBtn>อัปโหลดเสียง</ResultBtn>
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
                <ResultH3>xxx</ResultH3>
                <ResultH3>xxx</ResultH3>
                <ResultH3>xxx</ResultH3>
                <ResultH3>xxx</ResultH3>
              </ResultCol>
            </ResultContent>
            <ResultAllContent>
              <ResultRow>
                <ResultH3>ผลลัพธ์ทั้งหมด : xxxx</ResultH3>
              </ResultRow>
            </ResultAllContent>
          </ResultMenu>
        </ResultWrap>
      </Container>
    </>
  );
}

export default Result;
