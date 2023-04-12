import React from "react";
import VerticalNavbar from "../VerticalNavbar";
import { Container, DocumentWrap, InfoDocWrap } from "./HowToElements";
import InfoDoc from "../InfoDoc";
import { homeObjFour } from "../InfoDoc/Data";
function HowTo() {
  return (
    <>
      <Container>
        <DocumentWrap>
          <VerticalNavbar isDoc={false} isHowTo={true} isTools={false}/>
          <InfoDocWrap>
            <InfoDoc {...homeObjFour} />
          </InfoDocWrap>
        </DocumentWrap>
      </Container>
    </>
  );
}

export default HowTo;
