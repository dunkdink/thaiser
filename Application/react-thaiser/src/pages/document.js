import React from "react";
import Navbar from "../component/Navbar";
import Document from "../component/Document";
function document() {
  return (
    <>
      <Navbar isHome={false} />
      <Document />
    </>
  );
}

export default document;
