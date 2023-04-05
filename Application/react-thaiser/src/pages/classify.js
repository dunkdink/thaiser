import React from "react";

import Navbar from "../component/Navbar";
import UploadFile from "../component/UploadFile";
function ClassifyPage() {
  return (
    <>
      <Navbar isHome={false} />
      <UploadFile />
    </>
  );
}

export default ClassifyPage;
