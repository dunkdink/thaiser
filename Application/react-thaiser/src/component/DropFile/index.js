import React, { useState } from "react";
import {
  Container,
  Title,
  DropFileDropzone,
  DropFileProgressBar,
  DropFileBtn,
  TitleWarp,
  DragWarp,
  DragContent,
} from "./DropFileElements";
import useUpload from "../../hooks/useUpload";
import PopupProcessCard from "../PopupProcess";
function DropFile() {
  const {
    file,
    filename,
    progress,
    handleUpload,
    onFileChange,
    setFilename,
    setFile,
  } = useUpload();
  const [isOpenUpload, setIsOpenUpload] = useState(false);

  const handleUploadClick = () => {
    setIsOpenUpload(true);
  };

  const handleUploadClose = () => {
    setIsOpenUpload(false);
  };

  return (
    <>
      <Container>
        {file && (
          <PopupProcessCard
            onClose={handleUploadClose}
            filename={filename}
            progress={progress}
            handleUpload={handleUpload}
          />
        )}
        {!file && (
          <DropFileDropzone
            onDrop={(acceptedFiles) => {
              setFile(acceptedFiles[0]);
              setFilename(acceptedFiles[0].name);
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <DragWarp {...getRootProps()}>
                <input {...getInputProps()} />
                <DragContent>
                  <DropFileBtn>อัพโหลดเสียง</DropFileBtn>
                </DragContent>
              </DragWarp>
            )}
          </DropFileDropzone>
        )}
        <TitleWarp>
          <p>ลากและวางที่นี่</p>
        </TitleWarp>
      </Container>
    </>
  );
}

export default DropFile;
