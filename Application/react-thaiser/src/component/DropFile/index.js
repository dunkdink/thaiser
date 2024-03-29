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
    handleSummary,
    setFilename,
    setFile,
  } = useUpload();

  const [isOpenUpload, setIsOpenUpload] = useState(false);

  const handleUploadClick = () => {
    setIsOpenUpload(true);
  };

  const handleUploadClose = () => {
    setFile(null);
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
            handleSummary={handleSummary}
          />
        )}
        {
          <DropFileDropzone
            onDrop={(acceptedFiles) => {
              const file = acceptedFiles[0];
              if (file.type !== "audio/wav") {
                alert("Please upload a .wav file");
                return;
              }
              setFile(file);
              setFilename(file.name);
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <DragWarp {...getRootProps()}>
                <input {...getInputProps()} />
                <DragContent>
                  <DropFileBtn>อัพโหลดเสียง</DropFileBtn>
                  <p>.wav เท่านั้น</p>
                </DragContent>
              </DragWarp>
            )}
          </DropFileDropzone>
        }
        <TitleWarp>
          <p>ลากและวางที่นี่</p>
        </TitleWarp>
      </Container>
    </>
  );
}

export default DropFile;
