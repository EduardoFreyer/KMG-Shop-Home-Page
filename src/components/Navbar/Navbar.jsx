import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { IoBagOutline, IoPersonOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-black flex w-full h-24 font-medium items-center justify-around'>
      <div className="p-8 md:w-auto w-full flex justify-between items-center z-20 static">
        <h1 className="font-bold text-white text-3xl text-nowrap">KMG Shop</h1>
        <div className="md:hidden mr-4" onClick={() => setOpen(!open)}>
          {open ? <IoCloseOutline size={30} style={{color: "white"}} /> : <IoMenuOutline size={30} style={{color: "white"}}/>}
        </div>
      </div>
      <ul className="md:flex hidden items-center gap-8">
        <NavLinks />
        <IoBagOutline style={{color: "white"}} size={25}/>
        <IoPersonOutline style={{color: "white"}} size={25}/>
      </ul>
      {/*Mobile*/}
      <ul className={`md:hidden bg-black absolute w-full h-full bottom-0 py-24
        pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
        <NavLinks />
      </ul>
    </nav>
  )
}

export default Navbar;