import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/SideBar";
import InfoSection from "../component/InfoSection";
import Services from "../component/Service";
import Footer from "../component/Footer";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from "../component/InfoSection/Data";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services/>
      <Footer />
    </>
  );
}

export default Home;
