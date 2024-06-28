import React from 'react'
import { FaProductHunt,FaRegUserCircle } from "react-icons/fa";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { IoMdSettings,IoIosLogOut  } from "react-icons/io";

const Sideabar = () => {
  return (
   <div className="sidebar">
     <ul className='list_sidebar'>
        <li> <FaProductHunt /> Mange Products</li>
        <li> <FaProductHunt /> Create Product</li>
        <li> <FaRegUserCircle /> Users</li>
        <li> <FaRegUserCircle /> Orders</li>
        <li> <SiSimpleanalytics /> Analytics</li>
        <li> <MdOutlineReportGmailerrorred /> Reports</li>
        <li> <IoMdSettings/> Settings</li>
        <li> <IoIosLogOut/>  Logout</li>
     </ul>
   </div>
  )
}

export default Sideabar