import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import {
  Overlay,
  Card,
  PopupProcessContent,
  CloseButton,
  DropFileBtnWrap
} from "./PopupProcessElements";
import { DropFileProgressBar, DropFileBtn } from "../DropFile/DropFileElements";
function PopupProcessCard({ onClose, filename, progress, handleUpload }) {
  return (
    <>
      <Overlay>
        <Card>
          <PopupProcessContent>
            <div>
              <p>{filename}</p>
              <DropFileProgressBar completed={progress} />
              <DropFileBtnWrap>
                <DropFileBtn onClick={handleUpload}>Upload</DropFileBtn>
              </DropFileBtnWrap>
            </div>
          </PopupProcessContent>
          <CloseButton onClick={onClose}>
            <FaRegWindowClose size={"1.5rem"} />
          </CloseButton>
        </Card>
      </Overlay>
    </>
  );
}

export default PopupProcessCard;
