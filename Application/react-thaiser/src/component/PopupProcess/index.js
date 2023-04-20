import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import {
  Overlay,
  Card,
  PopupProcessContent,
  CloseButton,
  DropFileBtnWrap,
  PopupProcessWrap,
  Text,
  LoaderWrap,
} from "./PopupProcessElements";
import { DropFileBtn } from "../DropFile/DropFileElements";
import { ClipLoader } from "react-spinners";

function PopupProcessCard({ onClose, filename, handleUpload, handleSummary }) {
  const [uploading, setUploading] = useState(false);
  const [loadingSummary, setLoadingSummary] = useState(false);

  const handleUploadClick = async () => {
    setUploading(true);
    await handleUpload();
    setUploading(false);
    setLoadingSummary(true);
    await handleSummary();
    setLoadingSummary(false);
  };

  return (
    <>
      <Overlay>
        <Card>
          <PopupProcessContent>
            <PopupProcessWrap>
              <Text>{filename}</Text>
              {uploading || loadingSummary ? (
                <LoaderWrap>
                  <ClipLoader color={"#ed7966"} loading={true} size={60} />
                </LoaderWrap>
              ) : (
                <DropFileBtnWrap>
                  <DropFileBtn onClick={handleUploadClick}>Upload</DropFileBtn>
                </DropFileBtnWrap>
              )}
            </PopupProcessWrap>
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
