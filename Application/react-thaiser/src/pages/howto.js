import React from "react";
import Navbar from "../component/Navbar";
import HowTo from "../component/HowTo";

function howto() {
  return (
    <>
      <Navbar isHome={false} />
      <HowTo />
    </>
  );
}

export default howto;
