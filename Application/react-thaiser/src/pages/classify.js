import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import UploadFile from "../component/UploadFile";
function ClassifyPage() {
  return (
    <>
      <Navbar isHome={false} />
      <UploadFile />
      <Footer />
    </>
  );
}

export default ClassifyPage;
