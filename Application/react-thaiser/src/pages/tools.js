import React from "react";
import Navbar from "../component/Navbar";
import Tools from "../component/Tools";

function tools() {
  return (
    <>
      <Navbar isHome={false} />
      <Tools />
    </>
  );
}

export default tools;
