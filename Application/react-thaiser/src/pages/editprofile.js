import React from "react";
import Navbar from "../component/Navbar";
import EditProfile from "../component/EditProfile";
function editprofile() {
  return (
    <>
      <Navbar isHome={false} />
      <EditProfile />
    </>
  );
}

export default editprofile;
