import React from "react";
import Navbar from "../component/Navbar";
import Document from "../component/Document";
import Footer from "../component/Footer";
function document() {
  return (
    <>
      <Navbar isHome={false} />
      <Document />
      <Footer />
    </>
  );
}

export default document;
