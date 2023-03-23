import React from "react";
import Result from "../component/Result";
import Navbar from "../component/Navbar";
function ResultPage() {
  return (
    <>
      <Navbar isHome={false}/>
      <Result />
    </>
  );
}

export default ResultPage;
