import React from "react";
import VerticalNavbar from "../VerticalNavbar";
import { Container, DocumentWrap, InfoDocWrap } from "./HowToElements";
import InfoDoc from "../InfoDoc";
import {
  howToObjOne,
  howToObjTwo,
  howToObjThree,
  howToObjFour,
} from "../InfoDoc/Data";
function HowTo() {
  return (
    <>
      <Container>
        <DocumentWrap>
          <VerticalNavbar isDoc={false} isHowTo={true} isTools={false} />
          <InfoDocWrap>
            <InfoDoc {...howToObjOne} isHowTo={false} />
            <InfoDoc {...howToObjTwo} isHowTo={false} />
            <InfoDoc {...howToObjThree} isHowTo={false} />
            <InfoDoc {...howToObjFour} isHowTo={false} />
          </InfoDocWrap>
        </DocumentWrap>
      </Container>
    </>
  );
}

export default HowTo;
