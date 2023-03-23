import React from "react";
import useUpload from "../../hooks/useUpload";
import { Overlay,Card,PopupProcessContent,CloseButton } from "./PopupProcessElements";
import { DropFileProgressBar,DropFileBtn } from "../DropFile/DropFileElements";
function PopupProcessCard({ onClose,filename, progress, handleUpload  }) {
  return (
    <>
      <Overlay>
        <Card>
          <PopupProcessContent>
            <div>
              <p>{filename}</p>
              <DropFileProgressBar completed={progress} />
              <DropFileBtn onClick={handleUpload}>Upload</DropFileBtn>
            </div>
          </PopupProcessContent>
          <CloseButton onClick={onClose}>X</CloseButton>
        </Card>
      </Overlay>
    </>
  );
}

export default PopupProcessCard;
