import React from "react";
import History from "../component/History";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
function history() {
  return (
    <>
      <Navbar isHome={false} />
      <History />
      <Footer />
    </>
  );
}

export default history;
