import React from "react";
import VerticalNavbar from "../VerticalNavbar";
import { Container, DocumentWrap, InfoDocWrap } from "./DocumentElements";
import InfoDoc from "../InfoDoc";
import { homeObjOne, homeObjTwo, homeObjThree } from "../InfoDoc/Data";
function Document() {
  return (
    <>
      <Container>
        <DocumentWrap>
          <VerticalNavbar />
          <InfoDocWrap>
            <InfoDoc {...homeObjOne} />
            <InfoDoc {...homeObjTwo} />
            <InfoDoc {...homeObjThree} />
          </InfoDocWrap>
        </DocumentWrap>
      </Container>
    </>
  );
}

export default Document;
