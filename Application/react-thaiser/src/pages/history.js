import React from 'react'
import History from '../component/History';
import Navbar from "../component/Navbar";

function history() {
  return (
    <>
    <Navbar isHome={false}/>
    <History/>
    </>
  )
}

export default history