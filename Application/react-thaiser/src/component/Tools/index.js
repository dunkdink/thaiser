import React from "react";
import VerticalNavbar from "../VerticalNavbar";
import { Container, DocumentWrap, InfoDocWrap } from "./ToolsElements";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
function Tools() {
  return (
    <>
      <Container>
        <DocumentWrap>
          <VerticalNavbar isDoc={false} isHowTo={false} isTools={true} />
          <InfoDocWrap>
            <SwaggerUI url="http://api.ce32.ce.kmitl.cloud/swagger.json" />
          </InfoDocWrap>
        </DocumentWrap>
      </Container>
    </>
  );
}

export default Tools;
