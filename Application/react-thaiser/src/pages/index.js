import React, {useState} from 'react'
import Navbar from '../component/Navbar';
import Sidebar from '../component/SideBar';
import InfoSection from '../component/InfoSection';
import { homeObjOne } from '../component/InfoSection/Data';

function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

  return (
    <>
    <Sidebar isOpen={isOpen}  toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <InfoSection {...homeObjOne}/>
    </>
  )
}

export default Home