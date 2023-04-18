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
  LoaderWrap
} from "./PopupProcessElements";
import { DropFileBtn } from "../DropFile/DropFileElements";
import { ClipLoader } from "react-spinners";

function PopupProcessCard({ onClose, filename, progress, handleUpload }) {
  const [uploading, setUploading] = useState(false);

  const handleUploadClick = async () => {
    setUploading(true);
    await handleUpload();
    setUploading(false);
  };

  return (
    <>
      <Overlay>
        <Card>
          <PopupProcessContent>
            <PopupProcessWrap>
              <Text>{filename}</Text>
              {uploading ? (
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
