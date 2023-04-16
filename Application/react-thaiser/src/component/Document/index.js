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
          <VerticalNavbar isDoc={true} isHowTo={false} isTools={false}/>
          <InfoDocWrap>
            <InfoDoc {...homeObjOne}  isHowTo={true}/>
            <InfoDoc {...homeObjTwo} isHowTo={true}/>
            <InfoDoc {...homeObjThree} isHowTo={true}/>
          </InfoDocWrap>
        </DocumentWrap>
      </Container>

    </>
  );
}

export default Document;
